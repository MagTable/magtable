package com.magtable.model;


import javax.persistence.*;
import java.sql.Timestamp;

@Entity
public class W2W_Shift {

    public W2W_Shift(){}

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


    public Integer getID() {
        return id;
    }

    public void setShiftID(Integer shiftID) {
        this.id = shiftID;
    }

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

    public Boolean getNoAvop() {
        return noAvop;
    }

    public void setNoAvop(Boolean noAvop) {
        this.noAvop = noAvop;
    }

    public Boolean getGreen() {
        return isGreen;
    }

    public void setGreen(Boolean green) {
        isGreen = green;
    }
}
