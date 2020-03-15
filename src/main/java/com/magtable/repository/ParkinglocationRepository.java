package com.magtable.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ParkinglocationRepository extends JpaRepository<Parkinglocation, Integer>, JpaSpecificationExecutor<Parkinglocation> {
}