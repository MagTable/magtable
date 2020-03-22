package com.magtable.services.equipmentServices;

import com.magtable.model.entities.Equipment;
import com.magtable.services.ErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EquipmentValidationService {

    @Autowired
    ErrorService errorService;

    public void truckId(Integer id) {

        if(id >= 1000){
            System.out.println(id);
            throw errorService.invalidTruckId();
        }
    }


    public void truckStatus(Equipment equipment) {

        //ensuring that Truck statuses are valid
        if (!(equipment.getStatus().equals("GO") || equipment.getStatus().equals("CON")
                || equipment.getStatus().equals("OOS") || equipment.getStatus().equals("INOP"))) {
            throw errorService.truckOPStatusInvalid(equipment.getStatus());
        }

    }

    public void truckType(Equipment equipment)  {
        if(!(equipment.getType().equals("ICE") || equipment.getType().equals("SVV"))){
            throw errorService.invalidTruckType(equipment.getType());
        }
    }


}
