package com.magtable.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.sql.Timestamp;

@Entity
@Table(name = "brixrecord")
public class Brixrecord implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "brixRecordID", insertable = false, nullable = false)
    private Integer brixRecordID;

    @Column(name = "assignmentID", nullable = false)
    private Integer assignmentID;

    @Column(name = "nozzle", nullable = false)
    private Float nozzle;

    @Column(name = "type1", nullable = false)
    private Float type1;

    @Column(name = "type4", nullable = false)
    private Float type4;

    @Column(name = "litersPurged", nullable = false)
    private Integer litersPurged;

    @Column(name = "timeMeasured", nullable = false)
    private Timestamp timeMeasured;

    public Integer getBrixRecordID() {
        return brixRecordID;
    }

    public void setBrixRecordID(Integer brixRecordID) {
        this.brixRecordID = brixRecordID;
    }

    public Integer getAssignmentID() {
        return assignmentID;
    }

    public void setAssignmentID(Integer assignmentID) {
        this.assignmentID = assignmentID;
    }

    public Float getNozzle() {
        return nozzle;
    }

    public void setNozzle(Float nozzle) {
        this.nozzle = nozzle;
    }

    public Float getType1() {
        return type1;
    }

    public void setType1(Float type1) {
        this.type1 = type1;
    }

    public Float getType4() {
        return type4;
    }

    public void setType4(Float type4) {
        this.type4 = type4;
    }

    public Integer getLitersPurged() {
        return litersPurged;
    }

    public void setLitersPurged(Integer litersPurged) {
        this.litersPurged = litersPurged;
    }

    public Timestamp getTimeMeasured() {
        return timeMeasured;
    }

    public void setTimeMeasured(Timestamp timeMeasured) {
        this.timeMeasured = timeMeasured;
    }
}