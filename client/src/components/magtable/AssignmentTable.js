import React from "react";
import {EmployeeList, EmployeeListItem} from "../../styled/magtable/Employee";
import {TruckList, TruckListItem} from "../../styled/magtable/Truck";
import {
	AssignmentContainer,
	MapsContainer,
	MapsDiv,
	TowerMap,
	TowerPosition,
	TruckMap
} from "../../styled/magtable/Maps";

/**
 * Placeholder component to assist in displaying routing
 * @constructor
 */
const AssignmentTable = () => {
	return (
		<AssignmentContainer>
			<EmployeeList>
				<EmployeeListItem/>
				<EmployeeListItem/>
			</EmployeeList>
			<TruckList>
				<TruckListItem/>
				<TruckListItem/>
			</TruckList>
				<MapsDiv>
					<TruckMap/>
					<TowerMap>
						<TowerPosition/>
						<TowerPosition/>
						<TowerPosition/>
						<TowerPosition/>
						<TowerPosition/>
					</TowerMap>
				</MapsDiv>

		</AssignmentContainer>
	);
};

export default AssignmentTable;
