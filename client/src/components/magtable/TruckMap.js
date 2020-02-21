import React from "react";
import { ListTitle, ListTitleText } from "../../styled/magtable/Titling";
import { TruckMapDiv } from "../../styled/magtable/Maps";
import ApronToggle from "./ApronToggle";
import ParkingLocations from "../_dumbcomponents/ParkingLocations";
import { useSelector } from "react-redux";

/**
 * @date 2020-02-17
 * @author MJ Kochuk
 * @module Component
 */

/**
 *
 * @constructor
 * @param props
 * @returns {*} The TruckMap component
 */
function TruckMap(props) {
	const assignments = useSelector(state => state.magtable.assignments);

	return (
		<TruckMapDiv>
			<ListTitle>
				<ListTitleText>Parking Locations</ListTitleText>
				<ApronToggle />
			</ListTitle>
			{assignments.map(assignment => (
				<ParkingLocations assignment={assignment} />
			))}
		</TruckMapDiv>
	);
}

export default TruckMap;
