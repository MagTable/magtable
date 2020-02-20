package com.magtable.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Table(name = "position")
@Entity
public class Position implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "positionID", insertable = false, nullable = false)
    private Integer positionID;

    @Column(name = "description", nullable = false)
    private String description;

    public Integer getPositionID() {
        return positionID;
    }

    public void setPositionID(Integer positionID) {
        this.positionID = positionID;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}