package com.magtable.model;


import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "assignment")
public class Assignment implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "assignmentid", insertable = false, nullable = false)
    private Integer assignmentID;

    @Column(name = "magid", nullable = false)
    private Integer magID;

    @Column(name = "parkinglocation")
    private Integer parkingLocation;

    public Integer getAssignmentID() {
        return assignmentID;
    }

    public void setAssignmentID(Integer assignmentID) {
        this.assignmentID = assignmentID;
    }

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
}