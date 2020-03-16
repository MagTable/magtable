package com.magtable.model.entities;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class Assignmentparkinglocation {
    private Integer assignmentParkingLocationId;
    private Integer parkingLocationId;
    private String position;
    private Integer bay;

    @Id
    @Column(name = "assignmentParkingLocationID")
    public Integer getAssignmentParkingLocationId() {
        return assignmentParkingLocationId;
    }

    public void setAssignmentParkingLocationId(Integer assignmentParkingLocationId) {
        this.assignmentParkingLocationId = assignmentParkingLocationId;
    }

    @Basic
    @Column(name = "parkingLocationID", nullable = true)
    public Integer getParkingLocationId() {
        return parkingLocationId;
    }

    public void setParkingLocationId(Integer parkingLocationId) {
        this.parkingLocationId = parkingLocationId;
    }

    @Basic
    @Column(name = "position", nullable = true, length = 6)
    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    @Basic
    @Column(name = "bay", nullable = true)
    public Integer getBay() {
        return bay;
    }

    public void setBay(Integer bay) {
        this.bay = bay;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Assignmentparkinglocation that = (Assignmentparkinglocation) o;
        return Objects.equals(assignmentParkingLocationId, that.assignmentParkingLocationId) &&
                Objects.equals(parkingLocationId, that.parkingLocationId) &&
                Objects.equals(position, that.position) &&
                Objects.equals(bay, that.bay);
    }

    @Override
    public int hashCode() {
        return Objects.hash(assignmentParkingLocationId, parkingLocationId, position, bay);
    }
}
