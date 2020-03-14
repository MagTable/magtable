package com.magtable.model;


import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "parkinglocation")
public class Parkinglocation implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", insertable = false, nullable = false)
    private Integer id;

    @Column(name = "apron", nullable = false)
    private String apron;

    @Column(name = "phonetic", nullable = false)
    private String phonetic;

    @Column(name = "east", nullable = false)
    private Boolean east;

    @Column(name = "center", nullable = false)
    private Boolean center;

    @Column(name = "west", nullable = false)
    private Boolean west;

    @Column(name = "left", nullable = false)
    private Integer left;

    @Column(name = "right")
    private Integer right;

    @Column(name = "composite")
    private Integer composite;

    @Column(name = "double")
    private Boolean plDouble;
}