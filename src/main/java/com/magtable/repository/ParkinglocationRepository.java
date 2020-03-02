package com.magtable.repository;

import com.magtable.model.Parkinglocation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ParkinglocationRepository extends JpaRepository<Parkinglocation, Integer>, JpaSpecificationExecutor<Parkinglocation> {

}