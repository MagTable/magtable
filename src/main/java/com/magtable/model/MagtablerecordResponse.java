package com.magtable.model;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.ArrayList;

public class MagtablerecordResponse implements Serializable {
    //Parameters
    private Integer magID;
    private Integer dailyMix;
    private Integer forecastLow;
    private String publishedBy;
    private Timestamp timePublished;
    private ArrayList<AssignmentRecord> assignments;

    //Constructor
    public MagtablerecordResponse() {

    }


    //Getters and Setters


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

    public String getPublishedBy() {
        return publishedBy;
    }

    public void setPublishedBy(String publishedBy) {
        this.publishedBy = publishedBy;
    }

    public Timestamp getTimePublished() {
        return timePublished;
    }

    public void setTimePublished(Timestamp timePublished) {
        this.timePublished = timePublished;
    }

    public ArrayList<AssignmentRecord> getAssignments() {
        return assignments;
    }

    public void setAssignments(ArrayList<AssignmentRecord> assignments) {
        this.assignments = assignments;
    }
}
