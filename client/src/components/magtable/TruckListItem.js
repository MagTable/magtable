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
function TruckListItem({ assignment, open, displayedTime }) {
	const dispatch = useDispatch();

	const [{ isDragging }, drag] = useDrag({
		item: { type: SET_TRUCK_LOCATION },
		end: (item, monitor) => {
			const dropResult = monitor.getDropResult();
			if (item && dropResult) {
				dispatch(
					setTruckLocation(dropResult.equipmentID, dropResult.locationID)
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
			slotID: assignment.employeeShifts.length
		}),
		canDrop: item =>
			!assignment.employeeShifts.find(shift => shift.id === item.id) &&
			assignment.employeeShifts.length < 4, // Logic to not allow more than 4 employees in a location.
		collect: monitor => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	});

	const handleCanDrop = () => {};

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
			<TruckListItemDiv style={style} ref={drag}>
				<TruckNumberDiv status={assignment.equipment.status}>
					{assignment.equipment.id}
				</TruckNumberDiv>
				<TruckInfoDiv>
					<TruckListItemEmployeeList>
						<TruckListItemEmployee
							time={"am"}
							slot={1}
							displayedTime={displayedTime}
						>
							{assignment.employeeShifts[0]?.name}
							{assignment.employeeShifts[0]?.name && (
								<button
									onClick={() => handleClick(assignment.employeeShifts[0].id)}
								>
									X
								</button>
							)}
						</TruckListItemEmployee>
						<TruckListItemEmployee
							time={"pm"}
							slot={1}
							displayedTime={displayedTime}
						>
							{assignment.employeeShifts[2]?.name}
							{assignment.employeeShifts[2]?.name && (
								<button
									onClick={() => handleClick(assignment.employeeShifts[2].id)}
								>
									X
								</button>
							)}
						</TruckListItemEmployee>
						<TruckListItemEmployee
							time={"am"}
							slot={2}
							displayedTime={displayedTime}
						>
							{assignment.employeeShifts[1]?.name}
							{assignment.employeeShifts[1]?.name && (
								<button
									onClick={() => handleClick(assignment.employeeShifts[1].id)}
								>
									X
								</button>
							)}
						</TruckListItemEmployee>

						<TruckListItemEmployee
							time={"pm"}
							slot={2}
							displayedTime={displayedTime}
						>
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
