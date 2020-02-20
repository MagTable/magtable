package com.magtable.repository;

import com.magtable.model.Brixchart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface BrixchartRepository extends JpaRepository<Brixchart, Integer>, JpaSpecificationExecutor<Brixchart> {

}