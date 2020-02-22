import React from "react";
import { useDrop } from "react-dnd";
import { SET_TRUCK_LOCATION } from "../../actions/constants";
import { PadDiv } from "../../styled/magtable/TruckMapMedia";
import { useSelector } from "react-redux";

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
function ParkingLocations({ parkingID, pad }) {
	const assignments = useSelector(state => state.magtable.assignments);

	const filterParkingLocations = assignments.filter(
		assignment => assignment.parkingLocation === parkingID
	);

	const filteredLocations = filterParkingLocations.map(
		truck => truck.equipment.id
	);

	const [{ canDrop, isOver }, drop] = useDrop({
		accept: SET_TRUCK_LOCATION,
		drop: () => ({
			locationID: parkingID
		}),
		canDrop: item => handleCanDrop(item),
		collect: monitor => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	});

	//todo Change up canDrop to check if a truck is already in the location. If so assign to the right side location for now.
	const handleCanDrop = item => {
		return true;
	};

	const dangerStyle = { border: "4px solid red" };
	const successStyle = { border: "4px solid green" };

	let style = {};
	if (isOver && canDrop) style = successStyle;
	if (isOver && !canDrop) style = dangerStyle;

	return (
		<>
			{filteredLocations.length <= 0 ? (
				<PadDiv ref={drop} style={style}>
					{pad}
				</PadDiv>
			) : (
				<PadDiv ref={drop} style={style}>
					{filteredLocations}
				</PadDiv>
			)}
		</>
	);
}

export default ParkingLocations;
