package com.magtable.model.entities;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Objects;

@Entity(name = "parkinglocation")
public class ParkingLocation {
    private Integer id;
    private Integer zoneId;
    private String phonetic;
    private String apron;
    private String position;
    private Integer bay;

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
    public Integer getZoneId() {
        return zoneId;
    }

    public void setZoneId(Integer zoneId) {
        this.zoneId = zoneId;
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
        ParkingLocation that = (ParkingLocation) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(zoneId, that.zoneId) &&
                Objects.equals(phonetic, that.phonetic) &&
                Objects.equals(apron, that.apron) &&
                Objects.equals(position, that.position) &&
                Objects.equals(bay, that.bay);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, zoneId, phonetic, apron, position, bay);
    }
}
