package com.magtable.model.entities;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Collection;
import java.util.Objects;

@Entity(name ="magtablerecord")
public class MagTableRecord {
    private Integer id;
    private Integer dailyMix;
    private Integer forecastLow;
    private String publishedBy;
    private Timestamp timePublished;
    private Collection<Assignment> assignmentsByMagtableRecordId;

    @Id
    @Column(name = "magtablerecordid", nullable = false)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Basic
    @Column(name = "dailymix", nullable = true)
    public Integer getDailyMix() {
        return dailyMix;
    }

    public void setDailyMix(Integer dailyMix) {
        this.dailyMix = dailyMix;
    }

    @Basic
    @Column(name = "forecastlow", nullable = true)
    public Integer getForecastLow() {
        return forecastLow;
    }

    public void setForecastLow(Integer forecastLow) {
        this.forecastLow = forecastLow;
    }

    @Basic
    @Column(name = "publishedby", nullable = true, length = 32)
    public String getPublishedBy() {
        return publishedBy;
    }

    public void setPublishedBy(String publishedBy) {
        this.publishedBy = publishedBy;
    }

    @Basic
    @Column(name = "timepublished", nullable = true)
    public Timestamp getTimePublished() {
        return timePublished;
    }

    public void setTimePublished(Timestamp timePublished) {
        this.timePublished = timePublished;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MagTableRecord that = (MagTableRecord) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(dailyMix, that.dailyMix) &&
                Objects.equals(forecastLow, that.forecastLow) &&
                Objects.equals(publishedBy, that.publishedBy) &&
                Objects.equals(timePublished, that.timePublished);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, dailyMix, forecastLow, publishedBy, timePublished);
    }

    //THIS ONE WORKS!
    @OneToMany(mappedBy = "magtablerecordByMagtableRecordId")
    public Collection<Assignment> getAssignmentsByMagtableRecordId() {
        return assignmentsByMagtableRecordId;
    }

    public void setAssignmentsByMagtableRecordId(Collection<Assignment> assignmentsByMagtableRecordId) {
        this.assignmentsByMagtableRecordId = assignmentsByMagtableRecordId;
    }

}
