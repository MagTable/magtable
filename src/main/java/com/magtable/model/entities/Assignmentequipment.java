package com.magtable.model.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Assignmentequipment {
    private Integer assignmentEquipmentId;
    private String status;
    private String notice;
    private Equipment equipmentByEquipmentId;
    private MagtableRecord magTableRecord;
    private Assignmentparkinglocation assignmentparkinglocationByAssignmentParkingLocationId;
    private Collection<Shift> shiftsByAssignmentEquipmentId;

    @Id
    @JsonIgnore
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "assignmentequipmentID", nullable = false)
    public Integer getAssignmentEquipmentId() {
        return assignmentEquipmentId;
    }

    public void setAssignmentEquipmentId(Integer assignmentEquipmentId) {
        this.assignmentEquipmentId = assignmentEquipmentId;
    }

    @JsonIgnore
    @Basic
    @Column(name = "status", nullable = true, length = 4)
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @JsonIgnore
    @Basic
    @Column(name = "notice", nullable = true, length = 2000)
    public String getNotice() {
        return notice;
    }

    public void setNotice(String notice) {
        this.notice = notice;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Assignmentequipment that = (Assignmentequipment) o;
        return Objects.equals(assignmentEquipmentId, that.assignmentEquipmentId) &&
                Objects.equals(status, that.status) &&
                Objects.equals(notice, that.notice);
    }

    @Override
    public int hashCode() {
        return Objects.hash(assignmentEquipmentId, status, notice);
    }

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "magtablerecordid", referencedColumnName = "magtablerecordid")
    public MagtableRecord getMagTableRecord() {
        return magTableRecord;
    }

    public void setMagTableRecord(MagtableRecord magtablerecordByMagtableRecordId) {
        this.magTableRecord = magtablerecordByMagtableRecordId;
    }

    @ManyToOne
    @JoinColumn(name = "equipmentID", referencedColumnName = "equipmentID", nullable = false)
    public Equipment getEquipmentByEquipmentId() {
        return equipmentByEquipmentId;
    }

    public void setEquipmentByEquipmentId(Equipment equipmentByEquipmentId) {
        this.equipmentByEquipmentId = equipmentByEquipmentId;
    }


    @ManyToOne
    @JoinColumn(name = "assignmentparkinglocationID", referencedColumnName = "assignmentParkingLocationID", nullable = false)
    public Assignmentparkinglocation getAssignmentparkinglocationByAssignmentParkingLocationId() {
        return assignmentparkinglocationByAssignmentParkingLocationId;
    }

    public void setAssignmentparkinglocationByAssignmentParkingLocationId(Assignmentparkinglocation assignmentparkinglocationByAssignmentParkingLocationId) {
        this.assignmentparkinglocationByAssignmentParkingLocationId = assignmentparkinglocationByAssignmentParkingLocationId;
    }

    @OneToMany(cascade = CascadeType.ALL)
    public Collection<Shift> getShiftsByAssignmentEquipmentId() {
        return shiftsByAssignmentEquipmentId;
    }

    public void setShiftsByAssignmentEquipmentId(Collection<Shift> shiftsByAssignmentEquipmentId) {
        this.shiftsByAssignmentEquipmentId = shiftsByAssignmentEquipmentId;
    }
}
