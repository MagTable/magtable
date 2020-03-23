package com.magtable.repository;

import com.magtable.model.entities.BrixRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface BrixRepository extends JpaRepository<BrixRecord, Integer>, JpaSpecificationExecutor<BrixRecord> {

    @Query(value = "SELECT * FROM brixrecord where brixrecord.equipmentid = ?1 ORDER BY brixrecord.timeMeasured DESC LIMIT 10",
            nativeQuery = true)
    List<BrixRecord> findLastTen(Integer id);
}