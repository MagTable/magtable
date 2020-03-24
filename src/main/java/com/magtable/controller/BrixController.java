package com.magtable.controller;

import com.magtable.model.entities.BrixChartRecord;
import com.magtable.model.entities.BrixRecord;
import com.magtable.repository.BrixChartRepository;
import com.magtable.repository.BrixRepository;
import com.magtable.services.ErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 *REST controller for BRIX routes
 * @author Arran Woodruff
 */
@RestController
@RequestMapping("/brix")
public class BrixController {

    @Autowired
    private BrixRepository brixRepository;

    @Autowired
    private BrixChartRepository brixChartRepository;

    @Autowired
    public ErrorService errorService;

    /**
     * route           GET /brix/{id}
     * description     method to get the 10 most recent brix records
     * access          System Admins, Personnel Managers, Mechanics
     *
     * @return List of the Brix records
     */
    @GetMapping("/{id}")
    public List<BrixRecord> getRecentBrixRecords(@PathVariable(value = "id") Integer equipmentID) {
        return brixRepository.findLastTen(equipmentID);
    }

    /**
     * route           POST /brix/{id}
     * description     method to insert a brix record to a truck
     * access          System Admins, Personnel Managers, Mechanics
     *
     * @param equipmentID - Id of the Truck
     * @param brixRecord - Brix record to save
     * @return The inserted brix record
     */
    @PostMapping("/{id}")
    public BrixRecord insertBrixRecord(@PathVariable(value = "id") Integer equipmentID, @RequestBody BrixRecord brixRecord) {
        brixRecord.setEquipmentID(equipmentID);
        return brixRepository.saveAndFlush(brixRecord);
    }


    /**
     * route           GET /brix/chart
     * description     method to get the brix chart from the database
     * access          System Admins, Personnel Managers, Mechanics
     *
     * @return A list containing all records within the brix chart
     */
    @GetMapping("/chart")
    public List<BrixChartRecord> getBrixChart() {
        return brixChartRepository.findAll();
    }
}
