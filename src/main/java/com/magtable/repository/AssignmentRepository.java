package com.magtable.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface AssignmentRepository extends JpaRepository<Assignment, Integer>, JpaSpecificationExecutor<Assignment> {

}