package com.magtable.repository;

import com.magtable.model.entities.Assignmentequipment;
import com.magtable.model.entities.Equipment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface AssignmentEquipmentRepository extends JpaRepository<Assignmentequipment, Integer>, JpaSpecificationExecutor<Assignmentequipment> {
}
