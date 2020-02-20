import React from "react";
import { AssignmentContainer, MapsDiv } from "../../styled/magtable/Maps";
import TowerMap from "../_dumbcomponents/TowerMap";
import TruckMap from "../_dumbcomponents/TruckMap";
import TruckList from "../_dumbcomponents/TruckList";
import dummyTrucks from "../_dumbcomponents/dummyTrucks.js";
import dummyEmployees from "../_dumbcomponents/dummyEmployees";
import EmployeeList from "../_dumbcomponents/EmployeeList";

/**
 * The Mag Table portion of the website. Used for modifying what trucks employees are assigned to, where those trucks
 * will operate, what employees are working on each tower position, listing all available employees and trucks.
 *
 * @constructor
 */
const AssignmentTable = () => {
	/**
	 * Filters the list of equipment and creates a new array of only trucks.
	 * @returns {[]} An array of trucks
	 */
	function getTrucks() {
		let trucks = []; // Holds the trucks, devoid of tower positions.

		for (let i in dummyTrucks) {
			// Trucks have IDs lower than 1000.
			if (dummyTrucks[i].equipment.id < 1000) {
				trucks.push(dummyTrucks[i]); // Because it is a truck, include it in the list.
			}
		}

		return trucks;
	}

	return (
		<AssignmentContainer>
			<EmployeeList employees={dummyEmployees} />
			<TruckList trucks={getTrucks()} />

			<MapsDiv>
				<TruckMap />
				<TowerMap roles={["Tower Spotter", "CTM", "Iceman", "Ice House"]} />
			</MapsDiv>
		</AssignmentContainer>
	);
};

export default AssignmentTable;
