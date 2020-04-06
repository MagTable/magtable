package com.magtable.model.api;

import com.magtable.model.entities.W2WShift;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

/**
 * Class for the EmployeeShift list to be sent to the Client
 * @author David Ward
 */
public class ShiftList implements Serializable {

    private String scheduleDate;
    private List<W2WShift> shifts;
    private static ShiftList shiftList;

    //Get instance for Singleton pattern
    public static ShiftList getInstance() {
        if (shiftList == null)
            shiftList = new ShiftList();

        return shiftList;
    }

    //private constructor for singleton pattern
    private ShiftList() {
        shifts = new ArrayList<>();
    }

    public void updateShifts(ArrayList<W2WShift> list) {
        Calendar cal = Calendar.getInstance();
        this.scheduleDate = String.format("%d/%d/%d", cal.get(Calendar.YEAR), cal.get(Calendar.MONTH) + 1, cal.get(Calendar.DATE));
        shifts = list;
    }

    public String getScheduleDate() {
        return scheduleDate;
    }

    public List<W2WShift> getShifts() {
        return shifts;
    }

    public void setShifts(List<W2WShift> shifts) {
        this.shifts = shifts;
    }

}
