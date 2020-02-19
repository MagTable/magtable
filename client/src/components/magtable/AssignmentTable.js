import React from "react";
import { AssignmentContainer, MapsDiv } from "../../styled/magtable/Maps";
import TruckMap from "../_dumbcomponents/TruckMap";
import TruckList from "../_dumbcomponents/TruckList";
import dummyTrucks from "../_dumbcomponents/dummyTrucks.js";
import dummyEmployees from "../_dumbcomponents/dummyEmployees";
import EmployeeList from "../_dumbcomponents/EmployeeList";
import TowerMap from "./TowerMap";

/**
 * Placeholder component to assist in displaying routing
 * @constructor
 */
const AssignmentTable = () => {
	return (
		<AssignmentContainer>
			<EmployeeList employees={dummyEmployees} />
			<TruckList trucks={dummyTrucks} />
			<MapsDiv>
				<TruckMap />
				<TowerMap />
			</MapsDiv>
		</AssignmentContainer>
	);
};

export default AssignmentTable;
