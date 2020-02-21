package com.magtable.controller;


import com.magtable.services.userServices.ErrorService;
import com.magtable.services.w2wServices.ShiftScheduler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/shift")
public class ShiftController {

    @Autowired
    private ErrorService errorService;


    /**
     * route           GET /shift/get
     * description     route to get all the shifts stored in server memory
     * access          Personnel Mangers, System Admins
     *
     * @return A list of the W2W shifts
     */
    @GetMapping("/get")
    public ArrayList getAllShifts(){
        ShiftScheduler shiftScheduler = ShiftScheduler.getInstance();
        return shiftScheduler.getShiftList();
    }

    /**
     * route           POST /shift/update
     * description     route to force a new fetch of W2W shift data
     * access          Personnel Managers, System Admins
     *
     * @return an OK status if routes were updated
     */
    @PostMapping("/update")
    public ResponseEntity<HttpStatus> updateShifts(){
        ShiftScheduler shiftScheduler = ShiftScheduler.getInstance();
        try {
            shiftScheduler.updateShifts();
        } catch (Exception e) {
            throw errorService.sessionExpired();
        }
        return ResponseEntity.ok(HttpStatus.OK);
    }

    //TODO discuss with arran -> I don't know if this is what we need. I assume the SID will be gotten from the front end
    @PostMapping("/update/SID")
    public ResponseEntity<HttpStatus> updateSID(@RequestBody String SID){
        ShiftScheduler shiftScheduler = ShiftScheduler.getInstance();
        shiftScheduler.setSID(SID);
        return ResponseEntity.ok(HttpStatus.OK);
    }






}
