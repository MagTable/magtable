import React from "react";
import { useDrop } from "react-dnd";
import { SET_TRUCK_LOCATION } from "../../actions/constants";
import {
	CenterAssigned,
	FullPadDropDiv,
	HalfPadDropDiv,
	LeftAssigned,
	PadDiv,
	PadDivHeader,
	RightAssigned
} from "../../styled/magtable/TruckMapMedia";
import { UnassignBtn } from "../../styled/magtable/ListContent";
import { removeTruckLocation } from "../../actions/magtable";
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
	const dispatch = useDispatch();
	const [{ isOver }, drop] = useDrop({
		accept: SET_TRUCK_LOCATION,
		collect: monitor => ({
			isOver: monitor.isOver()
		})
	});

	const handleClear = equipmentID => {
		dispatch(removeTruckLocation(equipmentID));
	};

	// assignment without bay is considered the "default"
	let defaultAssignment = assignments.find(
		assignment => !assignment.parkingLocation.bay
	);

	// assignment with a left attribute in parkingLocation is the leftAssignment,
	// same idea for rightAssignment
	let leftAssignment = assignments.find(
		assignment => assignment.parkingLocation.bay === parkingLocation.left
	);
	let rightAssignment = assignments.find(
		assignment => assignment.parkingLocation.bay === parkingLocation.right
	);

	/*
			** INFO **
		 if default assignment is not null, right and left assignments should be null
	 	 if left or right assignment are not null, default should be null
	 */

	// if a left or right is unassigned elsewhere, we will reassign it's neighbour as default
	if (leftAssignment && !rightAssignment) {
		defaultAssignment = leftAssignment;
		leftAssignment = null;
	}

	if (!leftAssignment && rightAssignment) {
		defaultAssignment = rightAssignment;
		rightAssignment = null;
	}

	const sortedAssignments = [
		defaultAssignment,
		leftAssignment,
		rightAssignment
	];

	return (
		<PadDiv ref={drop}>
			<PadDivHeader>{parkingLocation.phonetic + position}</PadDivHeader>
			<FullDropDropDiv
				assignments={sortedAssignments}
				parkingLocation={parkingLocation}
				position={position}
				handleClear={handleClear}
			/>
			{leftAssignment && (
				<LeftDragDiv
					bay={parkingLocation.left}
					assignments={sortedAssignments}
					parkingLocation={parkingLocation}
					position={position}
					defaultEquipmentID={defaultAssignment?.equipment.id}
					handleClear={handleClear}
				/>
			)}
			{rightAssignment && (
				<RightDragDiv
					assignments={sortedAssignments}
					parkingLocation={parkingLocation}
					position={position}
					handleClear={handleClear}
					bay={parkingLocation.right}
					assignment={rightAssignment}
					defaultEquipmentID={defaultAssignment?.equipment.id}
					rightAssignment={rightAssignment}
				/>
			)}
			{/* if anything is assigned and the parking location has left or right bays
			render the left and right drop divs*/}
			{defaultAssignment &&
				!leftAssignment &&
				!rightAssignment &&
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

function LeftDragDiv({
	parkingLocation,
	position,
	assignments,
	bay,
	handleClear,
	defaultEquipmentID
}) {
	const leftAssignment = assignments[1];
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
		collect: monitor => ({
			isOver: monitor.isOver()
		})
	});

	return (
		<LeftAssigned left hover={isOver} ref={drop}>
			<UnassignBtn onClick={() => handleClear(leftAssignment.equipment.id)}>
				<i className="fas fa-times" />
			</UnassignBtn>
			{leftAssignment.equipment.id}
		</LeftAssigned>
	);
}

function RightDragDiv({
	handleClear,
	parkingLocation,
	position,
	assignments,
	bay,
	defaultEquipmentID
}) {
	const rightAssignment = assignments[2];
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
		collect: monitor => ({
			isOver: monitor.isOver()
		})
	});
	return (
		<RightAssigned right hover={isOver} ref={drop}>
			<UnassignBtn onClick={() => handleClear(rightAssignment.equipment.id)}>
				<i className="fas fa-times" />
			</UnassignBtn>
			{rightAssignment.equipment.id}
		</RightAssigned>
	);
}

function FullDropDropDiv({
	parkingLocation,
	position,
	assignments,
	handleClear
}) {
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
		collect: monitor => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	});

	return (
		<FullPadDropDiv ref={drop} hover={isOver}>
			{assignments && assignments[0] && (
				<CenterAssigned>
					<UnassignBtn onClick={() => handleClear(assignments[0].equipment.id)}>
						<i className="fas fa-times" />
					</UnassignBtn>
					{assignments[0].equipment.id}
				</CenterAssigned>
			)}
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
		collect: monitor => ({
			isOver: monitor.isOver()
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
		collect: monitor => ({
			isOver: monitor.isOver()
		})
	});

	return (
		<HalfPadDropDiv right hover={isOver} ref={drop}>
			{parkingLocation.right}
		</HalfPadDropDiv>
	);
}

export default ParkingLocation;
