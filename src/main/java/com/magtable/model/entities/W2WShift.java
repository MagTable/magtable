package com.magtable.model.entities;


import com.magtable.model.api.ShiftResponse;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
public class W2WShift {

    public W2WShift() {
    }

    //Copy Constructor for converting a ShiftResponse into W2W entity
    public W2WShift(ShiftResponse shiftResponse){
        this.description = shiftResponse.getDescription();
        this.name = shiftResponse.getName();
        this.noAvop = shiftResponse.getNoAvop();
        this.isGreen = shiftResponse.getIsGreen();

    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(insertable = false, name = "shiftid", nullable = false)
    private Integer id;

    @Column(name = "description")
    private String description;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "starttime", nullable = false)
    private Timestamp startTime;

    @Column(name = "endtime", nullable = false)
    private Timestamp endTime;

    @Column(name = "noavop", nullable = false)
    private Boolean noAvop;

    @Column(name = "isgreen", nullable = false)
    private Boolean isGreen;


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Boolean getNoAvop() {
        return noAvop;
    }

    public void setNoAvop(Boolean noAvop) {
        this.noAvop = noAvop;
    }

    public Boolean isGreen() {
        return isGreen;
    }

    public void setGreen(Boolean green) {
        isGreen = green;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Timestamp getStartTime() {
        return startTime;
    }

    public void setStartTime(Timestamp startTime) {
        this.startTime = startTime;
    }

    public Timestamp getEndTime() {
        return endTime;
    }

    public void setEndTime(Timestamp endTime) {
        this.endTime = endTime;
    }

    @Override
    public String toString() {
        return "W2WShift{" +
                "id=" + id +
                ", description='" + description + '\'' +
                ", name='" + name + '\'' +
                ", startTime=" + startTime +
                ", endTime=" + endTime +
                ", noAvop=" + noAvop +
                ", isGreen=" + isGreen +
                '}';
    }
}
