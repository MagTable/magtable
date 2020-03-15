package com.magtable.controller;

import com.magtable.model.entities.Equipment;
import com.magtable.repository.EquipmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/equipment")
public class EquipmentController {

    @Autowired
    private EquipmentRepository equipmentRepository;

        /**
     * route           GET /equipment/trucks
     * description     route to fetch the trucks from the database
     * access          Personnel Managers, System Admins
     *
     * @return the list of trucks
     */
    @GetMapping("/truck/all")
    public List<Equipment> getAllTrucks() {
        return equipmentRepository.findAll();
    }





//
//    @Autowired
//    private TruckRepository truckRepository;
//
//    @Autowired
//    private TowerRepository towerRepository;
//
//    @Autowired
//    private ErrorService errorService;
//
//    /**
//     * route           GET /equipment/trucks
//     * description     route to fetch the trucks from the database
//     * access          Personnel Managers, System Admins
//     *
//     * @return the list of trucks
//     */
//    @GetMapping("/truck/all")
//    public List<Truck> getAllTrucks() {
//        return truckRepository.findAll();
//    }
//
//
//    /**
//     * route           post /equipment/truck/add
//     * description     route to add a truck to the database
//     * access          System Admins
//     *
//     * @return the added truck
//     */
//    @PostMapping("/truck/add")
//    public Truck addTruck(@RequestBody Truck truck) {
//        // Trucks can only have the following 4 statuses
//        if (!(truck.getStatus().equals("GO") || truck.getStatus().equals("CON")
//                || truck.getStatus().equals("OOS") || truck.getStatus().equals("INOP"))) {
//            errorService.truckOPStatusInvalid(truck.getStatus());
//        }
//        //checking if the truck exists
//        if(truckRepository.findById(truck.getID()) != null){
//            errorService.truckAlreadyExists(truck.getID());
//        }
//
//        //saving the new truck
//        truckRepository.save(truck);
//
//        return truck;
//    }
//
//    /**
//     * route           post /equipment/truck/edit
//     * description     route to edit the truck operational status/notices
//     * access          System Admins, Mechanics
//     *
//     * @return the edited Truck
//     */
//    @PutMapping("/truck/edit")
//    public Truck editTruck(@RequestBody Truck truck) {
//        if (!(truck.getStatus().equals("GO") || truck.getStatus().equals("CON")
//                || truck.getStatus().equals("OOS") || truck.getStatus().equals("INOP"))) {
//            errorService.truckOPStatusInvalid(truck.getStatus());
//        }
//
//        //checking if the truck exists
//        if(truckRepository.findById(truck.getID()) == null){
//            errorService.truckDoesntExists(truck.getID());
//        }
//
//        //saving the new truck
//        truckRepository.save(truck);
//
//         return truck;
//    }
//
//    /**
//     * route           post /equipment/trucks/delete
//     * description     route to delete a truck
//     * access          System Admins, Mechanics
//     *
//     * @return A repsonse
//     */
//    @DeleteMapping("truck/delete/{id}")
//    public ResponseEntity deleteTruck(@PathVariable(value = "id") final int truckID){
//
//        Truck truck = truckRepository.findById(truckID).orElseThrow(() ->
//                errorService.truckDoesntExists(truckID));
//
//        truckRepository.delete(truck);
//
//        return ResponseEntity.ok(HttpStatus.OK);
//    }
//
//    /**
//     * route           GET /equipment/towers
//     * description     route to fetch the towers from the database
//     * access          Personnel Managers, System Admins
//     *
//     * @return the list of towers
//     */
//    @GetMapping("/tower/all")
//    public List<Tower> getAllTowers() {
//        return towerRepository.findAll();
//    }
//

}
