import React from "react";
import {EmployeeList, EmployeeListItem} from "../../styled/magtable/Employee";
import {TruckList} from "../../styled/magtable/Truck";
import {
	AssignmentContainer,
	MapsDiv,
	TowerMap,
	TowerPosition,
	TruckMap
} from "../../styled/magtable/Maps";
import TruckListItem from "./TruckListItem";
import {ListTitle, ListTitleText} from "../../styled/magtable/Titling";

/**
 * Placeholder component to assist in displaying routing
 * @constructor
 */
const AssignmentTable = () => {
	return (
		<AssignmentContainer>
				<EmployeeList>
					<ListTitle>
						<ListTitleText>
							Employees
						</ListTitleText>
					</ListTitle>

					<EmployeeListItem/>
					<EmployeeListItem/>
				</EmployeeList>
				<TruckList>
					<ListTitle>
						<ListTitleText>
							Trucks
						</ListTitleText>
					</ListTitle>
					<TruckListItem/>
					<TruckListItem/>
				</TruckList>

				<MapsDiv>
					<TruckMap>
						<ListTitle>
							<ListTitleText>
								Parking Locations
							</ListTitleText>
						</ListTitle>
					</TruckMap>
					<TowerMap>
						<ListTitle>
							<ListTitleText>
								Tower
							</ListTitleText>
						</ListTitle>
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
