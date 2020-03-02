package com.magtable.repository;

import com.magtable.model.Brixrecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface BrixrecordRepository extends JpaRepository<Brixrecord, Integer>, JpaSpecificationExecutor<Brixrecord> {

}