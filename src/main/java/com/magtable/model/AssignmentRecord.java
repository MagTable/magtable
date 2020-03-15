package com.magtable.model;

import java.io.Serializable;
import java.util.ArrayList;

public class AssignmentRecord implements Serializable {
    //Parameters
    private Integer magID;
    private PlAssignment plAssignment;
    private Equipment equipment;
    private ArrayList<ShiftResponse> shifts;
    private ArrayList<Brixrecord> brixRecords;

    //Constructor
    public AssignmentRecord () {

    }

    //Number parameter indicates how many shifts.
    //todo decide on how many brixrecords to be added
    public AssignmentRecord(int shiftNumber) {
        this.magID = 0;
        this.plAssignment = new PlAssignment();
        this.equipment = new Equipment();
        this.shifts = new ArrayList<>();
        this.brixRecords = new ArrayList<>();
        for (int i = 0; i < shiftNumber; i++) {
                this.shifts.add(new ShiftResponse());
                this.brixRecords.add(new Brixrecord());
        }
    }

    //Getters and Setters

    public Integer getMagID() {
        return magID;
    }

    public void setMagID(Integer magID) {
        this.magID = magID;
    }

    public PlAssignment getPlAssignment() {
        return plAssignment;
    }

    public void setPlAssignment(PlAssignment plAssignment) {
        this.plAssignment = plAssignment;
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

    public void setBrixRecords(ArrayList<Brixrecord> brixRecords) {
        this.brixRecords = brixRecords;
    }
}
