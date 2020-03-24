package com.magtable.repository;

import com.magtable.model.entities.W2WShift;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

/**
 * Repository Interface for W2WShifts
 */
public interface W2WShiftRepository extends JpaRepository<W2WShift, Integer>, JpaSpecificationExecutor<W2WShift> {

}
