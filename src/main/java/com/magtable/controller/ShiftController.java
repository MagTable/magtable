package com.magtable.controller;


import com.magtable.model.ShiftList;
import com.magtable.services.userServices.ErrorService;
import com.magtable.services.w2wServices.ShiftScheduler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.text.SimpleDateFormat;
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

    /**
     * route           POST /shift/update
     * description     route to force a new fetch of W2W shift data
     * access          Personnel Managers, System Admins
     *
     * @return an OK status if routes were updated
     */
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
            shiftScheduler.setLastUpdatedUI(String.format("%d:%02d",cal.get(Calendar.HOUR_OF_DAY), cal.get(Calendar.MINUTE)));

        shiftList.setShifts(shiftScheduler.getShiftList());
        shiftList.setLastUpdated(shiftScheduler.getLastUpdatedUI());
        return shiftList;
    }

    @PostMapping("/update/SID")
    public ResponseEntity<HttpStatus> updateSID(@RequestBody String SID) {
        ShiftScheduler shiftScheduler = ShiftScheduler.getInstance();
        shiftScheduler.setSID(SID);
        return ResponseEntity.ok(HttpStatus.OK);
    }

}
