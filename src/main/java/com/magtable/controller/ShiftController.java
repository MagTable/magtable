package com.magtable.controller;


import com.magtable.model.api.ShiftList;
import com.magtable.model.entities.W2WShift;
import com.magtable.repository.W2WShiftRepository;
import com.magtable.services.ErrorService;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;

import java.io.*;
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
    private ErrorService errorService;

    @Autowired
    private W2WShiftRepository w2wShiftRepository;

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
     * @return An OK response if pulled successfully
     */
    //TODO Change to PUT
    @GetMapping("/update")
    @Scheduled(cron = "0 0 2 * * *")
    public ShiftList updateShifts() {
        try {
            APIPull();
        } catch (Exception e) {
            e.printStackTrace();
        }
        ShiftList shiftList = ShiftList.getInstance();
        shiftList.updateShifts((ArrayList<W2WShift>) w2wShiftRepository.findAll());

        Calendar cal = Calendar.getInstance();
        shiftList.setLastUpdated(String.format("%d:%02d", cal.get(Calendar.HOUR_OF_DAY), cal.get(Calendar.MINUTE)));

        return shiftList;

    }


    /**
     * Method to fetch all shift data from Aeromags shift portal.
     * Stores the updated shift information into the W2WShift table in the database.
     */
    private void APIPull() {

        //Deleting Everything in the Current repo
        w2wShiftRepository.deleteAll();

        Calendar cal = Calendar.getInstance();
        //months are 0 indexed so have to add one - January = 0
        final int MONTH = cal.get(Calendar.MONTH) + 1;
        final int DAY = cal.get(Calendar.DAY_OF_MONTH);
        final int YEAR = cal.get(Calendar.YEAR);


        Document doc;

        //getting the html from the page
        doc = null;
        try {
              doc = Jsoup.connect("https://www6.whentowork.com/cgi-bin/w2wFF.dll/empshiftlist.htm?SID=" + SID + "&UTF8=Y&date=" + MONTH + "/" + DAY + "/" + YEAR).get();
        } catch (IOException e) {
            e.printStackTrace();
        }

        //selecting the elements that contain shift data from the page
        Elements shifts = doc.select("span.sftstart");

        //iterating through the shift list
        while (!shifts.isEmpty()) {

            W2WShift shift = new W2WShift(); //Creating a new shift


            String startTime = shifts.first().text();
            shift.setStartTime(startTime.replace(":", ""));

            String endTime = shifts.next().first().text();
            shift.setEndTime(endTime.replace(":", ""));

            //getting the employee name
            String name = shifts.next().next().first().text();

            boolean isGreen = name.contains("(GP)");
            shift.setIsGreen(isGreen);

            boolean noAvop = name.contains("(NAV)");
            shift.setNoAvop(noAvop);

            shift.setName(name.replace("(GP)", "").replace("(NAV)", ""));

            //Getting the description
            //input is "800 - description"
            String[] splitDescription = shifts.next().next().next().first().text().split(" - ");

            try {
                shift.setDescription(splitDescription[1]);
            }catch (ArrayIndexOutOfBoundsException e){
                shift.setDescription("On Call"); //On Call shifts have no '-' for us to split for
            }

            shifts.remove(0); //Always removing the top-most shift

            if (!name.equals("(Unassigned)")) {
                w2wShiftRepository.save(shift);
            }


        }
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
