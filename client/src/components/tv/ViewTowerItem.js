import React from "react";
import { ViewTowerListItem } from "../../styled/tv/ViewList";
import { ViewTruckEmployees } from "../../styled/tv/ViewList";
import { ViewTowerListType } from "../../styled/tv/ViewList";

/**
 * Tower items within the list of towers in TV view.
 * @date 2020-04-01
 * @author MJ Kochuk
 * @category Components/TV
 * @constructor
 * @param props
 * @returns {*} The ViewTowerItem component
 */
function ViewTowerItem({ assignment }) {
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

	return (
		<ViewTowerListItem>
			<ViewTowerListType>
				<h2>{getShortenedType(assignment.equipment.type)}</h2>
			</ViewTowerListType>

			<ViewTruckEmployees am>
				{amShifts.map(shift => (
					<h4 key={shift.id}>{getShortenedName(shift.name)}</h4>
				))}
			</ViewTruckEmployees>

			<ViewTruckEmployees pm>
				{pmShifts.map(shift => (
					<h4 key={shift.id}>{getShortenedName(shift.name)}</h4>
				))}
			</ViewTruckEmployees>
		</ViewTowerListItem>
	);
}

function getShortenedName(name) {
	return name.split(" ")[0] + " " + name.split(" ")[1].charAt(0) + ".";
}

function getShortenedType(type) {
	return type.split(" ")[0].charAt(0) + " " + type.split(" ")[1];
}

export default ViewTowerItem;
