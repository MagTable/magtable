package com.magtable.model;

import java.io.Serializable;
import javax.persistence.*;
import javax.persistence.Table;

@Table(name = "equipment")
@Entity
public class Equipment implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "equipmentID", insertable = false, nullable = false)
    private Integer equipmentID;

    @Column(name = "assignmentID", nullable = false)
    private Integer id;

    @Column(name = "truckID")
    private Integer truckID;

    @Column(name = "towerID")
    private Integer towerID;

    @Column(name = "status")
    private String status;

    @Column(name = "notice")
    private String notice;

    @Column(name = "position")
    private Integer position;

    public Integer getEquipmentID() {
        return equipmentID;
    }

    public void setEquipmentID(Integer equipmentID) {
        this.equipmentID = equipmentID;
    }

    public Integer getAssignmentID() {
        return id;
    }

    public void setAssignmentID(Integer assignmentID) {
        this.id = assignmentID;
    }

    public Integer getTruckID() {
        return truckID;
    }

    public void setTruckID(Integer truckID) {
        this.truckID = truckID;
    }

    public Integer getTowerID() {
        return towerID;
    }

    public void setTowerID(Integer towerID) {
        this.towerID = towerID;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getNotice() {
        return notice;
    }

    public void setNotice(String notice) {
        this.notice = notice;
    }

    public Integer getPosition() {
        return position;
    }

    public void setPosition(Integer position) {
        this.position = position;
    }
}