package com.magtable.model.api;

import com.magtable.model.entities.W2WShift;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

public class ShiftList implements Serializable {

    private String scheduleDate;
    private String lastUpdated;
    private List<ShiftResponse> shifts;
    private static ShiftList shiftList;

    public static ShiftList getInstance() {
        if (shiftList == null)
            shiftList = new ShiftList();

        return shiftList;
    }

    private ShiftList() {
        shifts = new ArrayList<>();
    }

    public void updateShifts(ArrayList<W2WShift> list) {
        Calendar cal = Calendar.getInstance();
        this.scheduleDate = String.format("%d/%d/%d", cal.get(Calendar.YEAR), cal.get(Calendar.MONTH) + 1, cal.get(Calendar.DATE));

        ArrayList<ShiftResponse> shiftResponses = new ArrayList<>();

        //ShiftTimes need to be sent as a 0400 or 1600 to the front end (Client uses 24hr times)
        for (W2WShift shift : list) {
            ShiftResponse shiftResponse = new ShiftResponse(shift);
            // 2020-03-13 04:00:00.0
            String startTimeStampString = shift.getStartTime().toString();
            String[] splitedTime = startTimeStampString.split(" ");
            String startTime = splitedTime[1].replace(":", "").substring(0, 4);

            String endTimeStampString = shift.getEndTime().toString();
            splitedTime = endTimeStampString.split(" ");
            String endTime = splitedTime[1].replace(":", "").substring(0, 4);

            shiftResponse.setStartTime(startTime);
            shiftResponse.setEndTime(endTime);
            shiftResponse.setId(shift.getId());


            shiftResponses.add(shiftResponse);

        }

        this.shifts = shiftResponses;
    }

    public String getScheduleDate() {
        return scheduleDate;
    }

    public List<ShiftResponse> getShifts() {
        return shifts;
    }

    public void setShifts(List<ShiftResponse> shifts) {
        this.shifts = shifts;
    }

    public String getLastUpdated() {
        return lastUpdated;
    }

    public void setLastUpdated(String lastUpdated) {
        this.lastUpdated = lastUpdated;
    }
}
