package com.magtable.model.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
public class Shift {
    private Integer id;
    private String description;
    private String name;
    private Timestamp startTime;
    private Timestamp endTime;
    private Boolean noAvop;
    private Boolean isGreen;
    private Assignmentequipment assignmentEquipment;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //TODO LOGIC TO MAKE SURE SHIFTID = W2W SHIFT ID
    @Column(name = "shiftID", nullable = false)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Basic
    @Column(name = "description", length = 30)
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Basic
    @Column(name = "name", length = 50)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Basic
    @Column(name = "starttime")
    public Timestamp getStartTime() {
        return startTime;
    }

    public void setStartTime(Timestamp startTime) {
        this.startTime = startTime;
    }

    @Basic
    @Column(name = "endtime")
    public Timestamp getEndTime() {
        return endTime;
    }

    public void setEndTime(Timestamp endTime) {
        this.endTime = endTime;
    }

    @Basic
    @Column(name = "noavop")
    public Boolean getNoAvop() {
        return noAvop;
    }

    public void setNoAvop(Boolean noAvop) {
        this.noAvop = noAvop;
    }

    @Basic
    @Column(name = "isgreen")
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
        return Objects.equals(id, shift.id) &&
                Objects.equals(description, shift.description) &&
                Objects.equals(name, shift.name) &&
                Objects.equals(startTime, shift.startTime) &&
                Objects.equals(endTime, shift.endTime) &&
                Objects.equals(noAvop, shift.noAvop) &&
                Objects.equals(isGreen, shift.isGreen);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, description, name, startTime, endTime, noAvop, isGreen);
    }

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "assignmentequipmentID", referencedColumnName = "assignmentequipmentID")
    public Assignmentequipment getAssignmentEquipment() {
        return assignmentEquipment;
    }

    public void setAssignmentEquipment(Assignmentequipment assignmentEquipment) {
        this.assignmentEquipment = assignmentEquipment;
    }
}
