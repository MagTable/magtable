package com.magtable.controller;

import com.magtable.model.Tower;
import com.magtable.model.Truck;
import com.magtable.repository.TowerRepository;
import com.magtable.repository.TruckRepository;
import com.magtable.services.ErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/equipment")
public class EquipmentController {

    @Autowired
    private TruckRepository truckRepository;

    @Autowired
    private TowerRepository towerRepository;

    @Autowired
    private ErrorService errorService;

    /**
     * route           GET /equipment/trucks
     * description     route to fetch the trucks from the database
     * access          Personnel Managers, System Admins
     *
     * @return the list of trucks
     */
    @GetMapping("/trucks/all")
    public List<Truck> getAllTrucks() {
        return truckRepository.findAll();
    }


    /**
     * route           post /equipment/truck/add
     * description     route to add a truck to the database
     * access          System Admins
     *
     * @return the updated list of trucks
     */
    @PostMapping("/trucks/add")
    public List<Truck> addTruck(@RequestBody Truck truck) {
        // Trucks can only have the following 4 statuses
        if (!(truck.getStatus().equals("GO") || truck.getStatus().equals("CON")
                || truck.getStatus().equals("OOS") || truck.getStatus().equals("INOP"))) {
            errorService.truckOPStatusInvalid(truck.getStatus());
        }
        //checking if the truck exists
        if(truckRepository.findById(truck.getID()) != null){
            errorService.truckAlreadyExists(truck.getID());
        }

        //saving the new truck
        truckRepository.save(truck);

        //returning the updated truck list
        return truckRepository.findAll();
    }

    /**
     * route           post /equipment/truck/edit
     * description     route to edit the truck operational status/notices
     * access          System Admins, Mechanics
     *
     * @return the updated list of trucks
     */
    @PostMapping("/trucks/edit")
    public List<Truck> editTruck(@RequestBody Truck truck) {


        return null;
    }

    /**
     * route           GET /equipment/towers
     * description     route to fetch the towers from the database
     * access          Personnel Managers, System Admins
     *
     * @return the list of towers
     */
    @GetMapping("/towers/all")
    public List<Tower> getAllTowers() {
        return towerRepository.findAll();
    }


}
