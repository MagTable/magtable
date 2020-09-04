package com.magtable.repository;

import com.magtable.model.entities.Equipment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * Repository Interface for Equipment
 *
 * @author David Ward
 */
public interface EquipmentRepository extends JpaRepository<Equipment, Integer>, JpaSpecificationExecutor<Equipment> {


    @Query(value = "SELECT * FROM EQUIPMENT WHERE EQUIPMENTID < 1000",
            nativeQuery = true)
    List<Equipment> findAllTrucks();

    @Query(value =
        "SELECT distinct latest_brix.equipmentID AS 'Good', latest_brix.timeMEasured " +
            "FROM equipment, latest_brix " +
            "WHERE latest_brix.equipmentID = equipment.equipmentID " +
            "and DATE_ADD(latest_brix.timeMeasured, INTERVAL 21 HOUR) > NOW() " +
            "and DATE_ADD(latest_brix.timeMeasured, INTERVAL 24 HOUR) > NOW();",
            nativeQuery = true)
    List<Integer> getTrucksWithRecentBrix();

    @Query(value =
        "SELECT distinct latest_brix.equipmentID AS 'Warning', latest_brix.timeMEasured " +
            "FROM equipment, latest_brix " +
            "WHERE latest_brix.equipmentID = equipment.equipmentID " +
            "and DATE_ADD(latest_brix.timeMeasured, INTERVAL 21 HOUR) < NOW() " +
            "and DATE_ADD(latest_brix.timeMeasured, INTERVAL 24 HOUR) > NOW();"
            ,
            nativeQuery = true)
    List<Integer> getTrucksWithBrixWarning();

}
