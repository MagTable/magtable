package com.magtable.model.entities;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class Assignmentparkinglocation {
    private Integer id;
    private Integer parkingLocationId;
    private String position;
    private Integer bay;

    @Id
    @Column(name = "assignmentparkinglocationid")
    public Integer getId() {
        return id;
    }

    public void setId(Integer assignmentParkingLocationId) {
        this.id = assignmentParkingLocationId;
    }

    @Basic
    @Column(name = "parkinglocationid")
    public Integer getParkingLocationId() {
        return parkingLocationId;
    }

    public void setParkingLocationId(Integer parkingLocationId) {
        this.parkingLocationId = parkingLocationId;
    }

    @Basic
    @Column(name = "position", length = 6)
    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    @Basic
    @Column(name = "bay")
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
        return Objects.equals(id, that.id) &&
                Objects.equals(parkingLocationId, that.parkingLocationId) &&
                Objects.equals(position, that.position) &&
                Objects.equals(bay, that.bay);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, parkingLocationId, position, bay);
    }
}
