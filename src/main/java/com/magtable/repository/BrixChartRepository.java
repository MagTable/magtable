package com.magtable.repository;

import com.magtable.model.entities.BrixChartRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface BrixChartRepository extends JpaRepository<BrixChartRecord, Integer>, JpaSpecificationExecutor<BrixChartRecord> {
}
