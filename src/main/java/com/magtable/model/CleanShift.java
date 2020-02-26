package com.magtable.model;


import java.io.Serializable;
import java.util.concurrent.atomic.AtomicInteger;

public class CleanShift implements Serializable {

    private int id;
    private String name;
    private String startTime;
    private String endTime;
    private String description;
    private boolean hasAvop;
    private boolean isGreen;

    private static final AtomicInteger count = new AtomicInteger(0);

    public CleanShift() {
        this.id = count.incrementAndGet();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isHasAvop() {
        return hasAvop;
    }

    public void setHasAvop(boolean hasAvop) {
        this.hasAvop = hasAvop;
    }

    public boolean isGreen() {
        return isGreen;
    }

    public void setGreen(boolean green) {
        isGreen = green;
    }
}