package com.magtable.model.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;
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
    private Date timePublished;
    private Collection<Assignment> assignments;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "magtablerecordid")
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

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "timepublished")
    public Date getTimePublished() {
        return timePublished;
    }

    public void setTimePublished(Date timePublished) {
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
