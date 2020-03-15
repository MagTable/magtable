package com.magtable.model.entities;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Assignmentequipment {
    private Integer id;
    private String status;
    private String notice;
    private Assignment assignmentByAssignmentId;

    @Id
    @Column(name = "assignmentEquipmentID", nullable = false)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Basic
    @Column(name = "status", nullable = true, length = 4)
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

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
        return Objects.equals(id, that.id) &&
                Objects.equals(status, that.status) &&
                Objects.equals(notice, that.notice);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, status, notice);
    }

    @ManyToOne
    @JoinColumn(name = "assignmentID", referencedColumnName = "assignmentID", nullable = false)
    public Assignment getAssignmentByAssignmentId() {
        return assignmentByAssignmentId;
    }

    public void setAssignmentByAssignmentId(Assignment assignmentByAssignmentId) {
        this.assignmentByAssignmentId = assignmentByAssignmentId;
    }
}
