package com.magtable.model;


import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;

@Table(name = "brixrecord")
@Entity
public class Brixrecord implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "brixRecordID", insertable = false, nullable = false)
    private Integer brixRecordID;

    @Column(name = "assignmentID", nullable = false)
    private Integer assignmentID;

    @Column(name = "nozzle")
    private Float nozzle;

    @Column(name = "type1")
    private Float type1;

    @Column(name = "type4")
    private Float type4;

    @Column(name = "litersPurged")
    private Integer litersPurged;

    @Column(name = "timeMeasured")
    private Timestamp timeMeasured;

    
}