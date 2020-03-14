package com.magtable.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

public class ShiftList implements Serializable {

    private String scheduleDate;
    private static String lastUpdated;
    private static List<ShiftResponse> shifts;

    public ShiftList(){}

    public ShiftList(ArrayList<W2WShift> list) {
        Calendar cal = Calendar.getInstance();
        this.scheduleDate = String.format("%d/%d/%d", cal.get(Calendar.YEAR), cal.get(Calendar.MONTH)+1, cal.get(Calendar.DATE));

        ArrayList<ShiftResponse> shiftResponses = new ArrayList<>();

        //ShiftTimes need to be sent as a 0400 or 1600 to the front end (Client uses 24hr times)
        for(W2WShift shift : list){
            ShiftResponse shiftResponse = new ShiftResponse(shift);

            // 2020-03-13 04:00:00.0
            String startTimeStampString = shift.getStartTime().toString();
            String[] splittedTime = startTimeStampString.split(" ");
            String startTime = splittedTime[1].replace(":", "").substring(0,4);

            String endTimeStampString = shift.getEndTime().toString();
            splittedTime = endTimeStampString.split(" ");
            String endTime = splittedTime[1].replace(":", "").substring(0,4);

            shiftResponse.setStartTime(startTime);
            shiftResponse.setEndTime(endTime);

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
