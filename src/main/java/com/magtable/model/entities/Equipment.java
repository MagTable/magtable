package com.magtable.model.entities;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Objects;

/**
 * Entity Class for Equipment table
 */
@Entity
public class Equipment {
    private Integer id;
    private String type;
    private String status;
    private String notice;
    private Boolean active;

    @Id
    @Column(name = "equipmentID", nullable = false)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Basic
    @Column(name = "type", nullable = false, length = 25)
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
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

    @Basic
    @Column(name = "active")
    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Equipment equipment = (Equipment) o;
        return Objects.equals(id, equipment.id) &&
                Objects.equals(type, equipment.type) &&
                Objects.equals(status, equipment.status) &&
                Objects.equals(notice, equipment.notice) &&
                Objects.equals(active, equipment.active);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, type, status, notice, active);
    }
}
