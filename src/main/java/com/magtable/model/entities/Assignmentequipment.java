package com.magtable.model.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Assignmentequipment {
    private Integer id;
    private String status;
    private String notice;
    private Equipment equipmentByEquipmentId;
    private Magtablerecord magtableRecord;
    private Assignmentparkinglocation assignmentParkingLocation;
    private Collection<Shift> shifts;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "assignmentequipmentid", nullable = false)
    public Integer getId() {
        return id;
    }

    public void setId(Integer assignmentEquipmentId) {
        this.id = assignmentEquipmentId;
    }

    @JsonIgnore
    @Basic
    @Column(name = "status", length = 4)
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @JsonIgnore
    @Basic
    @Column(name = "notice", length = 2000)
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
        return Objects.equals(id, that.id) &&
                Objects.equals(status, that.status) &&
                Objects.equals(notice, that.notice);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, status, notice);
    }

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "magtablerecordid", referencedColumnName = "magtablerecordid")
    public Magtablerecord getMagtableRecord() {
        return magtableRecord;
    }

    public void setMagtableRecord(Magtablerecord magtablerecordByMagtableRecordId) {
        this.magtableRecord = magtablerecordByMagtableRecordId;
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
    @JoinColumn(name = "assignmentparkinglocationid", referencedColumnName = "assignmentparkinglocationid", nullable = false)
    public Assignmentparkinglocation getAssignmentParkingLocation() {
        return assignmentParkingLocation;
    }

    public void setAssignmentParkingLocation(Assignmentparkinglocation assignmentparkinglocationByAssignmentParkingLocationId) {
        this.assignmentParkingLocation = assignmentparkinglocationByAssignmentParkingLocationId;
    }

    @JsonManagedReference
    @OneToMany(mappedBy = "assignmentequipmentByAssignmentEquipmentId", cascade = CascadeType.ALL)
    public Collection<Shift> getShifts() {
        return shifts;
    }

    public void setShifts(Collection<Shift> shiftsByAssignmentEquipmentId) {
        this.shifts = shiftsByAssignmentEquipmentId;
    }
}
