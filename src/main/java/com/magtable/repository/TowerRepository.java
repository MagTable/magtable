package com.magtable.repository;

import com.magtable.model.Tower;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface TowerRepository extends JpaRepository<Tower, Integer>, JpaSpecificationExecutor<Tower> {

}