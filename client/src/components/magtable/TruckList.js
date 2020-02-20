import React from "react";
import { useSelector } from "react-redux";
import { TruckListDiv } from "../../styled/magtable/ListContent";

/**
 * @date 2/19/2020
 * @author Tom Allcock
 * @module Component
 */

/**
 * Handles the rendering of the truck list to the assignment table
 *
 * @constructor
 * @returns {*} The TruckList component
 */
const TruckList = () => {
	const trucks = useSelector(state => state.truck.trucks);

	return <TruckListDiv></TruckListDiv>;
};

export default TruckList;
