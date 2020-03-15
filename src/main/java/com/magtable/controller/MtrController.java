package com.magtable.controller;

import com.magtable.model.entities.Assignment;
import com.magtable.model.entities.MagTableRecord;
import com.magtable.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/magtable")
public class MtrController {

    @Autowired
    MagTableRecordRepository magTableRecordRepository;

    @Autowired
    AssignmentRepository assignmentRepository;

    @Autowired
    EquipmentRepository equipmentRepository;

    @GetMapping("")
    public MagTableRecord getMagTable(){

        MagTableRecord magTableRecord = magTableRecordRepository.findMostRecent();

        if(magTableRecord == null){
            //Create a new empty one
            magTableRecord = new MagTableRecord();
            //first one ever so Id will be 1
            magTableRecord.setId(1);

            ArrayList<Assignment> assignments = new ArrayList<>();
            long equipmentLength = equipmentRepository.count();
            magTableRecordRepository.save(magTableRecord);

            for(long i = 0; i < equipmentLength; i++){
                Assignment assignment = new Assignment();
                assignments.add(assignment);
                assignment.setMagtablerecordByMagtableRecordId(magTableRecord);
                assignmentRepository.save(assignment);
            }



        }

        return magTableRecord;


    }





}
