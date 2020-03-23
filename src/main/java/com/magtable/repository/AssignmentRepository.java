package com.magtable.repository;

import com.magtable.model.entities.Assignment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface AssignmentRepository extends JpaRepository<Assignment, Integer>, JpaSpecificationExecutor<Assignment> {
}
