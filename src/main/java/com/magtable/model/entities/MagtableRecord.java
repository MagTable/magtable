package com.magtable.model.entities;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Collection;
import java.util.Objects;

@Entity(name = "magtablerecord")
public class MagtableRecord {
    private Integer magtableRecordId;
    private Integer dailyMix;
    private Integer forecastLow;
    private String publishedBy;
    private Timestamp timePublished;
    private Collection<Assignmentequipment> assignments;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "magtablerecordID", nullable = false)
    public Integer getMagtableRecordId() {
        return magtableRecordId;
    }

    public void setMagtableRecordId(Integer magtableRecordId) {
        this.magtableRecordId = magtableRecordId;
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
        MagtableRecord that = (MagtableRecord) o;
        return Objects.equals(magtableRecordId, that.magtableRecordId) &&
                Objects.equals(dailyMix, that.dailyMix) &&
                Objects.equals(forecastLow, that.forecastLow) &&
                Objects.equals(publishedBy, that.publishedBy) &&
                Objects.equals(timePublished, that.timePublished);
    }

    @Override
    public int hashCode() {
        return Objects.hash(magtableRecordId, dailyMix, forecastLow, publishedBy, timePublished);
    }

    @OneToMany(cascade = CascadeType.ALL)
    public Collection<Assignmentequipment> getAssignments() {
        return assignments;
    }

    public void setAssignments(Collection<Assignmentequipment> assignments) {
        this.assignments = assignments;
    }


}
