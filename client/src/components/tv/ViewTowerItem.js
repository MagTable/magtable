import React from "react";
import {
	AMEmp,
	EmployeeDiv,
	EmployeeWrap,
	PMEmp,
	TowerListDiv,
	TowerPos,
	TowerPosDiv
} from "../../styled/tv/ViewList";

/**
 * @date 2020-04-01
 * @author MJ Kochuk
 * @module Component
 */

/**
 * Tower items within the list of towers in TV view.
 * @constructor
 * @param props
 * @returns {*} The ViewTowerItem component
 */
function ViewTowerItem({ assignment }) {
	let amShift; // The employee assigned to the AM shift.
	let pmShift; // The employee assigned to the PM shift.

	for (let i = 0; i < assignment.employeeShifts.length; i++) {
		if (assignment.employeeShifts[i].timeOfDay === "AM") {
			// The Employee is assigned the AM shift.
			amShift = assignment.employeeShifts[i];
		} else if (assignment.employeeShifts[i].timeOfDay === "PM") {
			// The Employee is assigned the PM shift.
			pmShift = assignment.employeeShifts[i];
		}
	}

	return (
		<TowerListDiv>
			<TowerPosDiv>
				<TowerPos>{assignment.equipment.type}</TowerPos>
				<EmployeeWrap>
					<AMEmp>
						<EmployeeDiv>{amShift == null ? "" : amShift.name}</EmployeeDiv>
					</AMEmp>
					<PMEmp>
						<EmployeeDiv>{pmShift == null ? "" : pmShift.name}</EmployeeDiv>
					</PMEmp>
				</EmployeeWrap>
			</TowerPosDiv>
		</TowerListDiv>
	);
}

export default ViewTowerItem;
