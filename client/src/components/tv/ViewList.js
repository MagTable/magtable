import React from "react";
import { useSelector } from "react-redux";
import { ViewListDiv } from "../../styled/tv/ViewList";
import ViewListItem from "./ViewListItem";

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

	for (let i = 0; i < assignments.length; i++) {
		if (
			assignments[i].employeeShifts.length > 0 ||
			assignments[i].parkingLocation !== null
		) {
			enabledAssignments.push(assignments[i]);
		} else {
			disabledAssignments.push(assignments[i]);
		}
	}

	return (
		<ViewListDiv>
			{enabledAssignments.map(assignment => (
				<ViewListItem
					assignment={assignment}
					assigned={true}
					key={assignment.equipment.id}
					isEven={rowShade()}
				/>
			))}

			{disabledAssignments.map(assignment => (
				<ViewListItem
					assignment={assignment}
					assigned={false}
					key={assignment.equipment.id}
				/>
			))}
		</ViewListDiv>
	);
}

export default ViewList;
