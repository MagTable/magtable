import React from "react";
import {
	AMEmp,
	AssignedToDiv,
	EmployeeDiv,
	EmployeeWrap,
	ListItemWrapper,
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
			<ListItemWrapper isEven={isEven}>
				<TruckNumDiv>
					<TruckNum>{assignment.equipment.id}</TruckNum>
				</TruckNumDiv>
				<AssignedToDiv>
					{assignment.parkingLocation === null
						? "NA"
						: assignment.parkingLocation.apron.charAt(0) +
						  "-" +
						  assignment.parkingLocation.phonetic +
						  assignment.parkingLocation.position +
						  (assignment.parkingLocation.bay === null
								? ""
								: assignment.parkingLocation.bay)}
				</AssignedToDiv>
				{/*E-AW is (East Pad)-(phonetic)(position)*/}
				<EmployeeWrap>
					<AMEmp isEven={isEven}>
						{amShifts.map(shift => (
							<EmployeeDiv key={shift.id}>{shift.name}</EmployeeDiv>
						))}
					</AMEmp>
					<PMEmp isEven={isEven}>
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
