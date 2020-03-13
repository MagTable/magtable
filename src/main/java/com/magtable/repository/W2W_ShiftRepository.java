package com.magtable.repository;

import com.magtable.model.W2W_Shift;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface W2W_ShiftRepository extends JpaRepository<W2W_Shift, Integer>, JpaSpecificationExecutor<W2W_Shift> {
}
