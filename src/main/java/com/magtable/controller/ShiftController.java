package com.magtable.controller;


import com.magtable.model.ShiftResponse;
import com.magtable.model.ShiftList;
import com.magtable.model.W2WShift;
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
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Calendar;
@RestController
@RequestMapping("/shift")
public class ShiftController {

    private static String SID = "32325584041A4";

    @Autowired
    private ErrorService errorService;

    @Autowired
    private W2WShiftRepository shiftRepository;

    /**
     * route           GET /shift/get
     * description     route to get all the shifts stored in server memory
     * access          Personnel Mangers, System Admins
     *
     * @return A list of the W2W shifts
     */
    @GetMapping("/all")
    public ShiftList getAllShifts() {
        ShiftList shiftList = ShiftList.getInstance();
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
        /*ShiftScheduler shiftScheduler = ShiftScheduler.getInstance();
        try {
            FileInputStream fileInputStream = new FileInputStream(new File("./src/main/java/com/magtable/controller/shiftlist.ser"));
            ObjectInputStream ois = new ObjectInputStream(fileInputStream);
            shiftList = (ShiftList) ois.readObject();
        } catch (Exception e) {
            e.printStackTrace();
        }


        shiftScheduler.setShiftList(shiftList.getShifts());
        return shiftList;*/

        ShiftList shiftList = ShiftList.getInstance();
        shiftList.updateShifts((ArrayList<W2WShift>) shiftRepository.findAll());

        Calendar cal = Calendar.getInstance();
        shiftList.setLastUpdated(String.format("%d:%02d", cal.get(Calendar.HOUR_OF_DAY), cal.get(Calendar.MINUTE)));

        return shiftList;

    }


    private void APIPull() throws Exception {

        //Deleting Everything in the Current repo
        shiftRepository.deleteAll();

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
            shift.setStartTime(Timestamp.valueOf(YEAR + "-" + MONTH + "-" + DAY + " " + startTime + ":" + "00"));

            String endTime = shifts.next().first().text();


            //Have to split the endtime and startTime in order to get the Integer Values
            String[] splittedEndTime = endTime.split(":");
            String[] splittledStartTime = startTime.split(":");

            //Need to make Assumptions for end time.
            //A Shift that starts in the PM and ends in the AM will be considered to have rolled over on date.
            int nextDay = DAY + 1;
            if (Integer.parseInt(splittedEndTime[0]) < 12 && Integer.parseInt(splittledStartTime[0]) >= 12) {
                shift.setEndTime(Timestamp.valueOf(YEAR + "-" + MONTH + "-" + nextDay + " " + endTime + ":" + "00"));
            } else {
                shift.setEndTime(Timestamp.valueOf(YEAR + "-" + MONTH + "-" + DAY + " " + endTime + ":" + "00"));
            }

            //getting the employee name
            String name = shifts.next().next().first().text();

            shift.setGreen(false);
            if (name.contains("(GP)")) {
                shift.setGreen(true);
            }

            shift.setNoAvop(false);
            if (name.contains("(NAV)")) {
                shift.setNoAvop(true);
            }

            shift.setName(name.replace("(GP)", "").replace("(NAV)", ""));

            //Getting the assignment
            String[] splittedAssignment = shifts.next().next().next().first().text().split(" - ");
            shift.setDescription(splittedAssignment[1]);

            shifts.remove(0); //Always removing the top-most shift
            if (!name.equals("(Unassigned)")) {
                shiftRepository.save(shift);
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
    public ShiftList addShift(@RequestBody ShiftResponse shiftResponse) {

        //Converting the Json object to our database entity
        W2WShift shift = new W2WShift(shiftResponse);

        //Logic for converting "0400" to a timestamp
        Calendar cal = Calendar.getInstance();
        //months are 0 indexed so have to add one - January = 0
        final int MONTH = cal.get(Calendar.MONTH) + 1;
        final int DAY = cal.get(Calendar.DAY_OF_MONTH);
        final int YEAR = cal.get(Calendar.YEAR);

        StringBuilder sb = new StringBuilder(shiftResponse.getStartTime());
        //Have to Pad a 0 to the front if its not a length of 4
        if(sb.length() == 3){
            sb.insert(0, "0");
        }
        sb.insert(2, ":");
        String startTime = sb.toString();

        sb = new StringBuilder(shiftResponse.getEndTime());
        //Have to Pad a 0 to the front if its not a length of 4
        if(sb.length() == 3){
            sb.insert(0, "0");
        }
        sb.insert(2, ":");
        String endTime = sb.toString();


        shift.setStartTime(Timestamp.valueOf(YEAR + "-" + MONTH + "-" + DAY + " " +  startTime + ":" + "00"));

        shift.setEndTime(Timestamp.valueOf(YEAR + "-" + MONTH + "-" + DAY + " " +  endTime + ":" + "00"));
        //saving the shift in the database
        shiftRepository.save(shift);

        //fetching the ID of the shift
        W2WShift savedShift = shiftRepository.findLastRecord();
        shiftResponse.setId(savedShift.getId());

        ShiftList shiftList = ShiftList.getInstance();

        ArrayList<ShiftResponse> shifts = (ArrayList) shiftList.getShifts();


        for (ShiftResponse shift1: shifts) {
            if (Integer.parseInt(shift1.getStartTime()) >= Integer.parseInt(shiftResponse.getStartTime())) {
                //insert the user into this part of the list
                shifts.add(shifts.indexOf(shift1), shiftResponse);
                break;
            }
        }

        return shiftList;
    }


    @PostMapping("/update/SID")
    public ResponseEntity<HttpStatus> updateSID(@RequestBody String SID) {
      /*  ShiftScheduler shiftScheduler = ShiftScheduler.getInstance();
        shiftScheduler.setSID(SID);*/
        return ResponseEntity.ok(HttpStatus.OK);
    }

}
