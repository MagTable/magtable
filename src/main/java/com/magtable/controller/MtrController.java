package com.magtable.controller;

import com.magtable.model.*;
import com.magtable.repository.*;
import com.magtable.services.ErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/magtable")
public class MtrController {

    @Autowired
    private ErrorService errorService;

    @Autowired
    private MagtablerecordRepository magtablerecordRepository;

    @Autowired
    private AssignmentRepository assignmentRepository;

    @Autowired
    private EquipmentRepository equipmentRepository;

    @Autowired
    private ShiftRepository shiftRepository;

    @Autowired
    private BrixrecordRepository brixrecordRepository;

    @Autowired
    private PlassignmentRepository plassignmentRepository;

    @Autowired
    private TowerRepository towerRepository;

    @Autowired
    private TruckRepository truckRepository;

    /**
     * Route to get the most recent mag table
     * @return
     */
    @GetMapping()
    public MagtablerecordResponse getMagTable() {

        long assignmentValue = 0;
        assignmentValue += truckRepository.count();
        assignmentValue += towerRepository.count();

        //if we have no records in the database -> create a new one
        if(magtablerecordRepository.count() == 0){
            //Create a magtablerecord and input it into the database in order to create the base magID.
            Magtablerecord mtr = new Magtablerecord();
            magtablerecordRepository.save(mtr);



            //Create then send the empty skeleton to front end making sure to assign the magID from database
            MagtablerecordResponse mtrr = new MagtablerecordResponse(mtr.getMagID(), assignmentValue);
            return mtrr;
        }

        Magtablerecord magtablerecord = magtablerecordRepository.findMostRecent();


        return new MagtablerecordResponse(magtablerecord);

    }

    @PostMapping("/publish")
    public MagtablerecordResponse publishMagtable (@RequestBody MagtablerecordResponse mtrr) {
        Magtablerecord mtr = new Magtablerecord();

        try {
            magtablerecordRepository.findById(mtrr.getMagID()).orElseThrow(()->
                    errorService.magIdNotFound(mtrr.getMagID()));
        } catch (NullPointerException e){
            e.printStackTrace();
            throw errorService.invalidRecord();
        }

        //Creating the Magtablerecord
        //This is the beginning of every record entry in order to not break any database dependencies.
        try {
            mtr.setMagID(mtrr.getMagID());
            mtr.setDailyMix(mtrr.getDailyMix());
            mtr.setForecastLow(mtrr.getForecastLow());
            mtr.setPublishedBY(mtrr.getPublishedBy());
            mtr.setTimePublished(mtrr.getTimePublished());
            magtablerecordRepository.save(mtr);

        } catch (NullPointerException e) {
            e.printStackTrace();
            throw errorService.invalidRecord();
        }

        //Creating the assignment
        try {
            ArrayList<AssignmentRecord> assignments = mtrr.getAssignments();
            for (AssignmentRecord ar:assignments) {
                Assignment ass = new Assignment();
                //Get the extra information in each assignment such as shifts and brixrecord
                ArrayList<ShiftResponse> shifts = ar.getShifts();
                ArrayList<Brixrecord> brixrecords = ar.getBrixRecords();

                //Save the assignment
                ass.setMagID(mtr.getMagID());
                assignmentRepository.save(ass);

                //Save the equipment
                Equipment equipment = new Equipment(ar.getEquipment());
                equipment.setAssignmentID(ass.getAssignmentID());
                equipmentRepository.save(equipment);

                //Save the parkingLocation
                PlAssignment pla = new PlAssignment(ar.getPlAssignment());
                pla.setAssignmentID(ass.getAssignmentID());
                plassignmentRepository.save(pla);

                //Save the shifts
                for (ShiftResponse sr:shifts) {
                    Shift empShift = new Shift(sr);
                    empShift.setAssignmentID(ass.getAssignmentID());
                    shiftRepository.save(empShift);
                }

                //Save the brixrecords
                for (Brixrecord br:brixrecords) {
                    Brixrecord brix = new Brixrecord(br);
                    brix.setAssignmentID(ass.getAssignmentID());
                    brixrecordRepository.save(brix);
                }
            }
        } catch (NullPointerException e) {
            e.printStackTrace();
            throw errorService.invalidRecord();
        }

        return mtrr;
    }
}
