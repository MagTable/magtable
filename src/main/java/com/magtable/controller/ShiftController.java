package com.magtable.controller;


import com.magtable.model.api.ShiftList;
import com.magtable.model.entities.W2WShift;
import com.magtable.repository.W2WShiftRepository;
import com.magtable.services.apis.W2WAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Calendar;

/**
 * Rest Controller for Employee Shift Routes
 * @author David Ward
 */
@RestController
@RequestMapping("/shift")
public class ShiftController {

    private static String SID = "32325584041A4";


    @Autowired
    private W2WShiftRepository w2wShiftRepository;

    @Autowired
    private W2WAPI w2WAPI;

    /**
     * route           GET /shift/get
     * description     route to get all the shifts +stored in server memory
     * access          Personnel Mangers, System Admins
     *
     * @return A list of the W2W shifts
     */
    @GetMapping("/all")
    public ShiftList getAllShifts() {
        ShiftList shiftList = ShiftList.getInstance();
        shiftList.updateShifts((ArrayList<W2WShift>) w2wShiftRepository.findAll());
        return shiftList;
    }

    /**
     * Route  Get/update
     * description  route to pull from the W2W API
     * access Personnel Managers, System Admins
     *
     *
     * @return An OK response if pulled successfully
     */
    @GetMapping("/update")
    @Scheduled(cron = "0 0 2 * * *")
    public ShiftList updateShifts() {
        try {
            w2WAPI.APIPull(SID);
        } catch (Exception e) {
            e.printStackTrace();
        }
        ShiftList shiftList = ShiftList.getInstance();
        shiftList.updateShifts((ArrayList<W2WShift>) w2wShiftRepository.findAll());

        return shiftList;
    }


    /**
     * route           POST /shift/add
     * description     route to add a shift to shiftList
     * access          Personnel Managers, System Admins
     *
     * @return the updatedShiftList with the added employee in the correct spot
     */
    @PostMapping("/add")
    public ShiftList addShift(@RequestBody W2WShift shiftResponse) {
        w2wShiftRepository.save(shiftResponse);
        ShiftList shiftList = ShiftList.getInstance();
        shiftList.updateShifts((ArrayList<W2WShift>) w2wShiftRepository.findAll());
        return shiftList;
    }


    /**
     * Method to update the W2W SID (We don't have an api key yikes)
     * @param SID The SID to use to access w2w
     * @return an OK response
     */
    @PostMapping("/update/SID")
    public ResponseEntity<HttpStatus> updateSID(@RequestBody String SID) {
      /*  ShiftScheduler shiftScheduler = ShiftScheduler.getInstance();
        shiftScheduler.setSID(SID);*/
        return ResponseEntity.ok(HttpStatus.OK);
    }

}
