package com.magtable.repository;

import com.magtable.model.entities.MagTableRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;



public interface MagTableRecordRepository extends JpaRepository<MagTableRecord, Integer>, JpaSpecificationExecutor<MagTableRecord> {
}