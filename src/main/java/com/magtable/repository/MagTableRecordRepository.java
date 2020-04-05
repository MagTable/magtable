package com.magtable.repository;

import com.magtable.model.entities.MagtableRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

/**
 * Repository Interface for MagTableRecord
 *
 * @author David Ward
 */
public interface MagTableRecordRepository extends JpaRepository<MagtableRecord, Integer>, JpaSpecificationExecutor<MagtableRecord> {

    @Query(value = "SELECT * FROM MAGTABLERECORD ORDER BY magtablerecordid DESC LIMIT 1",
            nativeQuery = true)
    MagtableRecord findMostRecent();

    @Query(value = "SELECT * FROM MAGTABLERECORD WHERE timepublished >= ?1 AND timepublished < (?1 + INTERVAL 1 DAY) " +
            "and magtableRecordID != (select max(magtableRecordID) from magtablerecord)",
            nativeQuery = true)
    List<MagtableRecord> findAllByDate(Date date);


}