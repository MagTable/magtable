package com.magtable.repository;

import com.magtable.model.entities.MagtableRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;


public interface MagTableRecordRepository extends JpaRepository<MagtableRecord, Integer>, JpaSpecificationExecutor<MagtableRecord> {

    @Query(value = "SELECT * FROM MAGTABLERECORD ORDER BY magtablerecordid DESC LIMIT 1",
            nativeQuery = true)
    MagtableRecord findMostRecent();
}