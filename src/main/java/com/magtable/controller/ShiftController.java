package com.magtable.controller;


import com.magtable.model.ShiftResponse;
import com.magtable.model.ShiftList;
import com.magtable.services.userServices.ErrorService;
import com.magtable.services.w2wServices.ShiftScheduler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.*;
import java.lang.reflect.Array;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;

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
    @GetMapping("/all")
    public ShiftList getAllShifts() {
        ShiftScheduler shiftScheduler = ShiftScheduler.getInstance();
        ShiftList shiftList = new ShiftList(shiftScheduler.getShiftList());
        shiftList.setLastUpdated(shiftScheduler.getLastUpdatedUI());
        return shiftList;
    }

    //todo replace this in production
    @GetMapping("/update")
    public ShiftList updateShifts() {
        ShiftScheduler shiftScheduler = ShiftScheduler.getInstance();
        ShiftList shiftList = new ShiftList(shiftScheduler.getShiftList());

        try {
            FileInputStream fileInputStream = new FileInputStream(new File("./src/main/java/com/magtable/controller/shiftlist.ser"));
            ObjectInputStream ois = new ObjectInputStream(fileInputStream);
            shiftList = (ShiftList) ois.readObject();

           /*ArrayList<ShiftResponse> tempList = shiftScheduler.getShiftList();

           ShiftResponse temp = tempList.get(1);
           temp.setNoAvop(true);
           temp.setIsGreen(true);

           temp = tempList.get(2);
           temp.setName("This is a Really Really Long Name");
           temp.setIsGreen(true);

           FileOutputStream fos = new FileOutputStream(new File("./src/main/java/com/magtable/controller/shiftlist.ser"));
           ObjectOutputStream oos = new ObjectOutputStream(fos);
           shiftList.setShifts(tempList);
           oos.writeObject(shiftList);*/

        } catch (Exception e) {
            e.printStackTrace();
        }

        Calendar cal = Calendar.getInstance();
        shiftList.setLastUpdated(String.format("%d:%02d", cal.get(Calendar.HOUR_OF_DAY), cal.get(Calendar.MINUTE)));
        shiftScheduler.setShiftList(shiftList.getShifts());
        return shiftList;
    }

    @PostMapping("/update/SID")
    public ResponseEntity<HttpStatus> updateSID(@RequestBody String SID) {
        ShiftScheduler shiftScheduler = ShiftScheduler.getInstance();
        shiftScheduler.setSID(SID);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    /**
     * route           POST /shift/add
     * description     route to add a shift to shiftList
     * access          Personnel Managers, System Admins
     *
     * @return the updatedShiftList with the added employee in the correct spot
     */
    @PostMapping("/add")
    public ShiftList addShift(@RequestBody ShiftResponse cleanShift) {
        ShiftScheduler shiftScheduler = ShiftScheduler.getInstance();
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
        shiftList.setShifts(listShifts);

        return shiftList;
    }

      //TODO PUT THIS IN IN PRODUCTION

    /**
     * * route           GET /shift/update
     * * description     route to force a new fetch of W2W shift data
     * * access          Personnel Managers, System Admins
     * *
     * * @return an OK status if routes were updated
     *
    @GetMapping("/update")
    public ShiftList updateShifts() {
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
