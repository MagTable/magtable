package com.magtable.controller;

import com.magtable.model.api.ExportRequest;
import com.magtable.model.entities.BrixChartRecord;
import com.magtable.model.entities.BrixRecord;
import com.magtable.repository.BrixChartRepository;
import com.magtable.repository.BrixRepository;
import com.magtable.services.ErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

/**
 * REST controller for BRIX routes
 *
 * @author Arran Woodruff, David Ward
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
     * @param brixRecord  - Brix record to save
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


    /**
     * route           POST brix/export
     * description     method to export brix records between to dates, either all Brix records or optional by Truck
     * access          System Admins
     *
     * @return A 200 containing the file if successful, a 500 if a server Error
     */
    @PostMapping(path = "/export", produces = "text/csv")
    public ResponseEntity exportToCSV(@RequestBody ExportRequest exportRequest) {

        File brixCSV = new File(".\\src\\main\\resources\\res\\brix.csv");

        try {
            FileWriter fileWriter = new FileWriter(brixCSV, false);
            BufferedWriter writer = new BufferedWriter(fileWriter);

            ArrayList<BrixRecord> brixRecords;
            if(exportRequest.getId() == null){
                brixRecords = (ArrayList<BrixRecord>) brixRepository.findBetweenDates(exportRequest.getFrom(), exportRequest.getTo());
            }else{
                brixRecords = (ArrayList<BrixRecord>) brixRepository.findBetweenDatesByEquipmentID(exportRequest.getFrom(), exportRequest.getTo(), exportRequest.getId());
            }


            //Writing the Header
            writer.write("Truck Number, Nozzle, Type1, Type4, Liters Purged, Time Measured\n");

            //Writing Each record
            for(BrixRecord record : brixRecords){
                writer.write(record.toString());
                writer.write("\n");
            }


            writer.close();
            fileWriter.close();
        } catch (Exception e) {
            //return a 500 if we hit an error
            return ResponseEntity.status(500).build();

        }


        //sending the file in the 200 response
        return ResponseEntity.ok()
                .header("Content-Disposition", "attachment; filename=brix.csv")
                .contentLength(brixCSV.length())
                .contentType(MediaType.parseMediaType("text/csv"))
                .body(new FileSystemResource(brixCSV));
    }
}
