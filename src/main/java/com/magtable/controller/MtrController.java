package com.magtable.controller;

import com.magtable.model.entities.Assignmentequipment;
import com.magtable.model.entities.Equipment;
import com.magtable.model.entities.MagtableRecord;
import com.magtable.model.entities.Shift;
import com.magtable.repository.AssignmentEquipmentRepository;
import com.magtable.repository.EquipmentRepository;
import com.magtable.repository.MagTableRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/magtable")
public class MtrController {

    @Autowired
    MagTableRecordRepository magTableRecordRepository;

    @Autowired
    EquipmentRepository equipmentRepository;

    @Autowired
    AssignmentEquipmentRepository assignmentEquipmentRepository;

    @GetMapping("")
    public MagtableRecord getMagTable() {

        MagtableRecord magtableRecord = magTableRecordRepository.findMostRecent();

        if (magtableRecord == null) {

            magtableRecord = new MagtableRecord(); //making a blank mtr

            ArrayList<Equipment> equipmentList = (ArrayList<Equipment>) equipmentRepository.findAll();
            ArrayList<Assignmentequipment> assignmentequipmentList = new ArrayList<>();

            ArrayList<Shift> shiftList = new ArrayList<>(4);
            shiftList.add(null);
            shiftList.add(null);
            shiftList.add(null);
            shiftList.add(null);

            for (Equipment equipment : equipmentList) {

                if(!equipment.getActive()){
                    continue;
                }

                Assignmentequipment assignmentequipment = new Assignmentequipment();
                assignmentequipment.setEquipmentByEquipmentId(equipment);
                assignmentequipment.setAssignmentparkinglocationByAssignmentParkingLocationId(null);
                assignmentequipment.setShiftsByAssignmentEquipmentId(shiftList);

                assignmentequipmentList.add(assignmentequipment);

            }

            magtableRecord.setAssignments(assignmentequipmentList);

        }


        return magtableRecord;
    }


    @PostMapping("")
    public MagtableRecord publishMagTable(@RequestBody MagtableRecord magtableRecord){


            magTableRecordRepository.save(magtableRecord);


        return magtableRecord;
    }

}
