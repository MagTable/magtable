package com.magtable.model;

import java.io.Serializable;


/**
 * Class for the response for a Shift Entity
 */
public class ShiftResponse implements Serializable {

    private static final long serialVersionUID = -8106437984727025966L;

    private int id;
    private String name;
    private String startTime;
    private String endTime;
    private String description;
    private Boolean noAvop;
    private Boolean isGreen;

    public ShiftResponse(){}

    public ShiftResponse(W2WShift shift){
        this.name = shift.getName();
        this.description = shift.getDescription();
        this.noAvop = shift.getNoAvop();
        this.isGreen = shift.isGreen();
    }

    public int getId() {
        return id;
    }

    public void setId(Integer id) {
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


    public Boolean getNoAvop() {
        return noAvop;
    }

    public void setNoAvop(Boolean noAvop) {
        this.noAvop = noAvop;
    }

    public Boolean getIsGreen() {
        return isGreen;
    }

    public void setIsGreen(Boolean isGreen) {
        this.isGreen = isGreen;
    }

    @Override
    public String toString() {
        return "ShiftResponse{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", startTime='" + startTime + '\'' +
                ", endTime='" + endTime + '\'' +
                ", description='" + description + '\'' +
                ", noAvop=" + noAvop +
                ", isGreen=" + isGreen +
                '}';
    }


}
