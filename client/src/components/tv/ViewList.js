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

	return (
		<ViewListDiv>
			{assignments.map(
				assignment =>
					assignment.employeeShifts.length > 0 && (
						<ViewListItem
							assignment={assignment}
							assigned={true}
							key={assignment.equipment.id}
							isEven={rowShade()}
						/>
					)
			)}

			{assignments.map(
				assignment =>
					assignment.employeeShifts.length === 0 && (
						<ViewListItem
							assignment={assignment}
							assigned={false}
							key={assignment.equipment.id}
						/>
					)
			)}
		</ViewListDiv>
	);
}

export default ViewList;
