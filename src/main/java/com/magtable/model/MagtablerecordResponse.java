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

    public MagtablerecordResponse(Magtablerecord magtablerecord){
        this.magID = magtablerecord.getMagID();
        this.dailyMix = magtablerecord.getDailyMix();
        this.forecastLow = magtablerecord.getForecastLow();
        this.publishedBy = magtablerecord.getPublishedBY();
        this.timePublished = magtablerecord.getTimePublished();
        this.assignments = new ArrayList<>();

    }

    public MagtablerecordResponse(int magID, long numberOfAssignments) {
        this.magID = magID;
        this.dailyMix = 0;
        this.forecastLow = 0;
        this.publishedBy = "";
        this.timePublished = new Timestamp(System.currentTimeMillis()); //todo Fix this part with David;
        this.assignments = new ArrayList<>();
        for (long i = 0; i < numberOfAssignments; i++) {
            this.assignments.add(new AssignmentRecord(4));
        }
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
