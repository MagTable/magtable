package com.magtable.model.entities;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
public class Brixrecord {
    private Integer id;
    private Integer equipmentId;
    private Double nozzle;
    private Double type1;
    private Double type4;
    private Integer litersPurged;
    private Timestamp timeMeasured;

    @Id
    @Column(name = "brixRecordID", nullable = false)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Basic
    @Column(name = "equipmentID", nullable = false)
    public Integer getEquipmentId() {
        return equipmentId;
    }

    public void setEquipmentId(Integer equipmentId) {
        this.equipmentId = equipmentId;
    }

    @Basic
    @Column(name = "nozzle", nullable = true, precision = 0)
    public Double getNozzle() {
        return nozzle;
    }

    public void setNozzle(Double nozzle) {
        this.nozzle = nozzle;
    }

    @Basic
    @Column(name = "type1", nullable = true, precision = 0)
    public Double getType1() {
        return type1;
    }

    public void setType1(Double type1) {
        this.type1 = type1;
    }

    @Basic
    @Column(name = "type4", nullable = true, precision = 0)
    public Double getType4() {
        return type4;
    }

    public void setType4(Double type4) {
        this.type4 = type4;
    }

    @Basic
    @Column(name = "litersPurged", nullable = true)
    public Integer getLitersPurged() {
        return litersPurged;
    }

    public void setLitersPurged(Integer litersPurged) {
        this.litersPurged = litersPurged;
    }

    @Basic
    @Column(name = "timeMeasured", nullable = true)
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
        Brixrecord that = (Brixrecord) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(equipmentId, that.equipmentId) &&
                Objects.equals(nozzle, that.nozzle) &&
                Objects.equals(type1, that.type1) &&
                Objects.equals(type4, that.type4) &&
                Objects.equals(litersPurged, that.litersPurged) &&
                Objects.equals(timeMeasured, that.timeMeasured);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, equipmentId, nozzle, type1, type4, litersPurged, timeMeasured);
    }
}
