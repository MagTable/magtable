package com.magtable.repository;

import com.magtable.model.W2WShift;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface W2WShiftRepository extends JpaRepository<W2WShift, Integer>, JpaSpecificationExecutor<W2WShift> {
}
