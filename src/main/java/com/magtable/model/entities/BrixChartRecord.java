package com.magtable.model.entities;

import javax.persistence.*;

/**
 * Entity Class for Brix Chart table
 */
@Entity
@Table(name = "brixchart", schema = "magtabledev", catalog = "")
public class BrixChartRecord {
    private int id;
    private Double brix;
    private Double concentration;
    private Integer freezePoint;
    private Integer lout;
    private Integer recommendedMix;

    @Id
    @Column(name = "brixchartid")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "brix")
    public Double getBrix() {
        return brix;
    }

    public void setBrix(Double brix) {
        this.brix = brix;
    }

    @Basic
    @Column(name = "concentration")
    public Double getConcentration() {
        return concentration;
    }

    public void setConcentration(Double concentration) {
        this.concentration = concentration;
    }

    @Basic
    @Column(name = "freezepoint")
    public Integer getFreezePoint() {
        return freezePoint;
    }

    public void setFreezePoint(Integer freezePoint) {
        this.freezePoint = freezePoint;
    }

    @Basic
    @Column(name = "lout")
    public Integer getLout() {
        return lout;
    }

    public void setLout(Integer lout) {
        this.lout = lout;
    }

    @Basic
    @Column(name = "recommendedmix")
    public Integer getRecommendedMix() {
        return recommendedMix;
    }

    public void setRecommendedMix(Integer recommendedMix) {
        this.recommendedMix = recommendedMix;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        BrixChartRecord that = (BrixChartRecord) o;

        if (id != that.id) return false;
        if (brix != null ? !brix.equals(that.brix) : that.brix != null) return false;
        if (concentration != null ? !concentration.equals(that.concentration) : that.concentration != null)
            return false;
        if (freezePoint != null ? !freezePoint.equals(that.freezePoint) : that.freezePoint != null) return false;
        if (lout != null ? !lout.equals(that.lout) : that.lout != null) return false;
        if (recommendedMix != null ? !recommendedMix.equals(that.recommendedMix) : that.recommendedMix != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (brix != null ? brix.hashCode() : 0);
        result = 31 * result + (concentration != null ? concentration.hashCode() : 0);
        result = 31 * result + (freezePoint != null ? freezePoint.hashCode() : 0);
        result = 31 * result + (lout != null ? lout.hashCode() : 0);
        result = 31 * result + (recommendedMix != null ? recommendedMix.hashCode() : 0);
        return result;
    }
}
