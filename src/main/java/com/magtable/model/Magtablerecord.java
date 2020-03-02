package com.magtable.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;

@Entity
@Table(name = "magtablerecord")
@Data
public class Magtablerecord implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(insertable = false, name = "magID", nullable = false)
    private Integer magID;

    @Column(name = "dailyMix")
    private Integer dailyMix;

    @Column(name = "forecastLow")
    private Integer forecastLow;

    @Column(name = "publishedBY")
    private String publishedBY;

    @Column(name = "timePublished")
    private Timestamp timePublished;

    
}