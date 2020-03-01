import React from "react";
import { useDrop } from "react-dnd";
import { SET_TRUCK_LOCATION, SUCCESS } from "../../actions/constants";
import {
	HalfPadDiv,
	PadDiv,
	TopHalfPadDiv
} from "../../styled/magtable/TruckMapMedia";
import { useDispatch, useSelector } from "react-redux";
import { removeTruckLocation } from "../../actions/magtable";

/**
 * @date 2/20/2020
 * @author Tom Allcock, Steven Wong
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
 * @returns {*} The ParkingLocation component
 */
function ParkingLocation({ parkingLocation, position, assignments }) {
	const dispatch = useDispatch();

	const [{ canDrop, isOver }, drop] = useDrop({
		accept: SET_TRUCK_LOCATION,
		drop: () => ({
			locationID: parkingLocation.id,
			phonetic: parkingLocation.phonetic,
			bay: null,
			position
		}),
		canDrop: item => handleCanDrop(item),
		collect: monitor => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	});

	//todo Change up canDrop to check if a truck is already in the location. If so assign to the right side location for now.
	const handleCanDrop = () => {
		return true;
		// basically, if there's a truck in X location, take current truck and change it's location by + 1, then the new truck going in
		// take the original location and + 2.
		// Example, id: 3, apron: WDA, code: BE
		// Truck 24 is already there, and trying to add truck 26. First fire off a new setTruckLocation with truck 24 and locationID + 1,
		// then truck 26 gets added to locationID 3+2.
		// This information is consistent with initialParkingLocations.
		// if (!filteredParkedLocations?.includes(parkingID)) return true;
	};

	const dangerStyle = { border: "4px solid red" };
	const successStyle = { border: "4px solid green" };

	let style = {};
	if (isOver && canDrop) style = successStyle;
	if (isOver && !canDrop) style = dangerStyle;

	//todo find the specific truck we clicked.
	const handleClick = equipmentID => {
		dispatch(removeTruckLocation(equipmentID));
	};

	//todo need to fix the filtedLocations[0] to be where the actual button truck is in the array. Maybe another turnary operator that checks if there's more than one vehicle?
	console.log(canDrop, isOver);

	// This wont be needed if I can get the drop to move the truck location when dropping in a second truck. Would have to edit the delete button so that if reverts the trucks location to one spot thou
	if (assignments.length === 0)
		return <PadDiv ref={drop}>{parkingLocation.phonetic + position}</PadDiv>;

	if (assignments.length === 1)
		return (
			<PadDiv>
				<HalfPadDiv
					// outlineType={rightCanDrop && rightIsOver && SUCCESS}
					left={isOver}
				>
					{assignments[0].equipment.id}
					<button>X</button>
				</HalfPadDiv>
				<HalfPadDiv
					// outlineType={rightCanDrop && rightIsOver && SUCCESS}
					right={isOver}
				>
					{assignments[0].equipment.id}
					<button>X</button>
				</HalfPadDiv>
			</PadDiv>
		);

	if (assignments.length === 1 && !isOver)
		return <PadDiv ref={drop}>{assignments[0].equipment.id}</PadDiv>;

	if (assignments.length === 2)
		return (
			<PadDiv>
				<HalfPadDiv left ref={drop}>
					{assignments[0].equipment.id}
					<button>X</button>
				</HalfPadDiv>
				<HalfPadDiv right ref={drop}>
					{assignments[1].equipment.id}
					<button>X</button>
				</HalfPadDiv>
			</PadDiv>
		);
}

// function HalfPadDiv() {}

export default React.memo(ParkingLocation);
