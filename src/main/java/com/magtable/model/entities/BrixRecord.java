package com.magtable.model.entities;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Timestamp;

@Entity(name = "brixrecord")
public class BrixRecord {
    private int id;
    private int equipmentID;
    private Double nozzle;
    private Double type1;
    private Double type4;
    private Integer litersPurged;
    private Timestamp timeMeasured;

    @Id
    @Column(name = "brixrecordid")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "equipmentid")
    public int getEquipmentID() {
        return equipmentID;
    }

    public void setEquipmentID(int equipmentID) {
        this.equipmentID = equipmentID;
    }

    @Basic
    @Column(name = "nozzle")
    public Double getNozzle() {
        return nozzle;
    }

    public void setNozzle(Double nozzle) {
        this.nozzle = nozzle;
    }

    @Basic
    @Column(name = "type1")
    public Double getType1() {
        return type1;
    }

    public void setType1(Double type1) {
        this.type1 = type1;
    }

    @Basic
    @Column(name = "type4")
    public Double getType4() {
        return type4;
    }

    public void setType4(Double type4) {
        this.type4 = type4;
    }

    @Basic
    @Column(name = "literspurged")
    public Integer getLitersPurged() {
        return litersPurged;
    }

    public void setLitersPurged(Integer litersPurged) {
        this.litersPurged = litersPurged;
    }

    @Basic
    @Column(name = "timemeasured")
    public Timestamp getTimeMeasured() {
        return timeMeasured;
    }

    public void setTimeMeasured(Timestamp timeMeasured) {
        this.timeMeasured = timeMeasured;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        BrixRecord that = (BrixRecord) o;

        if (id != that.id) return false;
        if (equipmentID != that.equipmentID) return false;
        if (nozzle != null ? !nozzle.equals(that.nozzle) : that.nozzle != null) return false;
        if (type1 != null ? !type1.equals(that.type1) : that.type1 != null) return false;
        if (type4 != null ? !type4.equals(that.type4) : that.type4 != null) return false;
        if (litersPurged != null ? !litersPurged.equals(that.litersPurged) : that.litersPurged != null) return false;
        if (timeMeasured != null ? !timeMeasured.equals(that.timeMeasured) : that.timeMeasured != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + equipmentID;
        result = 31 * result + (nozzle != null ? nozzle.hashCode() : 0);
        result = 31 * result + (type1 != null ? type1.hashCode() : 0);
        result = 31 * result + (type4 != null ? type4.hashCode() : 0);
        result = 31 * result + (litersPurged != null ? litersPurged.hashCode() : 0);
        result = 31 * result + (timeMeasured != null ? timeMeasured.hashCode() : 0);
        return result;
    }
}
