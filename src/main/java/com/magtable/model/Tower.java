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
    @Column(name = "towerid", insertable = false, nullable = false)
    private Integer id;

    @Column(name = "position", nullable = false)
    private String position;

    public Integer getID() {
        return id;
    }

    public void setID(Integer id) {
        this.id = id;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }
}