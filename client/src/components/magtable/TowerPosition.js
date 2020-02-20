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

	const handleClick = e => {
		dispatch(
			removeEquipmentEmployee(assignment.equipment.id, parseInt(e.target.value))
		);
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
		canDrop: () => assignment.employeeShifts.length < 4, // Logic to not allow more than 4 employees in a location.
		collect: monitor => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop
		})
	});

	const isActive = canDrop && isOver;
	const style = isActive ? { border: "2px solid red" } : null;

	return (
		<TowerPositionDiv style={style} ref={drop}>
			<TowerTitle>
				<TowerTitleText>{assignment.equipment.position}</TowerTitleText>
			</TowerTitle>
			{assignment.employeeShifts.map(shift => (
				<span key={shift.id}>
					{shift.name}
					<button value={shift.id} onClick={handleClick}>
						X
					</button>
				</span>
			))}
		</TowerPositionDiv>
	);
};

export default TowerPosition;
