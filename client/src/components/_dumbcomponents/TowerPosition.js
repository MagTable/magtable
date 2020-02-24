import React from "react";
import { TowerTitle, TowerTitleText } from "../../styled/magtable/Titling";
import {
	AssignedEmployeeDiv,
	AssignedEmployeeName,
	DeleteTowerAssignmentBtn,
	TowerAssignmentWrapper,
	TowerPositionDiv
} from "../../styled/magtable/Maps";
import { TowerPositionEmployee } from "../../styled/magtable/ListContent";
import { useDrop } from "react-dnd";
import { AM, PM, SET_EQUIPMENT_EMPLOYEE } from "../../actions/constants";
import { removeEquipmentEmployee } from "../../actions/magtable";
import { useDispatch } from "react-redux";
import { Button } from "../../styled/common/FormControl";
import IconButton from "../common/IconButton";

/**
 * @date 2/21/2020
 * @author Steven Wong, MJ Kochuk, Tom Allcock
 * @module Component
 */

/**
 *
 * @constructor
 * @param assignment
 * @returns {*} The TowerPosition component
 */
function TowerPosition({ assignment, showAM }) {
	const dispatch = useDispatch();

	const handleClick = shiftID => {
		dispatch(removeEquipmentEmployee(assignment.equipment.id, shiftID));
	};

	/**
	 * Drop component that accepts only SET_EQUIPMENT_EMPLOYEE draggables.
	 */
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

	return (
		<TowerPositionDiv style={style} ref={drop}>
			<TowerTitle>
				<TowerTitleText>{assignment.equipment.position}</TowerTitleText>
			</TowerTitle>
			<TowerPositionEmployee time={true} slot={1} showAM={showAM}>
				{assignment.employeeShifts[0]?.name}
				{assignment.employeeShifts[0]?.name && (
					<button onClick={() => handleClick(assignment.employeeShifts[0].id)}>
						X
					</button>
				)}
			</TowerPositionEmployee>
			<TowerPositionEmployee time={false} slot={1} showAM={showAM}>
				{assignment.employeeShifts[2]?.name}
				{assignment.employeeShifts[2]?.name && (
					<button onClick={() => handleClick(assignment.employeeShifts[2].id)}>
						X
					</button>
				)}
			</TowerPositionEmployee>
			<TowerPositionEmployee time={true} slot={2} showAM={showAM}>
				{assignment.employeeShifts[1]?.name}
				{assignment.employeeShifts[1]?.name && (
					<button onClick={() => handleClick(assignment.employeeShifts[1].id)}>
						X
					</button>
				)}
			</TowerPositionEmployee>
			<TowerPositionEmployee time={false} slot={2} showAM={showAM}>
				{assignment.employeeShifts[3]?.name}
				{assignment.employeeShifts[3]?.name && (
					<button onClick={() => handleClick(assignment.employeeShifts[3].id)}>
						X
					</button>
				)}
			</TowerPositionEmployee>
		</TowerPositionDiv>
	);

	// return (
	// 	<TowerPositionDiv style={style} ref={drop}>
	// 		<TowerTitle>
	// 			<TowerTitleText>{assignment.equipment.position}</TowerTitleText>
	// 		</TowerTitle>
	// 		<TowerPositionEmployee time={"am"} slot={1} showAM={showAM}>
	// 			{assignment.employeeShifts[0]?.name}
	// 			{assignment.employeeShifts[0]?.name && (
	// 				<button onClick={() => handleClick(assignment.employeeShifts[0].id)}>
	// 					X
	// 				</button>
	// 			)}
	// 		</TowerPositionEmployee>
	// 		<TowerPositionEmployee time={"pm"} slot={1} showAM={showAM}>
	// 			{assignment.employeeShifts[2]?.name}
	// 			{assignment.employeeShifts[2]?.name && (
	// 				<button onClick={() => handleClick(assignment.employeeShifts[2].id)}>
	// 					X
	// 				</button>
	// 			)}
	// 		</TowerPositionEmployee>
	// 		<TowerPositionEmployee time={"am"} slot={2} showAM={showAM}>
	// 			{assignment.employeeShifts[1]?.name}
	// 			{assignment.employeeShifts[1]?.name && (
	// 				<button onClick={() => handleClick(assignment.employeeShifts[1].id)}>
	// 					X
	// 				</button>
	// 			)}
	// 		</TowerPositionEmployee>
	// 		<TowerPositionEmployee time={"pm"} slot={2} showAM={showAM}>
	// 			{assignment.employeeShifts[3]?.name}
	// 			{assignment.employeeShifts[3]?.name && (
	// 				<button onClick={() => handleClick(assignment.employeeShifts[3].id)}>
	// 					X
	// 				</button>
	// 			)}
	// 		</TowerPositionEmployee>
	// 	</TowerPositionDiv>
	// );
}

export default TowerPosition;
