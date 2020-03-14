package com.magtable.controller;


import com.magtable.model.ShiftResponse;
import com.magtable.model.ShiftList;
import com.magtable.model.W2WShift;
import com.magtable.repository.ShiftRepository;
import com.magtable.repository.W2WShiftRepository;
import com.magtable.services.userServices.ErrorService;
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
import java.util.List;

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
        ShiftList shiftList = new ShiftList((ArrayList<W2WShift>) shiftRepository.findAll());
        Calendar cal = Calendar.getInstance();
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

        ShiftList shiftList = new ShiftList((ArrayList<W2WShift>) shiftRepository.findAll());

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
    public ShiftRepository addShift(@RequestBody ShiftResponse cleanShift) {
        /**ShiftScheduler shiftScheduler = ShiftScheduler.getInstance();
         ShiftList shiftList = new ShiftList(shiftScheduler.getShiftList());
         //Arraylist to modify with the new shift
         ArrayList<ShiftResponse> listShifts = shiftList.getShifts();

         //Finding where to insert the added user into
         for (ShiftResponse shift : listShifts) {
         if (Integer.parseInt(shift.getStartTime()) >= Integer.parseInt(cleanShift.getStartTime())) {
         //insert the user into this part of the list
         cleanShift.setId();
         listShifts.add(listShifts.indexOf(shift), cleanShift);
         break;
         }
         }
         shiftList.setShifts(listShifts);**/

        return null;
    }


    @PostMapping("/update/SID")
    public ResponseEntity<HttpStatus> updateSID(@RequestBody String SID) {
      /*  ShiftScheduler shiftScheduler = ShiftScheduler.getInstance();
        shiftScheduler.setSID(SID);*/
        return ResponseEntity.ok(HttpStatus.OK);
    }

    //TODO PUT THIS IN IN PRODUCTION

    /**
     * * route           GET /shift/update
     * * description     route to force a new fetch of W2W shift data
     * * access          Personnel Managers, System Admins
     * *
     * * @return an OK status if routes were updated
     *
     @GetMapping("/update") public ShiftList updateShifts() {
     boolean update = true;

     ShiftScheduler shiftScheduler = ShiftScheduler.getInstance();
     ShiftList shiftList = new ShiftList(shiftScheduler.getShiftList());

     SimpleDateFormat sdf = new SimpleDateFormat("HH:mm");
     String lastUpdated = shiftScheduler.getLastUpdated();
     String currentTime = sdf.format(new Date());

     if (lastUpdated != null) {
     try {
     // https://mkyong.com/java/how-to-calculate-date-time-difference-in-java/

     Date d1 = sdf.parse(lastUpdated);
     Date d2 = sdf.parse(currentTime);
     long diff = d2.getTime() - d1.getTime();
     long diffMinutes = diff / (60 * 1000) % 60;
     if (diffMinutes < 10)
     update = false;

     } catch (Exception e) {
     e.printStackTrace();
     }
     }
     if (update) {
     try {
     shiftScheduler.updateShifts();
     shiftList.setLastUpdated(shiftScheduler.getLastUpdated());
     } catch (Exception e) {
     throw errorService.sessionExpired();
     }
     }
     ///update for UI
     Calendar cal = Calendar.getInstance();
     shiftScheduler.setLastUpdatedUI(String.format("%d:%02d", cal.get(Calendar.HOUR_OF_DAY), cal.get(Calendar.MINUTE)));

     shiftList.setShifts(shiftScheduler.getShiftList());
     shiftList.setLastUpdated(shiftScheduler.getLastUpdatedUI());
     return shiftList;

     }
     **/
}
