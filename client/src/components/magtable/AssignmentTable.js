import React from "react";
import { AssignmentContainer, MapsDiv } from "../../styled/magtable/Maps";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import TowerMap from "./TowerMap";
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
	return (
		<DndProvider backend={Backend}>
			<AssignmentContainer>
				<EmployeeList employees={dummyEmployees} />
				<TruckList trucks={dummyTrucks} />

				<MapsDiv>
					<TruckMap />
					<TowerMap roles={["Tower Spotter", "CTM", "Iceman", "Ice House"]} />
				</MapsDiv>
			</AssignmentContainer>
		</DndProvider>
	);
};

export default AssignmentTable;
