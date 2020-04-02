package com.magtable.model.api;

import com.magtable.model.entities.MagtableRecord;
import org.hibernate.validator.constraints.time.DurationMax;

import java.sql.Timestamp;
import java.util.Date;

public class MagTableHistoryResponse {

    private int id;
    private String date;
    private String publishedBy;

    public MagTableHistoryResponse(MagtableRecord magtableRecord){
            this.id =  magtableRecord.getId();
            this.date = magtableRecord.getTimePublished().toString();
            this.publishedBy = magtableRecord.getPublishedBy();
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getPublishedBy() {
        return publishedBy;
    }

    public void setPublishedBy(String publishedBy) {
        this.publishedBy = publishedBy;
    }

    @Override
    public String toString() {
        return "MagTableHistoryResponse{" +
                "id=" + id +
                ", date=" + date +
                ", publishedBy='" + publishedBy + '\'' +
                '}';
    }
}
