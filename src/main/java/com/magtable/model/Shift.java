package com.magtable.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.sql.Timestamp;

@Table(name = "shift")
@Entity
public class Shift implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @Column(insertable = false, name = "shiftID", nullable = false)
    private Integer shiftID;

    @Column(name = "assignmentID", nullable = false)
    private Integer assignmentID;

    @Column(name = "description")
    private String description;

    @Column(name = "timeOfDay", nullable = false)
    private String timeOfDay;

    @Column(name = "employeeName", nullable = false)
    private String employeeName;

    @Column(name = "startTime", nullable = false)
    private Timestamp startTime;

    @Column(name = "endTime", nullable = false)
    private Timestamp endTime;

    @Column(name = "activeBaylead", nullable = false)
    private Boolean activeBaylead;

    @Column(name = "noAvop", nullable = false)
    private Boolean noAvop;

    @Column(name = "isGreen", nullable = false)
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

    public String getTimeOfDay() {
        return timeOfDay;
    }

    public void setTimeOfDay(String timeOfDay) {
        this.timeOfDay = timeOfDay;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
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

    public Boolean getActiveBaylead() {
        return activeBaylead;
    }

    public void setActiveBaylead(Boolean activeBaylead) {
        this.activeBaylead = activeBaylead;
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
