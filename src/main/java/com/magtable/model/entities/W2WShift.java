package com.magtable.model.entities;



import javax.persistence.*;

/**
 * Entity Class for W2WShift table
 */
@Entity
public class W2WShift {

    public W2WShift() {
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
    private String startTime;

    @Column(name = "endtime", nullable = false)
    private String endTime;

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

    public Boolean getIsGreen() {
        return isGreen;
    }

    public void setIsGreen(Boolean green) {
        isGreen = green;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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
