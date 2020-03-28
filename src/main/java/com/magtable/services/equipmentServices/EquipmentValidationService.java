package com.magtable.services.equipmentServices;

import com.magtable.model.entities.Equipment;
import com.magtable.services.ErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Service for validating Equipment before being saved to database
 * @author David Ward
 */
@Service
public class EquipmentValidationService {

    @Autowired
    ErrorService errorService;

    /**
     * Method to check the that the truck id is between 0 and 1000
     * @param id the id to check
     */
    public void truckId(Integer id) {

        if(id >= 1000 || id < 0){
            throw errorService.invalidTruckId();
        }
    }


    /**
     * Method to check that the status of a truck is valid
     * @param equipment - The truck to check
     */
    public void truckStatus(Equipment equipment) {

        //ensuring that Truck statuses are valid
        if (!(equipment.getStatus().equals("GO") || equipment.getStatus().equals("CON")
                || equipment.getStatus().equals("OOS") || equipment.getStatus().equals("INOP"))) {
            throw errorService.truckOPStatusInvalid(equipment.getStatus());
        }

    }

    /**
     * Method to check that truck type is either ICE or SVV
     * @param equipment - The truck to Check
     */
    public void truckType(Equipment equipment)  {
        if(!(equipment.getType().equals("ICE") || equipment.getType().equals("SVV"))){
            throw errorService.invalidTruckType(equipment.getType());
        }
    }


}
