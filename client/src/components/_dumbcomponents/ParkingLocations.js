import React from "react";
import { useDrop } from "react-dnd";
import { SET_TRUCK_LOCATION } from "../../actions/constants";
import { FakePadDiv, PadDiv } from "../../styled/magtable/TruckMapMedia";
import { useDispatch, useSelector } from "react-redux";
import { removeTruckLocation } from "../../actions/magtable";

/**
 * @date 2/20/2020
 * @author Tom Allcock
 * @module Component
 */

/**
 * Lists the parking locations available for trucks to be assigned to.
 * Users can drag a truck into a parking location.
 * Users cannot drag more than two trucks into any parking location,
 * other than the parking locations in the first and last column.
 *
 * @constructor
 * @returns {*} The ParkingLocations component
 */
function ParkingLocations({
	parkingID,
	originalParkingLocationID,
	pad,
	isSplit,
	leftPad,
	rightPad
}) {
	const dispatch = useDispatch();
	const assignments = useSelector(state => state.magtable.assignments);

	// checks to see if the parking location is equal to the parkingID
	const checkParkingIDWithParkingLocation = assignments.filter(
		assignment => assignment.parkingLocation === parkingID
	);

	// Finds the equipment id.
	const equipmentID = checkParkingIDWithParkingLocation.map(
		assignment => assignment.equipment.id
	);

	const parkingLocation = assignments.map(parked => parked.parkingLocation);

	const [{ canDrop, isOver }, drop] = useDrop({
		accept: SET_TRUCK_LOCATION,
		drop: (item, monitor) => {
			if (monitor.didDrop()) {
				return;
			}
			return {
				locationID: parkingID,
				originalParkingLocationID: originalParkingLocationID
			};
		},
		canDrop: (item, monitor) => handleCanDrop(item, monitor),
		collect: monitor => {
			return {
				isOver: monitor.isOver(),
				canDrop: monitor.canDrop()
			};
		}
	});

	//todo Change up canDrop to check if a truck is already in the location. If so assign to the right side location for now.
	const handleCanDrop = () => {
		return isSplit ? equipmentID.length === 0 : equipmentID.length < 2;
	};

	const dangerStyle = { border: "4px solid red" };
	const successStyle = { border: "4px solid green" };

	let style = {};
	if (isOver && canDrop) style = successStyle;
	if (isOver && !canDrop) style = dangerStyle;

	const handleClick = equipmentID => {
		dispatch(removeTruckLocation(equipmentID, originalParkingLocationID));
	};

	// This wont be needed if I can get the drop to move the truck location when dropping in a second truck. Would have to edit the delete button so that if reverts the trucks location to one spot thou
	return (
		<>
			{canDrop && isOver && equipmentID.length === 1 ? (
				<FakePadDiv ref={drop}>
					<ParkingLocations
						parkingID={parkingID + 1}
						pad={leftPad}
						isSplit={true}
						originalParkingLocationID={originalParkingLocationID}
					/>
					<ParkingLocations
						parkingID={parkingID + 2}
						pad={rightPad}
						isSplit={true}
						originalParkingLocationID={originalParkingLocationID}
					/>
				</FakePadDiv>
			) : equipmentID.length <= 0 ? (
				<PadDiv ref={drop} style={style}>
					{pad}
				</PadDiv>
			) : (
				<PadDiv ref={drop} style={style}>
					{equipmentID}
					<button onClick={() => handleClick(equipmentID[0])}>X</button>
				</PadDiv>
			)}
		</>
	);
}
export default ParkingLocations;
