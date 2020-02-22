package com.magtable.model;

import java.io.Serializable;

/**
 * Class for storing all data arriving from the MagTable in order to be stored in the database.
 */
public class Table {
    //Parameters
    private Magtablerecord mtr;
    private Assignment assignment;
    private Shift employee;
    private Brixrecord brixRecord;
    private Equipment equipment;


    //Constructors
    public Table() {

    }

    public Table(Magtablerecord mtr, Assignment assignment, Shift employee, Brixrecord brixRecord, Equipment equipment) {
        this.mtr = mtr;
        this.assignment = assignment;
        this.employee = employee;
        this.brixRecord = brixRecord;
        this.equipment = equipment;

    }

    //Getters and Setters.


    public Magtablerecord getMtr() {
        return mtr;
    }

    public void setMtr(Magtablerecord mtr) {
        this.mtr = mtr;
    }

    public Assignment getAssignment() {
        return assignment;
    }

    public void setAssignment(Assignment assignment) {
        this.assignment = assignment;
    }

    public Shift getEmployee() {
        return employee;
    }

    public void setEmployee(Shift employee) {
        this.employee = employee;
    }

    public Brixrecord getBrixRecord() {
        return brixRecord;
    }

    public void setBrixRecord(Brixrecord brixRecord) {
        this.brixRecord = brixRecord;
    }

    public Equipment getEquipment() {
        return equipment;
    }

    public void setEquipment(Equipment equipment) {
        this.equipment = equipment;
    }
}
