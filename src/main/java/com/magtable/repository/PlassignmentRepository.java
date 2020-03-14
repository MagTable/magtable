package com.magtable.repository;

import com.magtable.model.PlAssignment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface PlassignmentRepository extends JpaRepository<PlAssignment, Integer>, JpaSpecificationExecutor<PlAssignment> {
}
