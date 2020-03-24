package com.magtable.model.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.Collection;
import java.util.Objects;

/**
 * Assignment Entity Class
 */
@Entity
public class Assignment {
    private Integer id;
    private String status;
    private String notice;
    private Equipment equipment;
    private MagtableRecord magtableRecord;
    private ParkingLocation parkingLocation;
    private Collection<Shift> employeeShifts;

    @Id
    @JsonIgnore
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "assignmentid", nullable = false)
    public Integer getId() {
        return id;
    }

    public void setId(Integer assignmentEquipmentId) {
        this.id = assignmentEquipmentId;
    }

    @Basic
    @Column(name = "status", length = 4)
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

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
        Assignment that = (Assignment) o;
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
    public MagtableRecord getMagtableRecord() {
        return magtableRecord;
    }

    public void setMagtableRecord(MagtableRecord magtableRecordByMagtableRecordId) {
        this.magtableRecord = magtableRecordByMagtableRecordId;
    }

    @ManyToOne
    @JoinColumn(name = "equipmentID", referencedColumnName = "equipmentID", nullable = false)
    public Equipment getEquipment() {
        return equipment;
    }

    public void setEquipment(Equipment equipment) {
        this.equipment = equipment;
    }

    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "assignmentparkinglocationID", referencedColumnName = "parkinglocationID")
    public ParkingLocation getParkingLocation() {
        return parkingLocation;
    }

    public void setParkingLocation(ParkingLocation assignmentParkingLocation) {
        this.parkingLocation = assignmentParkingLocation;
    }

    @JsonManagedReference
    @OneToMany(mappedBy = "assignment", cascade = CascadeType.ALL)
    public Collection<Shift> getEmployeeShifts() {
        return employeeShifts;
    }

    public void setEmployeeShifts(Collection<Shift> employeeShifts) {
        this.employeeShifts = employeeShifts;
    }
}
