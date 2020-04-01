package com.magtable.controller;

import com.magtable.model.api.MagTableHistoryResponse;
import com.magtable.model.entities.*;
import com.magtable.repository.AssignmentRepository;
import com.magtable.repository.EquipmentRepository;
import com.magtable.repository.MagTableRecordRepository;
import com.magtable.repository.ParkingLocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Rest controller for MagTable records
 *
 * @author David Ward, Mustafa Al Khaldi, Arran Woodruff
 */
@RestController
@RequestMapping("/magtable")
public class MagTableController {

    @Autowired
    MagTableRecordRepository magTableRecordRepository;

    @Autowired
    EquipmentRepository equipmentRepository;

    @Autowired
    AssignmentRepository assignmentRepository;

    @Autowired
    ParkingLocationRepository parkingLocationRepository;

    @Autowired
    SimpMessagingTemplate template;


    /**
     * route           GET /magtable
     * description     method to get the most recent magtable, or create one if one doesn't exist. Will populate the
     * assignment table with assignments equal to the total number of equipments.
     * <p>
     * access          System Admins, Personnel Managers, Mechanics
     *
     * @return The created or most recent magtable record
     */
    @GetMapping("")
    public MagtableRecord getMagTable() {
        MagtableRecord magtableRecord = magTableRecordRepository.findMostRecent();
        if (magtableRecord == null) {
            magtableRecord = new MagtableRecord(); //making a blank mtr

            ArrayList<Equipment> equipmentList = (ArrayList<Equipment>) equipmentRepository.findAll();
            ArrayList<Assignment> assignmentList = new ArrayList<>();

            ArrayList<Shift> shiftList = new ArrayList<>(4);

            for (Equipment equipment : equipmentList) {

                if (!equipment.getActive()) {
                    continue;
                }

                Assignment assignment = new Assignment();
                assignment.setEquipment(equipment);
                assignment.setParkingLocation(null);
                assignment.setEmployeeShifts(shiftList);

                assignmentList.add(assignment);

            }

            magtableRecord.setAssignments(assignmentList);

        }
        return magtableRecord;
    }


    /**
     * route           POST /magtable
     * description     method to publish the magtable, saves the magtable into the database
     * access          System Admins, Personnel Managers, Mechanics
     *
     * @param magtableRecord The MagtableRecord to be saved
     */
    @PostMapping("")
    public void publishMagTable(@RequestBody MagtableRecord magtableRecord) {
        MagtableRecord saved = magTableRecordRepository.save(magtableRecord);
        template.convertAndSend("/topic/mtr", new WsAction(WsAction.MTR_PUBLISH, saved));
    }

    /**
     * route           GET /magtable/parkingLocation/all
     * description     method to fetch all parking location info from the database
     * access          System Admins, Personnel Managers, Mechanics
     *
     * @return The list of parking locations
     */
    @GetMapping("/parkingLocation/all")
    public List<ParkingLocation> getParkingLocations() {
        return parkingLocationRepository.findAll();
    }


    /**
     * route           Get /list/{date}
     * description     method to
     * access          System Admins, Personnel Managers
     *
     * @param requestDate The request containing the date
     */
    @GetMapping("/list/{date}")
    public List<MagTableHistoryResponse> getHistoricalMagTables(@PathVariable(value = "date") String requestDate) {

        ZoneId defaultZoneId = ZoneId.systemDefault();

        LocalDate localDate = LocalDate.parse(requestDate);
        Date date = Date.from(localDate.atStartOfDay(defaultZoneId).toInstant());

        ArrayList<MagtableRecord> records = (ArrayList<MagtableRecord>) magTableRecordRepository.findAllByDate(date);

        ArrayList<MagTableHistoryResponse> responses = new ArrayList<>();

        for(MagtableRecord record : records){
            MagTableHistoryResponse response = new MagTableHistoryResponse(record);
                responses.add(response);
        }

        return responses;
    }


}
