import React, { useState } from "react";
import { ListTitle, ListTitleText } from "../../styled/magtable/Titling";
import TruckListItem from "../magtable/TruckListItem";
import {
	TruckListButton,
	TruckListDiv,
	TruckListDivWrapper,
	TruckListManipDiv
} from "../../styled/magtable/ListContent";
import Switch from "react-switch";

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
				{trucks.map(truck => (
					<TruckListItem
						open={open}
						key={truck.equipment.id}
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
