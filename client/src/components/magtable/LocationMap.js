import React from "react";
import { ListTitle, ListTitleText } from "../../styled/magtable/Titling";
import { ParkingLocation, TruckMapDiv } from "../../styled/magtable/Maps";
import ApronToggle from "./ApronToggle";
import {
	FakePadDiv,
	MapWrapper,
	NumberMiddle,
	NumberTop,
	PadColumn
} from "../../styled/magtable/TruckMapMedia";
import { useSelector } from "react-redux";
import ParkingLocations from "../_dumbcomponents/ParkingLocations";
import AddEmployeeShift from "./AddEmployeeShift";

/**
 * @date 2020-02-17
 * @author MJ Kochuk
 * @module Component
 */

/**
 *
 * @constructor
 * @param props
 * @returns {*} The LocationMap component
 */
function LocationMap(props) {
	const apron = useSelector(state => state.magtable.selectedApron);
	const assignments = useSelector(state => state.magtable.assignments);

	const filterParkingLocations = assignments.filter(
		assignment => assignment.parkingLocation !== null
	);

	const filteredLocations = filterParkingLocations.map(
		parkingLocation => parkingLocation.parkingLocation
	);

	return <AddEmployeeShift />;
}

export default LocationMap;
