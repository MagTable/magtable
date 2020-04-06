package com.magtable.repository;

import com.magtable.model.entities.BrixRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

/**
 * Repository Interface for BrixRecord
 * @author Arran Woodruff, David Ward
 */
public interface BrixRepository extends JpaRepository<BrixRecord, Integer>, JpaSpecificationExecutor<BrixRecord> {

    @Query(value = "SELECT * FROM brixrecord where brixrecord.equipmentid = ?1 ORDER BY brixrecord.timeMeasured DESC LIMIT 10",
            nativeQuery = true)
    List<BrixRecord> findLastTen(Integer id);

    @Query(value = "SELECT * FROM brixrecord WHERE brixrecord.timemeasured >= ?1 AND brixrecord.timemeasured <= ?2",
            nativeQuery = true)
    List<BrixRecord> findBetweenDates(Date from, Date to);

    @Query(value = "SELECT * FROM brixrecord WHERE brixrecord.timemeasured >= ?1 AND brixrecord.timemeasured <= ?2 AND brixrecord.equipmentId = ?3",
            nativeQuery = true)
    List<BrixRecord> findBetweenDates(Date from, Date to, Integer equipmentId);

}