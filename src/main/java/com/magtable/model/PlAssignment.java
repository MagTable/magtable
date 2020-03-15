package com.magtable.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "PlAssignment")
public class PlAssignment implements Serializable {

    public PlAssignment(){}

    public PlAssignment(PlAssignment pla) {
        this.id = pla.id;
        this.position = pla.position;
        this.bay = pla.bay;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "plassignmentid", insertable = false, nullable = false)
    private Integer plAssignmentID;

    @Column(name = "assignmentid", nullable = false)
    private Integer assignmentID;

    @Column(name = "id")
    private Integer id;

    @Column(name = "position")
    private String position;

    @Column(name = "bay")
    private Integer bay;

    public Integer getPlAssignmentID() {
        return plAssignmentID;
    }

    public void setPlAssignmentID(Integer plAssignmentID) {
        this.plAssignmentID = plAssignmentID;
    }

    public Integer getAssignmentID() {
        return assignmentID;
    }

    public void setAssignmentID(Integer assignmentID) {
        this.assignmentID = assignmentID;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public Integer getBay() {
        return bay;
    }

    public void setBay(Integer bay) {
        this.bay = bay;
    }
}
