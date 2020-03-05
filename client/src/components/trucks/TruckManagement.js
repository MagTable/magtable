import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

/**
 * @date 3/5/2020
 * @author Tom Allcock
 * @module Component
 */

/**
 *
 * @constructor
 * @returns {*} The TruckManagement component
 */
function TruckManagement() {
	const dispatch = useDispatch();

	return "This is the page where we will be listing off the trucks for Mechanics to change the operational status and notice of trucks, as well as for the other users to be able to add and remove trucks from the database";
}

export default TruckManagement;
