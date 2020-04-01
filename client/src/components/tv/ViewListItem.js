import React from "react";
import {
	AMEmp,
	AssignedToDiv,
	EmployeeDiv,
	EmployeeWrap,
	ListItemWrapper,
	PairedEmpDiv,
	PMEmp,
	TruckNum,
	TruckNumDiv,
	UnassignedWrap
} from "../../styled/tv/ViewList";

/**
 * @date 2020-03-31
 * @author MJ Kochuk
 * @module Component
 */

/**
 *
 * @constructor
 * @param props
 * @returns {*} The ViewListItem component
 */
function ViewListItem({ assignment, assigned, isEven }) {
	let amShifts = [];
	let pmShifts = [];

	for (let i = 0; i < assignment.employeeShifts.length; i++) {
		if (assignment.employeeShifts[i].timeOfDay === "AM") {
			amShifts.push(assignment.employeeShifts[i]);
		} else {
			pmShifts.push(assignment.employeeShifts[i]);
		}
	}

	if (assigned) {
		return (
			<ListItemWrapper>
				<TruckNumDiv>
					<TruckNum>{assignment.equipment.id}</TruckNum>
				</TruckNumDiv>
				<AssignedToDiv>
					{assignment.parkingLocation === null
						? null
						: assignment.parkingLocation.apron}
				</AssignedToDiv>
				<EmployeeWrap>
					<AMEmp isEven={isEven}>
						{amShifts.map(shift => (
							<EmployeeDiv>{shift.name}</EmployeeDiv>
						))}
					</AMEmp>
					<PMEmp isEven={isEven}>
						{pmShifts.map(shift => (
							<EmployeeDiv>{shift.name}</EmployeeDiv>
						))}
					</PMEmp>
				</EmployeeWrap>
			</ListItemWrapper>
		);
	}
	return <UnassignedWrap>Unassigned</UnassignedWrap>;
}

export default ViewListItem;
