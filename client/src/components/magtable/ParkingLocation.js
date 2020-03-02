import React from "react";
import { useDrop } from "react-dnd";
import { SET_TRUCK_LOCATION } from "../../actions/constants";
import {
	FullPadDropDiv,
	HalfPadDropDiv,
	PadDiv,
	PadDivHeader
} from "../../styled/magtable/TruckMapMedia";
import { useDispatch } from "react-redux";

/**
 * @date 2/20/2020
 * @author Tom Allcock, Steven Wong, Arran Woodruff
 * @module Component
 */

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
	const [{ isOver }, drop] = useDrop({
		accept: SET_TRUCK_LOCATION,
		canDrop: item => handleCanDrop(item),
		collect: monitor => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	});

	const handleCanDrop = () => {
		if (assignments.length <= 2) return false;
		return true;
	};

	/*
		todo
	const handleClearClick = equipmentID => {
		dispatch(removeTruckLocation(equipmentID));
	};
	 */

	let defaultAssignment = assignments.find(
		assignment => !assignment.parkingLocation.bay
	);

	let leftAssignment = assignments.find(
		assignment => assignment.parkingLocation.bay === parkingLocation.left
	);

	let rightAssignment = assignments.find(
		assignment => assignment.parkingLocation.bay === parkingLocation.right
	);

	// if default assignment is not null, right and left assignments should be null
	// if left or right assignment are not null, default should be null

	// if a left or right is unassigned elsewhere, we will reassign it's neighbour as default
	if (leftAssignment && !rightAssignment) {
		defaultAssignment = leftAssignment;
		leftAssignment = null;
	}

	if (!leftAssignment && rightAssignment) {
		defaultAssignment = rightAssignment;
		rightAssignment = null;
	}

	return (
		<PadDiv ref={drop}>
			<PadDivHeader>{parkingLocation.phonetic + position}</PadDivHeader>

			<FullDropDiv
				assignments={[defaultAssignment, leftAssignment, rightAssignment]}
				parkingLocation={parkingLocation}
				position={position}
			/>
			{(defaultAssignment || leftAssignment || rightAssignment) &&
				parkingLocation.left &&
				parkingLocation.right &&
				isOver && (
					<>
						<LeftHalfDropDiv
							bay={parkingLocation.left}
							assignment={leftAssignment}
							parkingLocation={parkingLocation}
							position={position}
							defaultEquipmentID={defaultAssignment?.equipment.id}
							leftAssignment={leftAssignment}
						/>
						<RightHalfDropDiv
							bay={parkingLocation.right}
							assignment={rightAssignment}
							parkingLocation={parkingLocation}
							position={position}
							defaultEquipmentID={defaultAssignment?.equipment.id}
							rightAssignment={rightAssignment}
						/>
					</>
				)}
		</PadDiv>
	);
}

function FullDropDiv({ parkingLocation, position, assignments }) {
	let [{ isOver }, drop] = useDrop({
		accept: SET_TRUCK_LOCATION,
		drop: item => ({
			position,
			parkingLocation,
			assign: {
				equipmentID: item.id,
				bay: ""
			},
			unassign: assignments.map(assignment => assignment?.equipment.id)
		}),
		canDrop: () => {
			return true;
		},
		collect: monitor => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	});

	console.log(assignments);
	return (
		<FullPadDropDiv ref={drop} hover={isOver}>
			{assignments[0] && assignments[0].equipment.id}
			{assignments[1] && assignments[1].equipment.id}
			{assignments[2] && "/" + assignments[2].equipment.id}
		</FullPadDropDiv>
	);
}

function LeftHalfDropDiv({
	bay,
	parkingLocation,
	position,
	defaultEquipmentID,
	leftAssignment
}) {
	const [{ isOver }, drop] = useDrop({
		accept: SET_TRUCK_LOCATION,
		drop: item => ({
			position,
			parkingLocation,
			reassign: {
				equipmentID: defaultEquipmentID,
				bay: parkingLocation.right
			},
			assign: {
				equipmentID: item.id,
				bay
			},
			unassign: leftAssignment && [leftAssignment.equipment.id]
		}),
		canDrop: () => true,
		collect: monitor => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	});

	return (
		<HalfPadDropDiv left hover={isOver} ref={drop}>
			{parkingLocation.left}
		</HalfPadDropDiv>
	);
}

function RightHalfDropDiv({
	bay,
	parkingLocation,
	position,
	defaultEquipmentID,
	rightAssignment
}) {
	const [{ isOver }, drop] = useDrop({
		accept: SET_TRUCK_LOCATION,
		drop: item => ({
			position,
			parkingLocation,
			reassign: {
				equipmentID: defaultEquipmentID,
				bay: parkingLocation.left
			},
			assign: {
				equipmentID: item.id,
				bay
			},
			unassign: rightAssignment && [rightAssignment.equipment.id]
		}),
		canDrop: () => true,
		collect: monitor => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	});

	return (
		<HalfPadDropDiv right hover={isOver} ref={drop}>
			{parkingLocation.right}
		</HalfPadDropDiv>
	);
}

export default ParkingLocation;
