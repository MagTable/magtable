package com.magtable.controller;

import com.magtable.model.entities.Assignment;
import com.magtable.model.entities.Equipment;
import com.magtable.model.entities.User;
import com.magtable.repository.AssignmentRepository;
import com.magtable.repository.EquipmentRepository;
import com.magtable.repository.MagTableRecordRepository;
import com.magtable.services.ErrorService;
import com.magtable.services.equipmentServices.EquipmentValidationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Rest Controller for equipment routes
 * @author David Ward
 */
@RestController
@RequestMapping("/equipment")
public class EquipmentController {

    @Autowired
    private EquipmentRepository equipmentRepository;

    @Autowired
    private ErrorService errorService;

    @Autowired
    private EquipmentValidationService validationService;

    @Autowired
    private MagTableRecordRepository magTableRecordRepository;

    @Autowired
    private AssignmentRepository assignmentRepository;


    /**
     * route           GET /equipment/trucks
     * description     route to fetch the trucks from the database
     * access          Personnel Managers, System Admins
     *
     * @return the list of trucks
     */
    @GetMapping("/truck/all")
    public List<Equipment> getAllTrucks() {
        return equipmentRepository.findAllTrucks();
    }


    /**
     * route          PUT /equipment/truck/edit
     * description     route to edit the truck operational status/notices
     * access          System Admins, Mechanics
     *
     * @return the edited Truck
     */
    @PutMapping("/truck/edit")
    public Equipment editTruck(@RequestBody Equipment equipment) {

        validationService.truckId(equipment.getId());
        validationService.truckStatus(equipment);
        validationService.truckType(equipment);


        Equipment truck = equipmentRepository.findById(equipment.getId()).orElseThrow(() ->
                errorService.truckDoesntExists(equipment.getId()));


        equipment.setActive(truck.getActive()); //Need this otherwise its null
        return equipmentRepository.save(equipment);

    }

    /**
     * route           post /equipment/truck/add
     * description     route to add a truck to the database
     * access          System Admins
     *
     * @return the added truck
     */
    @PostMapping("truck/add")
    public Equipment addTruck(@RequestBody Equipment equipment) {


        if(equipmentRepository.findById(equipment.getId()).isPresent()){
           throw errorService.truckAlreadyExists(equipment.getId());
        }
        validationService.truckId(equipment.getId());
        validationService.truckStatus(equipment);
        validationService.truckType(equipment);

        equipment.setActive(true);
        equipment = equipmentRepository.save(equipment);

        if(magTableRecordRepository.findMostRecent() != null){
            //making a new assignment
            Assignment assignment = new Assignment();
            assignment.setEquipment(equipment);
            assignment.setMagtableRecord(magTableRecordRepository.findMostRecent());
            assignment.setStatus(equipment.getStatus());
            assignment.setNotice(equipment.getNotice());

            assignmentRepository.save(assignment);
        }



        return equipment;


    }

    /**
     * route           PUT /equipment/trucks/deactivate
     * description     route to delete a truck
     * access          System Admins, Mechanics
     *
     * @return An OK response if the truck was deleted
     */
    @PutMapping("truck/deactivate/{id}")
    public ResponseEntity deactivateTruck(@PathVariable(value = "id") final int truckID){

        Equipment truck = equipmentRepository.findById(truckID).orElseThrow(() ->
                errorService.truckDoesntExists(truckID));

        truck.setActive(false);

        equipmentRepository.save(truck);

        return ResponseEntity.ok(HttpStatus.OK);
    }





}
