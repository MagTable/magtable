import React from "react";
import {
	AMEmp,
	EmployeeDiv,
	EmployeeWrap,
	ListItemWrapper,
	PMEmp,
	TowerListDiv,
	TowerPos,
	TowerPosDiv,
	TruckNum,
	TruckNumDiv
} from "../../styled/tv/ViewList";
import { TruckNumberDiv } from "../../styled/magtable/ListContent";

/**
 * @date 2020-04-01
 * @author MJ Kochuk
 * @module Component
 */

/**
 *
 * @constructor
 * @param props
 * @returns {*} The ViewTowerItem component
 */
function ViewTowerItem({ assignment }) {
	let amShift;
	let pmShift;

	for (let i = 0; i < assignment.employeeShifts.length; i++) {
		if (assignment.employeeShifts[i].timeOfDay === "AM") {
			amShift = assignment.employeeShifts[i];
		} else if (assignment.employeeShifts[i].timeOfDay === "PM") {
			pmShift = assignment.employeeShifts[i];
		}
	}

	console.log(pmShift);

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
