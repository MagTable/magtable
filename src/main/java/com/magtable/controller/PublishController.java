package com.magtable.controller;

import com.magtable.model.Brixrecord;
import com.magtable.model.Table;
import com.magtable.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
    public void publishToDatabase(@RequestBody Table table) {

    }
}
