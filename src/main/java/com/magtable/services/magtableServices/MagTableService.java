package com.magtable.services.magtableServices;


import com.magtable.model.entities.Assignment;
import com.magtable.model.entities.Equipment;
import com.magtable.model.entities.MagtableRecord;
import com.magtable.model.entities.Shift;
import com.magtable.repository.AssignmentRepository;
import com.magtable.repository.EquipmentRepository;
import com.magtable.repository.MagTableRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

/**
 * Service class with magtable helper methods
 * @author David Ward
 */
@Service
public class MagTableService {

    @Autowired
    MagTableRecordRepository magTableRecordRepository;

    @Autowired
    EquipmentRepository equipmentRepository;

    @Autowired
    AssignmentRepository assignmentRepository;



    /**
     * Method for creating a new magtable record
     * @return The new Magtablerecord
     */
    public MagtableRecord newMTR(){

        MagtableRecord magtableRecord = new MagtableRecord(); //making a blank mtr

        ArrayList<Equipment> equipmentList = (ArrayList<Equipment>) equipmentRepository.findAll();
        ArrayList<Assignment> assignmentList = new ArrayList<>();

        ArrayList<Shift> shiftList = new ArrayList<>(4);

        for (Equipment equipment : equipmentList) {

            if (!equipment.getActive()) {
                continue;
            }

            Assignment assignment = new Assignment();
            assignment.setEquipment(equipment);
            assignment.setParkingLocation(null);
            assignment.setEmployeeShifts(shiftList);

            assignmentList.add(assignment);

        }

        magtableRecord.setAssignments(assignmentList);

        return magtableRecord;
    }


}
