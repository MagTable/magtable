package com.magtable.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "parkinglocation")
public class Parkinglocation implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @Column(insertable = false, name = "locationID", nullable = false)
    private Integer locationID;

    @Column(name = "padCode", nullable = false)
    private String padCode;

    @Column(name = "parkingLocationCode", nullable = false)
    private String parkingLocationCode;

    public Integer getLocationID() {
        return locationID;
    }

    public void setLocationID(Integer locationID) {
        this.locationID = locationID;
    }

    public String getPadCode() {
        return padCode;
    }

    public void setPadCode(String padCode) {
        this.padCode = padCode;
    }

    public String getParkingLocationCode() {
        return parkingLocationCode;
    }

    public void setParkingLocationCode(String parkingLocationCode) {
        this.parkingLocationCode = parkingLocationCode;
    }
}