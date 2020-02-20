import React from "react";
import { AssignmentContainer, MapsDiv } from "../../styled/magtable/Maps";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import TowerMap from "./TowerMap";
import TruckMap from "../_dumbcomponents/TruckMap";
import TruckList from "../_dumbcomponents/TruckList";
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
				<EmployeeList />
				<TruckList />

				<MapsDiv>
					<TruckMap />
					<TowerMap />
				</MapsDiv>
			</AssignmentContainer>
		</DndProvider>
	);
};

export default AssignmentTable;
