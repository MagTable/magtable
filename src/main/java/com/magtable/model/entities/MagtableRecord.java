package com.magtable.model.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Collection;
import java.util.Objects;

/**
 * Entity Class for MagtableRecord table
 */
@Entity(name = "magtablerecord")
public class MagtableRecord {
    private Integer id;
    private Integer dailyMix;
    private Integer forecastLow;
    private String publishedBy;
    private Timestamp timePublished;
    private Collection<Assignment> assignments;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "magtablerecordid", nullable = false)
    public Integer getId() {
        return id;
    }

    public void setId(Integer magtableRecordId) {
        this.id = magtableRecordId;
    }

    @Basic
    @Column(name = "dailymix")
    public Integer getDailyMix() {
        return dailyMix;
    }

    public void setDailyMix(Integer dailyMix) {
        this.dailyMix = dailyMix;
    }

    @Basic
    @Column(name = "forecastlow")
    public Integer getForecastLow() {
        return forecastLow;
    }

    public void setForecastLow(Integer forecastLow) {
        this.forecastLow = forecastLow;
    }

    @Basic
    @Column(name = "publishedby", length = 32)
    public String getPublishedBy() {
        return publishedBy;
    }

    public void setPublishedBy(String publishedBy) {
        this.publishedBy = publishedBy;
    }

    @Basic
    @Column(name = "timepublished", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
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
        MagtableRecord that = (MagtableRecord) o;
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

    @JsonManagedReference
    @OneToMany(mappedBy = "magtableRecord", cascade = CascadeType.ALL)
    public Collection<Assignment> getAssignments() {
        return assignments;
    }

    public void setAssignments(Collection<Assignment> assignments) {
        this.assignments = assignments;
    }


}
