package com.magtable.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.sql.Timestamp;

@Table(name = "assignment")
@Entity
public class Assignment implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "assignmentID", insertable = false, nullable = false)
    private Integer assignmentID;

    @Column(name = "magID", nullable = false)
    private Integer magID;

    @Column(name = "locationID", nullable = false)
    private Integer locationID;

    @Column(name = "date", nullable = false)
    private Timestamp date;

    public Integer getAssignmentID() {
        return assignmentID;
    }

    public void setAssignmentID(Integer assignmentID) {
        this.assignmentID = assignmentID;
    }

    public Integer getMagID() {
        return magID;
    }

    public void setMagID(Integer magID) {
        this.magID = magID;
    }

    public Integer getLocationID() {
        return locationID;
    }

    public void setLocationID(Integer locationID) {
        this.locationID = locationID;
    }

    public Timestamp getDate() {
        return date;
    }

    public void setDate(Timestamp date) {
        this.date = date;
    }
}