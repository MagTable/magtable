package com.magtable.controller;

import com.magtable.model.entities.BrixRecord;
import com.magtable.repository.BrixRepository;
import com.magtable.services.ErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/brix")
public class BrixController {

    @Autowired
    private BrixRepository brixRepository;

    @Autowired
    public ErrorService errorService;

    @GetMapping("/{id}")
    public List<BrixRecord> getRecentBrixRecords(@PathVariable(value = "id") Integer equipmentID) {
        return brixRepository.findLastTen(equipmentID);
    }

    @PostMapping("/{id}")
    public BrixRecord insertBrixRecord(@PathVariable(value= "id") Integer equipmentID, @RequestBody BrixRecord brixRecord) {
        brixRecord.setEquipmentID(equipmentID);
        BrixRecord returnvalue = brixRepository.saveAndFlush(brixRecord);
        System.out.println(returnvalue.getId());
        return returnvalue;
    }

}
