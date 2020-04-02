import React from "react";
import { useSelector } from "react-redux";
import {
	FadeOutDiv,
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

let isEvenRow = false;

function rowShade() {
	isEvenRow = !isEvenRow;
	return isEvenRow;
}

/**
 *
 * @constructor
 * @param props
 * @returns {*} The ViewList component
 */
function ViewList(props) {
	const assignments = useSelector(state => state.magtable.assignments);
	console.log(assignments);

	let enabledAssignments = [];
	let disabledAssignments = [];
	let towerAssignments = [];
	let numDisabledIce = 0;
	let notices = [];

	const MAX_NUM_UNASSIGNED_ICE = 6;

	console.log(towerAssignments);

	for (let i = 0; i < assignments.length; i++) {
		if (assignments[i].equipment.id >= 1000) {
			towerAssignments.push(assignments[i]);
		} else {
			if (assignments[i].notice !== "") {
				notices.push(assignments[i]);
			}
			if (
				assignments[i].employeeShifts.length > 0 ||
				assignments[i].parkingLocation !== null
			) {
				enabledAssignments.push(assignments[i]);
			} else if (
				assignments[i].equipment.type === "SVV" ||
				numDisabledIce < MAX_NUM_UNASSIGNED_ICE
			) {
				disabledAssignments.push(assignments[i]);
				if (assignments[i].equipment.type === "ICE") {
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
								isEven={rowShade()}
							/>
						)
				)}
				{disabledAssignments.map(
					assignment =>
						assignment.equipment.type === "SVV" && (
							<ViewListItem
								assignment={assignment}
								assigned={false}
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
								isEven={rowShade()}
							/>
						)
				)}
				{disabledAssignments.map(
					assignment =>
						assignment.equipment.type === "ICE" && (
							<ViewListItem
								assignment={assignment}
								assigned={false}
								key={assignment.equipment.id}
							/>
						)
				)}
				<FadeOutDiv />
			</VehicleListWrap>
			<SectionTitle>Vehicle Notices</SectionTitle>
			{notices.map(notice => (
				<ViewNotice assignment={notice} key={notice.equipment.id + "notice"} />
			))}
		</ViewListDiv>
	);
}

export default ViewList;
