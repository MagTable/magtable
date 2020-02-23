import React from "react";
import {
	TruckInfoDiv,
	TruckListItemDiv,
	TruckListItemEmployee,
	TruckListItemEmployeeList,
	TruckListItemLocation,
	TruckNumberDiv,
	TruckProblemsDiv,
	TruckProblemsText
} from "../../styled/magtable/ListContent";
import { useDrop, useDrag } from "react-dnd";
import {
	AM,
	PM,
	SET_EQUIPMENT_EMPLOYEE,
	SET_TRUCK_LOCATION
} from "../../actions/constants";
import { useDispatch } from "react-redux";
import {
	removeEquipmentEmployee,
	setTruckLocation
} from "../../actions/magtable";

/**
 * @date 2020-02-17
 * @author MJ Kochuk, Steven Wong, Arran Woodruff
 * @module Component
 */

/**
 *
 * @constructor
 * @param props
 * @returns {*} The TruckListItem component
 */
function TruckListItem({ assignment, open, showAM }) {
	const dispatch = useDispatch();

	const [{ isDragging }, drag] = useDrag({
		item: { type: SET_TRUCK_LOCATION },
		end: (item, monitor) => {
			const dropResult = monitor.getDropResult();
			if (item && dropResult) {
				dispatch(
					setTruckLocation(assignment.equipment.id, dropResult.locationID)
				);
			}
		},
		collect: monitor => ({
			isDragging: !!monitor.isDragging()
		})
	});

	const [{ canDrop, isOver }, drop] = useDrop({
		accept: SET_EQUIPMENT_EMPLOYEE,
		drop: () => ({
			equipmentID: assignment.equipment.id,
			equipmentSlotID: nextOpenSlot()
		}),
		canDrop: item => handleCanDrop(item),
		collect: monitor => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	});

	const nextOpenSlot = () => {
		if (showAM === true) {
			// if we're showing AM, if the [0] slot is taken, fill in [1], otherwise fill in [0]
			return assignment.employeeShifts[0] ? 1 : 0;
		}
		if (showAM === false) {
			// if we're showing PM, if the [2] slot is taken, fill in [3], otherwise fill in [2]
			return assignment.employeeShifts[2] ? 3 : 2;
		}
	};

	const handleCanDrop = item => {
		// Logic to not allow more than 4 employees in a location.
		if (!assignment.employeeShifts.includes(null)) return false;
		// make sure the employee isn't already assigned here
		if (assignment.employeeShifts.find(shift => shift?.id === item.id))
			return false;

		if (showAM === true) {
			return !assignment.employeeShifts[1];
		}
		if (showAM === false) {
			return !assignment.employeeShifts[3];
		}
	};

	const dangerStyle = { border: "2px solid red" };
	const successStyle = { border: "2px solid green" };

	let style = {};
	if (isOver && canDrop) style = successStyle;
	if (isOver && !canDrop) style = dangerStyle;

	const handleClick = shiftID => {
		dispatch(removeEquipmentEmployee(assignment.equipment.id, shiftID));
	};

	return (
		<div ref={drop}>
			<TruckListItemDiv
				style={style}
				ref={drag}
				assignment={assignment.equipment.id}
			>
				<TruckNumberDiv status={assignment.equipment.status}>
					{assignment.equipment.id}
				</TruckNumberDiv>
				<TruckInfoDiv>
					<TruckListItemEmployeeList>
						<TruckListItemEmployee time={true} slot={1} showAM={showAM}>
							{assignment.employeeShifts[0]?.name}
							{assignment.employeeShifts[0]?.name && (
								<button
									onClick={() => handleClick(assignment.employeeShifts[0].id)}
								>
									X
								</button>
							)}
						</TruckListItemEmployee>
						<TruckListItemEmployee time={false} slot={1} showAM={showAM}>
							{assignment.employeeShifts[2]?.name}
							{assignment.employeeShifts[2]?.name && (
								<button
									onClick={() => handleClick(assignment.employeeShifts[2].id)}
								>
									X
								</button>
							)}
						</TruckListItemEmployee>
						<TruckListItemEmployee time={true} slot={2} showAM={showAM}>
							{assignment.employeeShifts[1]?.name}
							{assignment.employeeShifts[1]?.name && (
								<button
									onClick={() => handleClick(assignment.employeeShifts[1].id)}
								>
									X
								</button>
							)}
						</TruckListItemEmployee>

						<TruckListItemEmployee time={false} slot={2} showAM={showAM}>
							{assignment.employeeShifts[3]?.name}
							{assignment.employeeShifts[3]?.name && (
								<button
									onClick={() => handleClick(assignment.employeeShifts[3].id)}
								>
									X
								</button>
							)}
						</TruckListItemEmployee>
					</TruckListItemEmployeeList>
					<TruckListItemLocation>{assignment.location}</TruckListItemLocation>
				</TruckInfoDiv>
			</TruckListItemDiv>
			<TruckProblemsDiv open={open}>
				{assignment.equipment.notice == +"" ? null : (
					<TruckProblemsText>{assignment.equipment.notice}</TruckProblemsText>
				)}
			</TruckProblemsDiv>
		</div>
	);
}

export default TruckListItem;
