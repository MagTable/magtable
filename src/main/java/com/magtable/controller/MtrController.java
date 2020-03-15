package com.magtable.controller;

import com.magtable.model.entities.MagTableRecord;
import com.magtable.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/magtable")
public class MtrController {

    @Autowired
    MagTableRecordRepository magTableRecordRepository;

    @Autowired
    AssignmentRepository assignmentRepository;

    @GetMapping("")
    public MagTableRecord getMagTable(){

        MagTableRecord magTableRecord = magTableRecordRepository.findMostRecent();

        if(magTableRecord == null){
            //Create a new empty one
            magTableRecord = new MagTableRecord();



        }

        return magTableRecord;


    }





}
