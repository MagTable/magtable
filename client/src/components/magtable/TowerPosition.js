import React from "react";
import { TowerTitle, TowerTitleText } from "../../styled/magtable/Titling";
import { TowerPositionDiv } from "../../styled/magtable/Maps";
import { useDrop } from "react-dnd";
import { SET_EQUIPMENT_EMPLOYEE } from "../../actions/constants";
import { removeEquipmentEmployee } from "../../actions/magtable";
import { useDispatch } from "react-redux";

/**
 * @date 2020-02-19
 * @author Steven Wong
 * @module Component
 */

/**
 * @constructor
 * @param assignment
 * @returns {*} Returns the TowerPosition Component.
 */
const TowerPosition = ({ assignment }) => {
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
			equipmentSlotID: assignment.employeeShifts.length
		}),
		canDrop: item =>
			!assignment.employeeShifts.find(shift => shift?.id === item.id) &&
			assignment.employeeShifts.length < 4,
		// Logic to not allow more than 4 employees in a location.
		collect: monitor => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	});

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
			{assignment.employeeShifts.map(
				shift =>
					shift && (
						<span key={shift.id}>
							{shift.name}
							<button onClick={() => handleClick(shift.id)}>X</button>
						</span>
					)
			)}
		</TowerPositionDiv>
	);
};

export default TowerPosition;
