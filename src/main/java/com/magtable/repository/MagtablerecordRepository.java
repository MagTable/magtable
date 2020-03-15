package com.magtable.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

public interface MagtablerecordRepository extends JpaRepository<Magtablerecord, Integer>, JpaSpecificationExecutor<Magtablerecord> {

    @Query(value = "SELECT * FROM MagTableRecord ORDER BY magID DESC LIMIT 1",
            nativeQuery = true)
    Magtablerecord findMostRecent();

}