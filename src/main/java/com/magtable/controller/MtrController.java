package com.magtable.controller;

import com.magtable.model.entities.Assignment;
import com.magtable.model.entities.Equipment;
import com.magtable.model.entities.MagtableRecord;
import com.magtable.model.entities.Shift;
import com.magtable.repository.AssignmentRepository;
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
    AssignmentRepository assignmentRepository;

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


    @PostMapping("")
    public MagtableRecord publishMagTable(@RequestBody MagtableRecord magtableRecord) {
        return magTableRecordRepository.save(magtableRecord);
    }

}
