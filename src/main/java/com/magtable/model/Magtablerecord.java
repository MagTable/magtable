package com.magtable.model;


import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;

@Entity
@Table(name = "magtablerecord")
public class Magtablerecord implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(insertable = false, name = "magID", nullable = false)
    private Integer magID;

    @Column(name = "dailymix")
    private Integer dailyMix;

    @Column(name = "forecastlow")
    private Integer forecastLow;

    @Column(name = "publishedbY")
    private String publishedBY;

    @Column(name = "timepublished")
    private Timestamp timePublished;


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

    public Integer getForecastLow() {
        return forecastLow;
    }

    public void setForecastLow(Integer forecastLow) {
        this.forecastLow = forecastLow;
    }

    public String getPublishedBY() {
        return publishedBY;
    }

    public void setPublishedBY(String publishedBY) {
        this.publishedBY = publishedBY;
    }

    public Timestamp getTimePublished() {
        return timePublished;
    }

    public void setTimePublished(Timestamp timePublished) {
        this.timePublished = timePublished;
    }

    @Override
    public String toString() {
        return "Magtablerecord{" +
                "magID=" + magID +
                ", dailyMix=" + dailyMix +
                ", forecastLow=" + forecastLow +
                ", publishedBY='" + publishedBY + '\'' +
                ", timePublished=" + timePublished +
                '}';
    }
}