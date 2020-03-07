package com.magtable.model;


import javax.persistence.*;
import java.io.Serializable;

@Table(name = "equipment")
@Entity
public class Equipment implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "equipmentID", insertable = false, nullable = false)
    private Integer equipmentID;

    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "assignmentID", nullable = false)
    private Integer assignmentID;

    @Column(name = "status")
    private String status;

    @Column(name = "notice")
    private String notice;

    
}