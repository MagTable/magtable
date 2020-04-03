import React from "react";
import {
	AMEmp,
	AssignedToDiv,
	EmployeeDiv,
	EmployeeWrap,
	ListItemWrapper,
	NoticeIcon,
	PMEmp,
	TruckNum,
	TruckNumDiv,
	TruckNumDivUnassigned,
	UnassignedWrap
} from "../../styled/tv/ViewList";

/**
 * @date 2020-03-31
 * @author MJ Kochuk
 * @module Component
 */

/**
 * List items containing truck information for the TV view page.
 * @constructor
 * @param props
 * @returns {*} The ViewListItem component
 */
function ViewListItem({ assignment, assigned }) {
	let amShifts = []; // Employees assigned to this truck in the AM.
	let pmShifts = []; // Employees assigned to this truck in the PM.

	for (let i = 0; i < assignment.employeeShifts.length; i++) {
		if (assignment.employeeShifts[i].timeOfDay === "AM") {
			// Get the employees assigned to AM shift.
			amShifts.push(assignment.employeeShifts[i]);
		} else {
			// The PM employees
			pmShifts.push(assignment.employeeShifts[i]);
		}
	}

	if (assigned) {
		return (
			<ListItemWrapper>
				<TruckNumDiv>
					{assignment.equipment.notice === "" ? null : ( // If there is a notice on the vehicle, display a warning.
						<NoticeIcon className="fas fa-exclamation-triangle" />
					)}

					<TruckNum>{assignment.equipment.id}</TruckNum>
				</TruckNumDiv>
				<AssignedToDiv>
					{assignment.parkingLocation === null // If the truck is assigned to a location.
						? "NA"
						: assignment.parkingLocation.apron.charAt(0) + // E or W.
						  "-" +
						  assignment.parkingLocation.phonetic +
						  assignment.parkingLocation.position +
						  (assignment.parkingLocation.bay === null
								? ""
								: assignment.parkingLocation.bay)}
				</AssignedToDiv>
				<EmployeeWrap>
					<AMEmp>
						{amShifts.map(shift => (
							<EmployeeDiv key={shift.id}>{shift.name}</EmployeeDiv>
						))}
					</AMEmp>
					<PMEmp>
						{pmShifts.map(shift => (
							<EmployeeDiv key={shift.id}>{shift.name}</EmployeeDiv>
						))}
					</PMEmp>
				</EmployeeWrap>
			</ListItemWrapper>
		);
	}
	return (
		<UnassignedWrap>
			<TruckNumDivUnassigned>
				<TruckNum>{assignment.equipment.id}</TruckNum>
			</TruckNumDivUnassigned>
		</UnassignedWrap>
	);
}

export default ViewListItem;
