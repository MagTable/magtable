package com.magtable.controller;

import com.magtable.model.api.ShiftResponse;
import com.magtable.model.entities.Shift;
import com.magtable.repository.*;
import com.magtable.services.ErrorService;
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





}
