package com.magtable.model;

import org.springframework.context.annotation.Bean;

import java.io.Serializable;
import java.util.ArrayList;

/**
 * Class for storing all data arriving from the MagTable in order to be stored in the database.
 */

public class Table implements Serializable{


    //Parameters
    private Equipment equipment;
    private ArrayList<Shift> employeeShifts;
    private Integer parkingLocation;
    private ArrayList<Brixrecord> brixRecords;

    //Constructors

    //Getter and Setters

    public Equipment getEquipment() {
        return equipment;
    }

    public void setEquipment(Equipment equipment) {
        this.equipment = equipment;
    }

    public ArrayList<Shift> getEmployeeShifts() {
        return employeeShifts;
    }

    public void setEmployeeShifts(ArrayList<Shift> employeeShifts) {
        this.employeeShifts = employeeShifts;
    }

    public Integer getParkingLocation() {
        return parkingLocation;
    }

    public void setParkingLocation(Integer parkingLocation) {
        this.parkingLocation = parkingLocation;
    }

    public ArrayList<Brixrecord> getBrixRecords() {
        return brixRecords;
    }

    public void setBrixRecords(ArrayList<Brixrecord> brixRecords) {
        this.brixRecords = brixRecords;
    }
}
