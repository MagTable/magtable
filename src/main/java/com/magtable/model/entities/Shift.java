package com.magtable.model.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Objects;

/**
 * Entity Class for Shift table
 */
@Entity
public class Shift {
    private Integer id;
    private String description;
    private String timeOfDay;
    private Boolean isPrimary;
    private String name;
    private String startTime;
    private String endTime;
    private Boolean noAvop;
    private Boolean isGreen;
    private Assignment assignment;

    @Id
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
    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    @Basic
    @Column(name = "endtime")
    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
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


    @Basic
    @Column(name = "timeofday")
    public String getTimeOfDay() {
        return timeOfDay;
    }

    public void setTimeOfDay(String timeOfDay) {
        this.timeOfDay = timeOfDay;
    }

    @Basic
    @Column(name = "isprimary")
    public Boolean getIsPrimary() {
        return isPrimary;
    }

    public void setIsPrimary(Boolean primary) {
        isPrimary = primary;
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
    @JoinColumn(name = "assignmentID", referencedColumnName = "assignmentID")
    public Assignment getAssignment() {
        return assignment;
    }

    public void setAssignment(Assignment assignmentEquipment) {
        this.assignment = assignmentEquipment;
    }
}
