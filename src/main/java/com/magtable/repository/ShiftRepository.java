package com.magtable.repository;

import com.magtable.model.entities.Shift;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

/**
 * Repository Interface for Shifts
 */
public interface ShiftRepository extends JpaRepository<Shift, Integer>, JpaSpecificationExecutor<Shift> {

}