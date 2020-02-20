import React, { useState } from "react";
import { ListTitle, ListTitleText } from "../../styled/magtable/Titling";
import TruckListItem from "../magtable/TruckListItem";
import {
	TruckListDiv,
	TruckListDivWrapper
} from "../../styled/magtable/ListContent";
import { useSelector } from "react-redux";

/**
 * @date 2020-02-17
 * @author MJ Kochuk
 * @module Component
 */

/**
 *
 * @constructor
 * @returns {*} The TruckList component
 */
function TruckList() {
	const [open, setOpen] = useState(false);
	const [displayedTime, setDisplayedTime] = useState("am");

	function toggleTime() {
		if (displayedTime === "am") {
			setDisplayedTime("pm");
		} else {
			setDisplayedTime("am");
		}
	}
	const assignments = useSelector(state => state.magtable.assignments);

	return (
		<TruckListDivWrapper>
			<ListTitle>
				<ListTitleText>
					Trucks
					<button onClick={() => setOpen(!open)}>open</button>
					<button onClick={() => toggleTime()}>Toggle Time</button>
				</ListTitleText>
			</ListTitle>
			<TruckListDiv>
				{/* equipment with id < 1000 (trucks) */}
				{assignments.map(
					assignment =>
						assignment.equipment.id < 1000 && (
							<TruckListItem
								open={open}
								key={assignment.equipment.id}
								assignment={assignment}
								displayedTime={displayedTime}
								shift
							/>
						)
				)}
			</TruckListDiv>
		</TruckListDivWrapper>
	);
}

export default TruckList;
