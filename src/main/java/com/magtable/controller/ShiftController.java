package com.magtable.controller;


import com.magtable.services.w2wServices.ShiftScheduler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("/shift")
public class ShiftController {

    @GetMapping("/update")
    public ArrayList getAllShifts(){
        ShiftScheduler shiftScheduler = ShiftScheduler.getInstance();
        return shiftScheduler.getShiftList();
    }





}
