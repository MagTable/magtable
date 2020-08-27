import React from "react";
import {
	ViewTruckEmployees,
	ViewTruckListItem,
	ViewTruckNumber,
	ViewTruckParkingLocation
} from "../../styled/tv/ViewList";

/**
 * List items containing truck information for the TV view page.
 * @date 2020-03-31
 * @author MJ Kochuk
 * @category Components/TV
 * @constructor
 * @param props
 * @returns {*} The ViewListItem component
 */
function ViewListItem({ assignment }) {
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

	const hasNotice = assignment.equipment.notice !== "";

	const parkingLocation = assignment.parkingLocation;

	const apronCode = parkingLocation
		? parkingLocation.apron.charAt(0) + "-"
		: "";
	const zoneCode = parkingLocation
		? parkingLocation.phonetic + parkingLocation.position
		: "";
	const bay =
		parkingLocation && parkingLocation.bay ? "-" + parkingLocation.bay : "";

	return (
		<ViewTruckListItem hasNotice={hasNotice}>
			<ViewTruckNumber>
				<h1>{assignment.equipment.id}</h1>
			</ViewTruckNumber>

			<ViewTruckParkingLocation>
				<h2>
					{apronCode}
					{zoneCode}
					{bay}
				</h2>
			</ViewTruckParkingLocation>

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
		</ViewTruckListItem>
	);
}

function getShortenedName(name) {
	return name.split(" ")[0] + " " + name.split(" ")[1].charAt(0) + ".";
}

export default ViewListItem;

export const ViewListItemHeader = () => (
	<ViewTruckListItem>
		<ViewTruckNumber>
			<h1>#</h1>
		</ViewTruckNumber>
		<ViewTruckParkingLocation>
			<h2>Location</h2>
		</ViewTruckParkingLocation>
		<ViewTruckEmployees>
			<h2>AM</h2>
		</ViewTruckEmployees>
		<ViewTruckEmployees>
			<h2>PM</h2>
		</ViewTruckEmployees>
	</ViewTruckListItem>
);
