import React, { useState } from "react";
import { ListTitle, ListTitleText } from "../../styled/magtable/Titling";
import TruckListItem from "../magtable/TruckListItem";
import {
	TruckListButton,
	TruckListDiv,
	TruckListDivWrapper,
	TruckListManipDiv
} from "../../styled/magtable/ListContent";
import { useSelector } from "react-redux";
import Switch from "react-switch";

/**
 * @date 2020-02-17
 * @author MJ Kochuk
 * @module Component
 */

/**
 * Rendered on the Truck Assignment page, displays all available trucks, the employees assigned to each (two AM and two
 * PM slots for employees) while color-coding each truck to represent their operational status. User can expand and
 * contract notices on all trucks and swap between displaying AM employees and PM employees. Trucks are draggable for
 * assigning them to locations in the TruckMap.
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
				<ListTitleText>Trucks</ListTitleText>
				<TruckListManipDiv>
					<TruckListButton onClick={() => setOpen(!open)}>
						Show Notices
					</TruckListButton>

					<Switch
						onChange={() => toggleTime()}
						checked={displayedTime === "am"}
						offColor={"#414244"}
						onColor={"#414244"}
						// checkedIcon={<span>AM</span>}
						// uncheckedIcon={<span>PM</span>}
					/>
				</TruckListManipDiv>
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
