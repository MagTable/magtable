package com.magtable.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Calendar;

public class ShiftList implements Serializable {

    private String scheduleDate;
    private String lastUpdated;
    private ArrayList<ShiftResponse> shifts;


    public ShiftList(ArrayList<ShiftResponse> list) {
        Calendar cal = Calendar.getInstance();
        this.scheduleDate = String.format("%d/%d/%d", cal.get(Calendar.YEAR), cal.get(Calendar.MONTH)+1, cal.get(Calendar.DATE));
        this.shifts = list;
    }

    public String getScheduleDate() {
        return scheduleDate;
    }

    public ArrayList<ShiftResponse> getShifts() {
        return shifts;
    }

    public void setShifts(ArrayList<ShiftResponse> shifts) {
        this.shifts = shifts;
    }

    public String getLastUpdated() {
        return lastUpdated;
    }

    public void setLastUpdated(String lastUpdated) {
        this.lastUpdated = lastUpdated;
    }
}
