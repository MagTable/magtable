package com.magtable.model.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
public class Shift {
    private Integer shiftId;
    private String description;
    private String name;
    private Timestamp startTime;
    private Timestamp endTime;
    private Boolean noAvop;
    private Boolean isGreen;
    private Assignmentequipment assignmentequipmentByAssignmentEquipmentId;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //TODO LOGIC TO MAKE SURE SHIFTID = W2W SHIFT ID
    @Column(name = "shiftID", nullable = false)
    public Integer getShiftId() {
        return shiftId;
    }

    public void setShiftId(Integer shiftId) {
        this.shiftId = shiftId;
    }

    @Basic
    @Column(name = "description", nullable = true, length = 30)
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Basic
    @Column(name = "name", nullable = true, length = 50)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Basic
    @Column(name = "starttime", nullable = true)
    public Timestamp getStartTime() {
        return startTime;
    }

    public void setStartTime(Timestamp startTime) {
        this.startTime = startTime;
    }

    @Basic
    @Column(name = "endtime", nullable = true)
    public Timestamp getEndTime() {
        return endTime;
    }

    public void setEndTime(Timestamp endTime) {
        this.endTime = endTime;
    }

    @Basic
    @Column(name = "noavop", nullable = true)
    public Boolean getNoAvop() {
        return noAvop;
    }

    public void setNoAvop(Boolean noAvop) {
        this.noAvop = noAvop;
    }

    @Basic
    @Column(name = "isgreen", nullable = true)
    public Boolean getIsGreen() {
        return isGreen;
    }

    public void setIsGreen(Boolean isGreen) {
        this.isGreen = isGreen;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Shift shift = (Shift) o;
        return Objects.equals(shiftId, shift.shiftId) &&
                Objects.equals(description, shift.description) &&
                Objects.equals(name, shift.name) &&
                Objects.equals(startTime, shift.startTime) &&
                Objects.equals(endTime, shift.endTime) &&
                Objects.equals(noAvop, shift.noAvop) &&
                Objects.equals(isGreen, shift.isGreen);
    }

    @Override
    public int hashCode() {
        return Objects.hash(shiftId, description, name, startTime, endTime, noAvop, isGreen);
    }

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "assignmentequipmentID", referencedColumnName = "assignmentEquipmentID", nullable = false)
    public Assignmentequipment getAssignmentequipmentByAssignmentEquipmentId() {
        return assignmentequipmentByAssignmentEquipmentId;
    }

    public void setAssignmentequipmentByAssignmentEquipmentId(Assignmentequipment assignmentequipmentByAssignmentEquipmentId) {
        this.assignmentequipmentByAssignmentEquipmentId = assignmentequipmentByAssignmentEquipmentId;
    }
}
