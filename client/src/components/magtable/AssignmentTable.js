import React from "react";
import { AssignmentContainer, MapsDiv } from "../../styled/magtable/Maps";
import TowerMap from "../_dumbcomponents/TowerMap";
import TruckMap from "../_dumbcomponents/TruckMap";
import TruckList from "../_dumbcomponents/TruckList";
import dummyEmployees from "../_dumbcomponents/dummyEmployees";
import EmployeeList from "./EmployeeList";

/**
 * Placeholder component to assist in displaying routing
 * @constructor
 */
const AssignmentTable = () => {
	return (
		<AssignmentContainer>
			<EmployeeList employees={dummyEmployees} />
			<TruckList />

			<MapsDiv>
				<TruckMap />
				<TowerMap roles={["Tower Spotter", "CTM", "Iceman", "Ice House"]} />
			</MapsDiv>
		</AssignmentContainer>
	);
};

export default AssignmentTable;
