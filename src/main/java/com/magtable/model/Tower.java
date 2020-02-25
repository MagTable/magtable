package com.magtable.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "tower")
public class Tower implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "towerID", insertable = false, nullable = false)
    private Integer towerID;

    @Column(name = "position", nullable = false)
    private String position;

    public Integer getTowerID() {
        return towerID;
    }

    public void setTowerID(Integer towerID) {
        this.towerID = towerID;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }
}