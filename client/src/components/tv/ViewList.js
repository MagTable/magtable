import React from "react";
import { useSelector } from "react-redux";
import {
	BottomWrap,
	SectionTitle,
	VehicleListWrap,
	ViewListDiv
} from "../../styled/tv/ViewList";
import ViewListItem from "./ViewListItem";
import ViewTowerItem from "./ViewTowerItem";
import ViewNotice from "./ViewNotice";
import { DEICE_TRUCK, SERVICE_VEHICLE } from "../../actions/constants";

/**
 * @date 2020-03-31
 * @author MJ Kochuk, Arran Woodruff
 * @module Component
 */

/**
 * List of trucks for the TV View page
 * @constructor
 * @param props
 * @returns {*} The ViewList component
 */
function ViewList(props) {
	const historicalMagtable = useSelector(
		state => state.magtable.historical.magtable
	);

	const historicalAssignments = historicalMagtable
		? historicalMagtable.assignments
		: null;

	const assignments = useSelector(state => state.magtable.assignments);

	let enabledAssignments = []; // Trucks assigned to a location and/or with employees assigned to it.
	let towerAssignments = []; // All towers and their assigned employees.
	let notices = []; // Notices of the trucks with assignments.

	let numDisabledIce = 0; // Counter to track the number of disabled de-ice trucks to maximize screen real-estate.
	const MAX_NUM_UNASSIGNED_ICE = 6; // Determines how many disabled de-ice trucks can be displayed.

	const selectedAssignments = historicalAssignments
		? historicalAssignments
		: assignments;

	for (let i = 0; i < selectedAssignments.length; i++) {
		if (selectedAssignments[i].equipment.id >= 1000) {
			// Towers.
			towerAssignments.push(selectedAssignments[i]);
		} else {
			if (
				selectedAssignments[i].employeeShifts.length > 0 || // There are employees assigned to the truck.
				selectedAssignments[i].parkingLocation !== null // The truck is assigned to a location.
			) {
				enabledAssignments.push(selectedAssignments[i]);
				if (selectedAssignments[i].equipment.notice !== "") {
					// If the truck has a notice.
					notices.push(selectedAssignments[i]);
				}
			} else if (
				// The truck does not have any assignments
				selectedAssignments[i].equipment.type === SERVICE_VEHICLE || // It is a service truck.
				numDisabledIce < MAX_NUM_UNASSIGNED_ICE // There is enough room for a non-assigned de-ice truck.
			) {
				// disabledAssignments.push(assignments[i]);
				if (selectedAssignments[i].equipment.type === DEICE_TRUCK) {
					// If the truck is a de-ice truck.
					numDisabledIce++;
				}
			}
		}
	}

	return (
		<ViewListDiv>
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

			<SectionTitle>Vehicle Notices</SectionTitle>
			{notices.map(notice => (
				<ViewNotice assignment={notice} key={notice.equipment.id + "notice"} />
			))}

			<BottomWrap>
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

					{/*<FadeOutDiv />*/}
				</VehicleListWrap>

				<SectionTitle>Tower</SectionTitle>
				{towerAssignments.map(assignment => (
					<ViewTowerItem
						assignment={assignment}
						key={assignment.equipment.id}
					/>
				))}
			</BottomWrap>
		</ViewListDiv>
	);
}

export default ViewList;
