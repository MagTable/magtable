package com.magtable.model.entities;

import javax.persistence.*;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Assignment {
    private Integer id;
    private MagTableRecord magtablerecordByMagtableRecordId;
    private Collection<Assignmentequipment> assignmentequipmentsByAssignmentId;
    private Collection<Assignmentparkinglocation> assignmentparkinglocationsByAssignmentId;
    private Collection<Shift> shiftsByAssignmentId;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "assignmentID", nullable = false)
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
        Assignment that = (Assignment) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @ManyToOne
    @JoinColumn(name = "magtablerecordID", referencedColumnName = "magtableRecordID", nullable = false)
    public MagTableRecord getMagtablerecordByMagtableRecordId() {
        return magtablerecordByMagtableRecordId;
    }

    public void setMagtablerecordByMagtableRecordId(MagTableRecord magtablerecordByMagtableRecordId) {
        this.magtablerecordByMagtableRecordId = magtablerecordByMagtableRecordId;
    }

    //Also Works
    @OneToMany
    public Collection<Assignmentequipment> getAssignmentequipmentsByAssignmentId() {
        return assignmentequipmentsByAssignmentId;
    }

    public void setAssignmentequipmentsByAssignmentId(Collection<Assignmentequipment> assignmentequipmentsByAssignmentId) {
        this.assignmentequipmentsByAssignmentId = assignmentequipmentsByAssignmentId;
    }

    @OneToMany
    public Collection<Assignmentparkinglocation> getAssignmentparkinglocationsByAssignmentId() {
        return assignmentparkinglocationsByAssignmentId;
    }

    public void setAssignmentparkinglocationsByAssignmentId(Collection<Assignmentparkinglocation> assignmentparkinglocationsByAssignmentId) {
        this.assignmentparkinglocationsByAssignmentId = assignmentparkinglocationsByAssignmentId;
    }

    @OneToMany
    public Collection<Shift> getShiftsByAssignmentId() {
        return shiftsByAssignmentId;
    }

    public void setShiftsByAssignmentId(Collection<Shift> shiftsByAssignmentId) {
        this.shiftsByAssignmentId = shiftsByAssignmentId;
    }
}
