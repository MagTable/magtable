import React from "react";
import { useSelector } from "react-redux";
import {
	SectionTitle,
	VehicleListWrap,
	ViewListDiv
} from "../../styled/tv/ViewList";
import ViewListItem from "./ViewListItem";
import ViewTowerItem from "./ViewTowerItem";
import ViewNotice from "./ViewNotice";

/**
 * @date 2020-03-31
 * @author MJ Kochuk
 * @module Component
 */

/**
 * List of trucks for the TV View page
 * @constructor
 * @param props
 * @returns {*} The ViewList component
 */
function ViewList(props) {
	const assignments = useSelector(state => state.magtable.assignments);

	let enabledAssignments = []; // Trucks assigned to a location and/or with employees assigned to it.
	let towerAssignments = []; // All towers and their assigned employees.
	let notices = []; // Notices of the trucks with assignments.

	let numDisabledIce = 0; // Counter to track the number of disabled de-ice trucks to maximize screen real-estate.
	const MAX_NUM_UNASSIGNED_ICE = 6; // Determines how many disabled de-ice trucks can be displayed.

	for (let i = 0; i < assignments.length; i++) {
		if (assignments[i].equipment.id >= 1000) {
			// Towers.
			towerAssignments.push(assignments[i]);
		} else {
			if (
				assignments[i].employeeShifts.length > 0 || // There are employees assigned to the truck.
				assignments[i].parkingLocation !== null // The truck is assigned to a location.
			) {
				enabledAssignments.push(assignments[i]);
				if (assignments[i].equipment.notice !== "") {
					// If the truck has a notice.
					notices.push(assignments[i]);
				}
			} else if (
				// The truck does not have any assignments
				assignments[i].equipment.type === "SVV" || // It is a service truck.
				numDisabledIce < MAX_NUM_UNASSIGNED_ICE // There is enough room for a non-assigned de-ice truck.
			) {
				// disabledAssignments.push(assignments[i]);
				if (assignments[i].equipment.type === "ICE") {
					// If the truck is a de-ice truck.
					numDisabledIce++;
				}
			}
		}
	}

	return (
		<ViewListDiv>
			<SectionTitle>Tower</SectionTitle>
			{towerAssignments.map(assignment => (
				<ViewTowerItem assignment={assignment} key={assignment.equipment.id} />
			))}
			<VehicleListWrap>
				<SectionTitle>Service Vehicles</SectionTitle>
				{enabledAssignments.map(
					assignment =>
						assignment.equipment.type === "SVV" && (
							<ViewListItem
								assignment={assignment}
								assigned={true}
								key={assignment.equipment.id}
							/>
						)
				)}
				<SectionTitle>De-Ice Trucks</SectionTitle>
				{enabledAssignments.map(
					assignment =>
						assignment.equipment.type === "ICE" && (
							<ViewListItem
								assignment={assignment}
								assigned={true}
								key={assignment.equipment.id}
							/>
						)
				)}
			</VehicleListWrap>
			<SectionTitle>Vehicle Notices</SectionTitle>
			{notices.map(notice => (
				<ViewNotice assignment={notice} key={notice.equipment.id + "notice"} />
			))}
		</ViewListDiv>
	);
}

export default ViewList;
