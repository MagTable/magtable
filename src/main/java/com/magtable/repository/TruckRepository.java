package com.magtable.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface TruckRepository extends JpaRepository<Truck, Integer>, JpaSpecificationExecutor<Truck> {

}