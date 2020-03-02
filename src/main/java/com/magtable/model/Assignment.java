package com.magtable.model;


import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "assignment")
public class Assignment implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "assignmentID", insertable = false, nullable = false)
    private Integer assignmentID;

    @Column(name = "magID", nullable = false)
    private Integer magID;

    @Column(name = "parkingLocation")
    private Integer parkingLocation;

    
}