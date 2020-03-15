package com.magtable.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface BrixrecordRepository extends JpaRepository<Brixrecord, Integer>, JpaSpecificationExecutor<Brixrecord> {

}