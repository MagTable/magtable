package com.magtable.model.api;
import java.sql.Date;
import java.sql.Timestamp;

/**
 * Class for the Export Request model for the 2 dates made by the front end
 * @author David Ward
 */
public class ExportRequest {

    private Integer id;
    private Timestamp to;
    private Timestamp from;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Timestamp getTo() {
        return to;
    }

    public void setTo(Timestamp to) {
        this.to = to;
    }

    public Timestamp getFrom() {
        return from;
    }

    public void setFrom(Timestamp from) {
        this.from = from;
    }
}
