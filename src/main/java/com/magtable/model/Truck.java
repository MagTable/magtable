package com.magtable.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "truck")
public class Truck implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "truckID", insertable = false, nullable = false)
    private Integer id;

    @Column(name = "status", nullable = false)
    private String status;

    @Column(name = "notice", nullable = false)
    private String notice;

    public Integer getID() {
        return id;
    }

    public void setID(Integer id) {
        this.id = id;
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