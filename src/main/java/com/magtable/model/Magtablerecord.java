package com.magtable.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "magtablerecord")
public class Magtablerecord implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @Column(insertable = false, name = "magID", nullable = false)
    private Integer magID;

    @Column(name = "dailyMix", nullable = false)
    private Integer dailyMix;

    @Column(name = "forcastLow", nullable = false)
    private Integer forcastLow;

    public Integer getMagID() {
        return magID;
    }

    public void setMagID(Integer magID) {
        this.magID = magID;
    }

    public Integer getDailyMix() {
        return dailyMix;
    }

    public void setDailyMix(Integer dailyMix) {
        this.dailyMix = dailyMix;
    }

    public Integer getForcastLow() {
        return forcastLow;
    }

    public void setForcastLow(Integer forcastLow) {
        this.forcastLow = forcastLow;
    }
}