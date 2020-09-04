package com.magtable.services.equipmentServices;

import java.util.List;

public class TruckBrixStatus {
    private List<Integer> upToDate;
    private List<Integer> warning;


    public TruckBrixStatus(List<Integer> expired, List<Integer> warning) {
        this.upToDate = expired;
        this.warning = warning;
    }

    public List<Integer> getUpToDate() {
        return upToDate;
    }

    public void setUpToDate(List<Integer> upToDate) {
        this.upToDate = upToDate;
    }

    public List<Integer> getWarning() {
        return warning;
    }

    public void setWarning(List<Integer> warning) {
        this.warning = warning;
    }

    @Override
    public String toString() {
        return "TruckBrixStatus{" +
                "upToDate=" + upToDate +
                ", warning=" + warning +
                '}';
    }
}
