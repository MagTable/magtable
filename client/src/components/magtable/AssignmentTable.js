import React from "react";
import { AssignmentContainer, MapsDiv } from "../../styled/magtable/Maps";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import TowerMap from "./TowerList";
import ParkingLocationMap from "./ParkingLocationMap";
import EmployeeList from "./EmployeeList";
import TruckList from "./TruckList";

/**
 * Placeholder component to assist in displaying routing
 * @date 2020-03-24
 * @author Arran Woodruff
 * @category Components/MagTable
 * @constructor
 */
const AssignmentTable = () => {
	return (
		<DndProvider backend={Backend}>
			<AssignmentContainer>
				<EmployeeList />
				<TruckList />
				<MapsDiv>
					<ParkingLocationMap />
					<TowerMap />
				</MapsDiv>
			</AssignmentContainer>
		</DndProvider>
	);
};

export default AssignmentTable;
