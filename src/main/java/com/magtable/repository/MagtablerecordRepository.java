package com.magtable.repository;

import com.magtable.model.Magtablerecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface MagtablerecordRepository extends JpaRepository<Magtablerecord, Integer>, JpaSpecificationExecutor<Magtablerecord> {

}