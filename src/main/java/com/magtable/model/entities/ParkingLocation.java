package com.magtable.model.entities;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Objects;

/**
 * Entity Class for ParkingLocation table
 */
@Entity(name = "parkinglocation")
public class ParkingLocation {
    private Integer id;
    private Integer zoneID;
    private String phonetic;
    private String apron;
    private String position;
    private String bay;

    @Id
    @Column(name = "parkinglocationID", nullable = false)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Basic
    @Column(name = "zoneID", nullable = true)
    public Integer getZoneID() {
        return zoneID;
    }

    public void setZoneID(Integer zoneId) {
        this.zoneID = zoneId;
    }

    @Basic
    @Column(name = "phonetic", nullable = true, length = 1)
    public String getPhonetic() {
        return phonetic;
    }

    public void setPhonetic(String phonetic) {
        this.phonetic = phonetic;
    }

    @Basic
    @Column(name = "apron", nullable = true, length = 4)
    public String getApron() {
        return apron;
    }

    public void setApron(String apron) {
        this.apron = apron;
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
    public String getBay() {
        return bay;
    }

    public void setBay(String bay) {
        this.bay = bay;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ParkingLocation that = (ParkingLocation) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(zoneID, that.zoneID) &&
                Objects.equals(phonetic, that.phonetic) &&
                Objects.equals(apron, that.apron) &&
                Objects.equals(position, that.position) &&
                Objects.equals(bay, that.bay);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, zoneID, phonetic, apron, position, bay);
    }
}
