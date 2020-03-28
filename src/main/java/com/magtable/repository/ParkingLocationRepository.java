package com.magtable.repository;

import com.magtable.model.entities.ParkingLocation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

/**
 * Repository Interface for ParkingLocation
 */
public interface ParkingLocationRepository extends JpaRepository<ParkingLocation, Integer>, JpaSpecificationExecutor<ParkingLocation> {

}
