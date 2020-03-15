package com.magtable.model.entities;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
public class Magtablerecord {
    private Integer id;
    private Integer dailyMix;
    private Integer forecastLow;
    private String publishedBy;
    private Timestamp timePublished;

    @Id
    @Column(name = "magtableRecordID", nullable = false)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Basic
    @Column(name = "dailyMix", nullable = true)
    public Integer getDailyMix() {
        return dailyMix;
    }

    public void setDailyMix(Integer dailyMix) {
        this.dailyMix = dailyMix;
    }

    @Basic
    @Column(name = "forecastLow", nullable = true)
    public Integer getForecastLow() {
        return forecastLow;
    }

    public void setForecastLow(Integer forecastLow) {
        this.forecastLow = forecastLow;
    }

    @Basic
    @Column(name = "publishedBy", nullable = true, length = 32)
    public String getPublishedBy() {
        return publishedBy;
    }

    public void setPublishedBy(String publishedBy) {
        this.publishedBy = publishedBy;
    }

    @Basic
    @Column(name = "timePublished", nullable = true)
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
        Magtablerecord that = (Magtablerecord) o;
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
}
