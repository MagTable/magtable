package com.magtable.model;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;

@Table(name = "shift")
@Entity
public class Shift implements Serializable {
    private static final long serialVersionUID = 1L;

    public Shift(){}

    public Shift(ShiftResponse shiftResponse) {
        this.description = shiftResponse.getDescription();
        this.name = shiftResponse.getName();
        this.startTime = new Timestamp(System.currentTimeMillis()); //todo Fix this part with David
        this.endTime = new Timestamp(System.currentTimeMillis()); //todo Fix this part with David
        this.noAvop = shiftResponse.getNoAvop();
        this.isGreen = shiftResponse.getIsGreen();
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(insertable = false, name = "shiftid", nullable = false)
    private Integer shiftID;

    @Column(name = "assignmentid")
    private Integer assignmentID;

    @Column(name = "description")
    private String description;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "starttime", nullable = false)
    private Timestamp startTime;

    @Column(name = "endtime", nullable = false)
    private Timestamp endTime;

    @Column(name = "noavop", nullable = false)
    private Boolean noAvop;

    @Column(name = "isgreen", nullable = false)
    private Boolean isGreen;

    public Integer getShiftID() {
        return shiftID;
    }

    public void setShiftID(Integer shiftID) {
        this.shiftID = shiftID;
    }

    public Integer getAssignmentID() {
        return assignmentID;
    }

    public void setAssignmentID(Integer assignmentID) {
        this.assignmentID = assignmentID;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Timestamp getStartTime() {
        return startTime;
    }

    public void setStartTime(Timestamp startTime) {
        this.startTime = startTime;
    }

    public Timestamp getEndTime() {
        return endTime;
    }

    public void setEndTime(Timestamp endTime) {
        this.endTime = endTime;
    }

    public Boolean getNoAvop() {
        return noAvop;
    }

    public void setNoAvop(Boolean noAvop) {
        this.noAvop = noAvop;
    }

    public Boolean getIsGreen() {
        return isGreen;
    }

    public void setIsGreen(Boolean isGreen) {
        this.isGreen = isGreen;
    }
}
