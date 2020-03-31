package com.magtable.repository;

import com.magtable.model.entities.MagtableRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;

/**
 * Repository Interface for MagTableRecord
 * @author David Ward
 */
public interface MagTableRecordRepository extends JpaRepository<MagtableRecord, Integer>, JpaSpecificationExecutor<MagtableRecord> {

    @Query(value = "SELECT * FROM MAGTABLERECORD ORDER BY magtablerecordid DESC LIMIT 1",
            nativeQuery = true)
    MagtableRecord findMostRecent();


    @Query(value = "SELECT * FROM MAGTABLERECORD WHERE magtablerecord.timePublished = ?1",
    nativeQuery = true)
    List<MagtableRecord> findAllByDate(Timestamp date);
}