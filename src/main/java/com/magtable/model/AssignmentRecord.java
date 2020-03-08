package com.magtable.model;

import java.io.Serializable;
import java.util.ArrayList;

public class AssignmentRecord implements Serializable {
    //Parameters
    private Integer magID;
    private Integer parkingLocation;
    private Equipment equipment;
    private ArrayList<ShiftResponse> shifts;
    private ArrayList<Brixrecord> brixRecords;

    //Constructor
    public AssignmentRecord () {

    }

    //Getters and Setters

    public Integer getMagID() {
        return magID;
    }

    public void setMagID(Integer magID) {
        this.magID = magID;
    }

    public Integer getParkingLocation() {
        return parkingLocation;
    }

    public void setParkingLocation(Integer parkingLocation) {
        this.parkingLocation = parkingLocation;
    }

    public Equipment getEquipment() {
        return equipment;
    }

    public void setEquipment(Equipment equipment) {
        this.equipment = equipment;
    }

    public ArrayList<ShiftResponse> getShifts() {
        return shifts;
    }

    public void setShifts(ArrayList<ShiftResponse> shifts) {
        this.shifts = shifts;
    }

    public ArrayList<Brixrecord> getBrixRecords() {
        return brixRecords;
    }

    public void setBrixRecordsecord(ArrayList<Brixrecord> brixRecords) {
        this.brixRecords = brixRecords;
    }
}
