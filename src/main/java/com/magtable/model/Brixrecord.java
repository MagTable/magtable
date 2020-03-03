package com.magtable.model;


import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;

@Table(name = "brixrecord")
@Entity
public class Brixrecord implements Serializable {
    private static final long serialVersionUID = 1L;

    public Brixrecord(){}

    public Brixrecord(Brixrecord br) {
        this.nozzle = br.nozzle;
        this.type1 = br.type1;
        this.type4 = br.type4;
        this.litersPurged = br.litersPurged;
        this.timeMeasured = br.timeMeasured;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "brixrecordid", insertable = false, nullable = false)
    private Integer brixRecordID;

    @Column(name = "assignmentid", nullable = false)
    private Integer assignmentID;

    @Column(name = "nozzle")
    private Float nozzle;

    @Column(name = "type1")
    private Float type1;

    @Column(name = "type4")
    private Float type4;

    @Column(name = "literspurged")
    private Integer litersPurged;

    @Column(name = "timemeasured")
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