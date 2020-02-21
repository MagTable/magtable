import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ParkingLocation } from "../../styled/magtable/Maps";
import { useDrop } from "react-dnd";
import { SET_TRUCK_LOCATION } from "../../actions/constants";

/**
 * @date 2/20/2020
 * @author Tom Allcock
 * @module Component
 */

// todo list the parking locations in columns
/**
 * Lists the parking locations available for trucks to be assigned to.
 * Users can drag a truck into a parking location.
 * Users cannot drag more than two trucks into any parking location,
 * other than the parking locations in the first and last column.
 *
 * @constructor
 * @returns {*} The ParkingLocations component
 */
function ParkingLocations({ assignment }) {
	const dispatch = useDispatch();

	const parkingLocations = useSelector(
		state => state.magtable.parkingLocations
	);
	const apron = useSelector(state => state.magtable.selectedApron);

	const [{ canDrop, isOver }, drop] = useDrop({
		accept: SET_TRUCK_LOCATION,
		drop: () => ({
			equipmentID: assignment.equipment.id,
			locationID: parkingLocations[2].id //is this right?
		}),
		canDrop: item => true,
		collect: monitor => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	});

	console.log({ ...parkingLocations });

	return (
		<div ref={drop}>
			{parkingLocations.map(
				parkingLocation =>
					apron === parkingLocation.apron && (
						<ParkingLocation key={parkingLocation.id}>
							<span>{parkingLocation.code}</span>
						</ParkingLocation>
					)
			)}
		</div>
	);
}

export default ParkingLocations;
