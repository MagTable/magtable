package com.magtable.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.magtable.model.Brixrecord;
import com.magtable.model.Table;
import com.magtable.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class PublishController {

    @Autowired
    private MagtablerecordRepository magtablerecordRepository;

    @Autowired
    private AssignmentRepository assignmentRepository;

    @Autowired
    private ShiftRepository shiftRepository;

    @Autowired
    private BrixrecordRepository brixrecordRepository;

    @Autowired
    private EquipmentRepository equipmentRepository;


    @PostMapping("/publish")
    public ArrayList<Table> publishToDatabase(@RequestBody ArrayList<Table> table) {
        return table;
    }
}
