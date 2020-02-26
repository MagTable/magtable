package com.magtable.controller;

import com.magtable.model.AuthenticationResponse;
import com.magtable.model.Tower;
import com.magtable.model.Truck;
import com.magtable.repository.TowerRepository;
import com.magtable.repository.TruckRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/equipment")
public class EquipmentController {

    @Autowired
    private TruckRepository truckRepository;

    @Autowired
    private TowerRepository towerRepository;

    /**
     * route           GET /equipment/trucks
     * description     route to fetch the trucks from the database
     * access          Personnel Managers, System Admins
     *
     * @return the list of trucks
     */
    @GetMapping("/trucks")
    public List<Truck> getAllTrucks(){
        List<Truck> truckList = truckRepository.findAll();
        return truckList;
    }

    /**
     * route           GET /equipment/towers
     * description     route to fetch the towers from the database
     * access          Personnel Managers, System Admins
     *
     * @return the list of towers
     */
    @GetMapping("/towers")
    public List<Tower> getAllTowers(){
        List<Tower> towerList = towerRepository.findAll();
        return towerList;
    }


}
