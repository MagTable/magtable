package com.magtable.model;


import javax.persistence.*;
import java.io.Serializable;
import javax.persistence.Table;

@Entity
@Table(name = "brixchart")
public class Brixchart implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "brixChartID", insertable = false, nullable = false)
    private Integer brixChartID;

    @Column(name = "recommendedDailyMix", nullable = false)
    private Integer recommendedDailyMix;

    @Column(name = "brix", nullable = false)
    private Float brix;

    @Column(name = "freezingPoint", nullable = false)
    private Integer freezingPoint;

    @Column(name = "concentration", nullable = false)
    private Float concentration;

    public Integer getBrixChartID() {
        return brixChartID;
    }

    public void setBrixChartID(Integer brixChartID) {
        this.brixChartID = brixChartID;
    }

    public Integer getRecommendedDailyMix() {
        return recommendedDailyMix;
    }

    public void setRecommendedDailyMix(Integer recommendedDailyMix) {
        this.recommendedDailyMix = recommendedDailyMix;
    }

    public Float getBrix() {
        return brix;
    }

    public void setBrix(Float brix) {
        this.brix = brix;
    }

    public Integer getFreezingPoint() {
        return freezingPoint;
    }

    public void setFreezingPoint(Integer freezingPoint) {
        this.freezingPoint = freezingPoint;
    }

    public Float getConcentration() {
        return concentration;
    }

    public void setConcentration(Float concentration) {
        this.concentration = concentration;
    }
}