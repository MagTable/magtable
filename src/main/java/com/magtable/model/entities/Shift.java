package com.magtable.model.entities;

import com.magtable.model.api.ShiftResponse;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Objects;

@Table(name = "shift")
@Entity
public class Shift implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(insertable = false, name = "shiftid", nullable = false)
    private Integer id;
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

    public Shift(){}

    public Shift(ShiftResponse shiftResponse) {
        this.description = shiftResponse.getDescription();
        this.name = shiftResponse.getName();
        this.startTime = new Timestamp(System.currentTimeMillis()); //todo Fix this part with David
        this.endTime = new Timestamp(System.currentTimeMillis()); //todo Fix this part with David
        this.noAvop = shiftResponse.getNoAvop();
        this.isGreen = shiftResponse.getIsGreen();
    }

    public Integer getAssignmentID() {
        return assignmentID;
    }

    public void setAssignmentID(Integer assignmentID) {
        this.assignmentID = assignmentID;
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
    @Column(name = "startTime", nullable = true)
    public Timestamp getStartTime() {
        return startTime;
    }

    public void setStartTime(Timestamp startTime) {
        this.startTime = startTime;
    }

    @Basic
    @Column(name = "endTime", nullable = true)
    public Timestamp getEndTime() {
        return endTime;
    }

    public void setEndTime(Timestamp endTime) {
        this.endTime = endTime;
    }

    @Basic
    @Column(name = "noAvop", nullable = true)
    public Boolean getNoAvop() {
        return noAvop;
    }

    public void setNoAvop(Boolean noAvop) {
        this.noAvop = noAvop;
    }

    @Basic
    @Column(name = "isGreen", nullable = true)
    public Boolean getIsGreen() {
        return isGreen;
    }

    public void setIsGreen(Boolean isGreen) {
        this.isGreen = isGreen;
    }

    @Id
    @Column(name = "shiftID", nullable = false)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Shift shift = (Shift) o;
        return Objects.equals(description, shift.description) &&
                Objects.equals(name, shift.name) &&
                Objects.equals(startTime, shift.startTime) &&
                Objects.equals(endTime, shift.endTime) &&
                Objects.equals(noAvop, shift.noAvop) &&
                Objects.equals(isGreen, shift.isGreen) &&
                Objects.equals(id, shift.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, description, name, startTime, endTime, noAvop, isGreen);
    }
}
