package com.magtable.model;


import javax.persistence.*;
import java.io.Serializable;

@Table(name = "equipment")
@Entity
public class Equipment implements Serializable {
    private static final long serialVersionUID = 1L;

    public Equipment(){}

    public Equipment(Equipment eq) {
        this.id = eq.id;
        this.status = eq.status;
        this.notice = eq.notice;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "equipmentid", insertable = false, nullable = false)
    private Integer equipmentID;

    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "assignmentid", nullable = false)
    private Integer assignmentID;

    @Column(name = "status")
    private String status;

    @Column(name = "notice")
    private String notice;

    public Integer getEquipmentID() {
        return equipmentID;
    }

    public void setEquipmentID(Integer equipmentID) {
        this.equipmentID = equipmentID;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getAssignmentID() {
        return assignmentID;
    }

    public void setAssignmentID(Integer assignmentID) {
        this.assignmentID = assignmentID;
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
}