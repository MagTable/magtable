import React, { useState } from "react";
import { ListTitle, ListTitleText } from "../../styled/magtable/Titling";
import TruckListItem from "../magtable/TruckListItem";
import {
	TruckListDiv,
	TruckListDivWrapper
} from "../../styled/magtable/ListContent";

/**
 * @date 2020-02-17
 * @author MJ Kochuk
 * @module Component
 */

/**
 *
 * @constructor
 * @param props
 * @returns {*} The TruckList component
 */
function TruckList({ trucks }) {
	const [open, setOpen] = useState(false);
	const [displayedTime, setDisplayedTime] = useState("am");

	function toggleTime() {
		if (displayedTime === "am") {
			setDisplayedTime("pm");
		} else {
			setDisplayedTime("am");
		}
	}
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
				{trucks.map(truck => (
					<TruckListItem
						open={open}
						key={truck.id}
						truck={truck}
						displayedTime={displayedTime}
						setDisplayedTime={setDisplayedTime}
					/>
				))}
			</TruckListDiv>
		</TruckListDivWrapper>
	);
}

export default TruckList;
