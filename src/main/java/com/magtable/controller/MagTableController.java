package com.magtable.controller;

import com.magtable.model.api.MagTableHistoryResponse;
import com.magtable.model.entities.*;
import com.magtable.repository.AssignmentRepository;
import com.magtable.repository.EquipmentRepository;
import com.magtable.repository.MagTableRecordRepository;
import com.magtable.repository.ParkingLocationRepository;
import com.magtable.services.ErrorService;
import com.magtable.services.magtableServices.MagTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;

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
    ParkingLocationRepository parkingLocationRepository;

    @Autowired
    SimpMessagingTemplate template;

    @Autowired
    ErrorService errorService;

    @Autowired
    MagTableService magTableService;


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
        if (magtableRecord == null) { //Create a new MagtableRecord
            magtableRecord = magTableService.newMTR();
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
    public MagtableRecord publishMagTable(@RequestBody MagtableRecord magtableRecord) {
        MagtableRecord saved = magTableRecordRepository.save(magtableRecord);
        template.convertAndSend("/topic/mtr", new WsAction(WsAction.MTR_PUBLISH, saved));
        return saved;
    }


    /**
     * Method for clearing the magtable - This is done by creating a new empty Magtablerecord
     * Scheduled to happen everyday at 2am
     */
    @Scheduled(cron = "0 0 2 * * *")
    public void clearMagTable(){
        MagtableRecord record = magTableService.newMTR();
        for(Assignment assignment : record.getAssignments()){
                assignment.setMagtableRecord(record);
        }
        record.setPublishedBy("system");
        record = magTableRecordRepository.save(record);
        template.convertAndSend("/topic/mtr", new WsAction(WsAction.MTR_PUBLISH, record));
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
     * description     method to get a list of magtableHistoryResponses
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
            if(!record.getPublishedBy().equals("system")){
                MagTableHistoryResponse response = new MagTableHistoryResponse(record);
                responses.add(response);
            }

        }

        return responses;
    }


    /**
     * route           Get /magtable/{id}
     * description     method to get a magtablerecord by ID
     * access          System Admins, Personnel Managers
     *
     * @param magId The magtable id
     */
    @GetMapping("/{id}")
    public MagtableRecord getMagtableByid(@PathVariable(value = "id")Integer magId){
        return magTableRecordRepository.findById(magId).orElseThrow(() -> errorService.magIdNotFound(magId));
    }
}
