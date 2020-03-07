import React from "react";
import { useDrag, useDrop } from "react-dnd";
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
import { removeTruckLocation, setTruckLocation } from "../../actions/magtable";
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
					parkingLocation={parkingLocation}
					position={position}
					bay={parkingLocation.left}
					assignments={sortedAssignments}
					defaultEquipmentID={defaultAssignment?.equipment.id}
					handleClear={handleClear}
				/>
			)}
			{rightAssignment && (
				<RightDragDiv
					parkingLocation={parkingLocation}
					position={position}
					bay={parkingLocation.right}
					assignments={sortedAssignments}
					defaultEquipmentID={defaultAssignment?.equipment.id}
					handleClear={handleClear}
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
							parkingLocation={parkingLocation}
							position={position}
							defaultEquipmentID={defaultAssignment?.equipment.id}
							assignments={assignments}
						/>
						<RightHalfDropDiv
							bay={parkingLocation.right}
							parkingLocation={parkingLocation}
							position={position}
							defaultEquipmentID={defaultAssignment?.equipment.id}
							assignments={assignments}
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
	const rightAssignment = assignments[2];
	const dispatch = useDispatch();
	const [{ isDragging }, drag] = useDrag({
		item: {
			type: SET_TRUCK_LOCATION,
			id: leftAssignment.equipment.id,
			toReassign: {
				equipmentID: rightAssignment.equipment.id,
				parkingLocation,
				position
			}
		},
		end: (item, monitor) => {
			const dropResult = monitor.getDropResult();
			if (item && dropResult) {
				if (dropResult.assign) {
					dispatch(
						setTruckLocation(
							dropResult.parkingLocation,
							dropResult.position,
							dropResult.assign.equipmentID,
							dropResult.assign.bay
						)
					);
				}
				if (dropResult.reassign) {
					dispatch(
						setTruckLocation(
							dropResult.reassign.parkingLocation,
							dropResult.reassign.position,
							dropResult.reassign.equipmentID,
							dropResult.reassign.bay
						)
					);
				}
				if (dropResult.unassign) {
					dropResult.unassign.forEach(
						id => id && dispatch(removeTruckLocation(id))
					);
				}
			}
		},
		collect: monitor => ({
			isDragging: !!monitor.isDragging()
		})
	});

	const [{ isOver }, drop] = useDrop({
		accept: SET_TRUCK_LOCATION,
		drop: item => {
			console.log(item);

			const toReassign = item.toReassign
				? {
						equipmentID: item.toReassign.equipmentID,
						parkingLocation: item.toReassign.parkingLocation,
						position: item.toReassign.position,
						bay: ""
				  }
				: {
						equipmentID: defaultEquipmentID,
						parkingLocation,
						position,
						bay: parkingLocation.right
				  };
			console.log(toReassign);

			return {
				position,
				parkingLocation,
				reassign: toReassign,
				assign: {
					equipmentID: item.id,
					bay
				},
				unassign: leftAssignment && [leftAssignment.equipment.id]
			};
		},
		collect: monitor => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	});

	return (
		<LeftAssigned left hover={isOver} ref={drop} isDragging={isDragging}>
			<UnassignBtn onClick={() => handleClear(leftAssignment.equipment.id)}>
				<i className="fas fa-times" />
			</UnassignBtn>
			<div ref={drag}>{leftAssignment.equipment.id}</div>
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
	const leftAssignment = assignments[1];
	const rightAssignment = assignments[2];
	const dispatch = useDispatch();
	const [{ isDragging }, drag] = useDrag({
		item: {
			type: SET_TRUCK_LOCATION,
			id: rightAssignment.equipment.id,
			toReassign: {
				equipmentID: leftAssignment.equipment.id,
				parkingLocation,
				position
			}
		},
		end: (item, monitor) => {
			const dropResult = monitor.getDropResult();
			if (item && dropResult) {
				if (dropResult.assign) {
					dispatch(
						setTruckLocation(
							dropResult.parkingLocation,
							dropResult.position,
							dropResult.assign.equipmentID,
							dropResult.assign.bay
						)
					);
				}
				if (dropResult.reassign) {
					dispatch(
						setTruckLocation(
							dropResult.reassign.parkingLocation,
							dropResult.reassign.position,
							dropResult.reassign.equipmentID,
							dropResult.reassign.bay
						)
					);
				}
				if (dropResult.unassign) {
					dropResult.unassign.forEach(
						id => id && dispatch(removeTruckLocation(id))
					);
				}
			}
		},
		collect: monitor => ({
			isDragging: !!monitor.isDragging()
		})
	});

	const [{ isOver, canDrop }, drop] = useDrop({
		accept: SET_TRUCK_LOCATION,
		drop: item => {
			console.log(item);
			const toReassign = item.toReassign
				? {
						equipmentID: item.toReassign.equipmentID,
						parkingLocation: item.toReassign.parkingLocation,
						position: item.toReassign.position,
						bay: ""
				  }
				: {
						equipmentID: defaultEquipmentID,
						parkingLocation,
						position,
						bay: parkingLocation.left
				  };
			console.log(toReassign);
			return {
				position,
				parkingLocation,
				reassign: toReassign,
				assign: {
					equipmentID: item.id,
					bay
				},
				unassign: rightAssignment && [rightAssignment.equipment.id]
			};
		},
		canDrop: item => {
			return assignments.forEach(assignment => {
				if (item.equipmentID === assignment?.equipment.id) return false;
			});
		},
		collect: monitor => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	});
	return (
		<RightAssigned
			right
			hover={isOver}
			ref={drop}
			canDrop={canDrop}
			isDragging={isDragging}
		>
			<UnassignBtn onClick={() => handleClear(rightAssignment.equipment.id)}>
				<i className="fas fa-times" />
			</UnassignBtn>
			<div ref={drag}>{rightAssignment.equipment.id}</div>
		</RightAssigned>
	);
}

function FullDropDropDiv({
	parkingLocation,
	position,
	assignments,
	handleClear
}) {
	const dispatch = useDispatch();
	const defaultAssignment = assignments[0];
	const leftAssignment = assignments[1];
	const rightAssignment = assignments[2];
	const [{ isDragging }, drag] = useDrag({
		item: { type: SET_TRUCK_LOCATION, id: assignments[0]?.equipment.id },
		end: (item, monitor) => {
			const dropResult = monitor.getDropResult();
			if (item && dropResult) {
				if (dropResult.assign) {
					dispatch(
						setTruckLocation(
							dropResult.parkingLocation,
							dropResult.position,
							dropResult.assign.equipmentID,
							dropResult.assign.bay
						)
					);
				}
				if (dropResult.reassign) {
					dispatch(
						setTruckLocation(
							dropResult.reassign.parkingLocation,
							dropResult.reassign.position,
							dropResult.reassign.equipmentID,
							dropResult.reassign.bay
						)
					);
				}
				if (dropResult.unassign) {
					dropResult.unassign.forEach(
						id => id && dispatch(removeTruckLocation(id))
					);
				}
			}
		},
		collect: monitor => ({
			isDragging: !!monitor.isDragging()
		})
	});

	const [{ isOver, canDrop }, drop] = useDrop({
		accept: SET_TRUCK_LOCATION,
		drop: item => {
			console.log(item);
			const toReassign = item.toReassign
				? {
						equipmentID: item.toReassign.equipmentID,
						parkingLocation: item.toReassign.parkingLocation,
						position: item.toReassign.position,
						bay: ""
				  }
				: {
						equipmentID: defaultAssignment?.equipment.id,
						parkingLocation,
						position,
						bay: parkingLocation.left
				  };
			console.log(toReassign);
			return {
				position,
				parkingLocation,
				reassign: toReassign,
				assign: {
					equipmentID: item.id,
					bay: ""
				},
				unassign: [defaultAssignment?.equipment.id]
			};
		},
		canDrop: item => {
			return item.id !== assignments[0]?.equipment.id;
		},
		collect: monitor => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	});

	return (
		<FullPadDropDiv ref={drop} hover={isOver} canDrop={canDrop}>
			{assignments && assignments[0] && (
				<CenterAssigned isDragging={isDragging}>
					<UnassignBtn onClick={() => handleClear(assignments[0].equipment.id)}>
						<i className="fas fa-times" />
					</UnassignBtn>
					<div ref={drag}>{assignments[0].equipment.id}</div>
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
	assignments
}) {
	const leftAssignment = assignments[1];
	const rightAssignment = assignments[2];

	const [{ isOver, canDrop }, drop] = useDrop({
		accept: SET_TRUCK_LOCATION,
		drop: item => {
			console.log(item);
			const toReassign = item.toReassign
				? {
						equipmentID: item.toReassign.equipmentID,
						parkingLocation: item.toReassign.parkingLocation,
						position: item.toReassign.position,
						bay: ""
				  }
				: {
						equipmentID: defaultEquipmentID,
						parkingLocation,
						position,
						bay: parkingLocation.left
				  };
			console.log(toReassign);
			return {
				position,
				parkingLocation,
				reassign: toReassign,
				assign: {
					equipmentID: item.id,
					bay
				},
				unassign: rightAssignment && [rightAssignment.equipment.id]
			};
		},
		canDrop: item => {
			return item.id !== defaultEquipmentID;
		},
		collect: monitor => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	});

	return (
		<HalfPadDropDiv left hover={isOver} ref={drop} canDrop={canDrop}>
			{parkingLocation.left}
		</HalfPadDropDiv>
	);
}

function RightHalfDropDiv({
	bay,
	parkingLocation,
	position,
	defaultEquipmentID,
	assignments
}) {
	const leftAssignment = assignments[1];
	const rightAssignment = assignments[2];

	const [{ isOver, canDrop }, drop] = useDrop({
		accept: SET_TRUCK_LOCATION,
		drop: item => {
			console.log(item);
			const toReassign = item.toReassign
				? {
						equipmentID: item.toReassign.equipmentID,
						parkingLocation: item.toReassign.parkingLocation,
						position: item.toReassign.position,
						bay: ""
				  }
				: {
						equipmentID: defaultEquipmentID,
						parkingLocation,
						position,
						bay: parkingLocation.left
				  };
			console.log(toReassign);
			return {
				position,
				parkingLocation,
				reassign: toReassign,
				assign: {
					equipmentID: item.id,
					bay
				},
				unassign: rightAssignment && [rightAssignment.equipment.id]
			};
		},
		canDrop: item => {
			return item.id !== defaultEquipmentID;
		},
		collect: monitor => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	});

	return (
		<HalfPadDropDiv right hover={isOver} canDrop={canDrop} ref={drop}>
			{parkingLocation.right}
		</HalfPadDropDiv>
	);
}

export default ParkingLocation;
