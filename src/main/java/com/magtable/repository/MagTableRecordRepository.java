package com.magtable.repository;

import com.magtable.model.entities.MagTableRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;


public interface MagTableRecordRepository extends JpaRepository<MagTableRecord, Integer>, JpaSpecificationExecutor<MagTableRecord> {

    @Query(value = "SELECT * FROM MAGTABLERECORD ORDER BY magtableRecordID DESC LIMIT 1",
            nativeQuery = true)
    MagTableRecord findMostRecent();
}