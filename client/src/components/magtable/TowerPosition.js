import React, { useState } from "react";
import { TowerTitle, TowerTitleText } from "../../styled/magtable/Titling";
import {
	DeleteTowerAssignmentBtn,
	TowerPositionDiv
} from "../../styled/magtable/Maps";
import { TowerPositionEmployee } from "../../styled/magtable/ListContent";
import { useDrop } from "react-dnd";
import {
	OJT_TOWER,
	SET_EQUIPMENT_EMPLOYEE,
	TOWER_POSITIONS
} from "../../actions/constants";
import { removeEquipmentEmployee } from "../../actions/magtable";
import { useDispatch } from "react-redux";
import ReactTooltip from "react-tooltip";

/**
 * @date 2/21/2020
 * @author Steven Wong, MJ Kochuk, Tom Allcock
 * @module Component
 */

/**
 *
 * @constructor
 * @param assignment
 * @param showAM
 * @returns {*} The TowerPosition component
 */
function TowerPosition({ assignment, showAM }) {
	const [hoveredShiftDescription, setHoveredShiftDescription] = useState(null);

	const dispatch = useDispatch();

	const handleClick = shiftID => {
		dispatch(removeEquipmentEmployee(assignment.equipment.id, shiftID));
	};

	/*
	 * Drop component that accepts only SET_EQUIPMENT_EMPLOYEE draggables.
	 */
	const [{ canDrop, isOver }, drop] = useDrop({
		accept: SET_EQUIPMENT_EMPLOYEE,
		drop: () => ({
			equipmentID: assignment.equipment.id,
			equipmentSlotID: nextOpenSlot()
		}),
		canDrop: item => {
			setHoveredShiftDescription(item.shiftDescription);
			return handleCanDrop(item);
		},
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

	function getOutline(index) {
		if (index !== nextOpenSlot()) return null;

		if (isOver && !canDrop) return "danger";

		// if hovered shift is OJT and placed in a primary slot
		if (
			isOver &&
			canDrop &&
			hoveredShiftDescription === OJT_TOWER &&
			(index === 0 || index === 2)
		)
			return "warning";

		// if the hovered shift's description isn't contained in the array of tower
		// positions, set a warning border
		if (isOver && canDrop && !TOWER_POSITIONS.includes(hoveredShiftDescription))
			return "warning";

		if (isOver && canDrop) return "success";
	}

	function ojtWarn(index) {
		if (
			assignment.employeeShifts[index]?.description === OJT_TOWER &&
			!assignment.employeeShifts[index + 1]
		) {
			return true;
		}

		if (
			assignment.employeeShifts[index]?.description === OJT_TOWER &&
			assignment.employeeShifts[index + 1]?.description === OJT_TOWER
		) {
			return true;
		}

		return false;
	}

	return (
		<TowerPositionDiv ref={drop}>
			<TowerTitle>
				<TowerTitleText>{assignment.equipment.position}</TowerTitleText>
			</TowerTitle>
			<TowerPositionEmployee slot={1} showAM={showAM} outline={getOutline(0)}>
				{assignment.employeeShifts[0]?.name}
				{ojtWarn(0) && (
					<>
						<i
							className={"fas fa-exclamation-triangle"}
							style={{ color: "orange" }}
							data-tip={"OJT Requires Qualified Secondary"}
						/>
						<ReactTooltip
							place="top"
							type="dark"
							effect="solid"
							delayShow={200}
						/>
					</>
				)}
				{assignment.employeeShifts[0]?.name &&
					!assignment.employeeShifts[1] && (
						<DeleteTowerAssignmentBtn
							onClick={() => handleClick(assignment.employeeShifts[0].id)}
						>
							X
						</DeleteTowerAssignmentBtn>
					)}
			</TowerPositionEmployee>
			<TowerPositionEmployee slot={1} showAM={!showAM} outline={getOutline(2)}>
				{assignment.employeeShifts[2]?.name}
				{ojtWarn(2) && (
					<>
						<i
							className="fas fa-exclamation-triangle"
							style={{ color: "orange" }}
							data-tip={"OJT Requires Qualified Secondary"}
						/>
						<ReactTooltip
							place="top"
							type="dark"
							effect="solid"
							delayShow={200}
						/>
					</>
				)}
				{assignment.employeeShifts[2]?.name &&
					!assignment.employeeShifts[3] && (
						<DeleteTowerAssignmentBtn
							onClick={() => handleClick(assignment.employeeShifts[2].id)}
						>
							X
						</DeleteTowerAssignmentBtn>
					)}
			</TowerPositionEmployee>
			<TowerPositionEmployee slot={2} showAM={showAM} outline={getOutline(1)}>
				{assignment.employeeShifts[1]?.name}
				{assignment.employeeShifts[1]?.name && (
					<DeleteTowerAssignmentBtn
						onClick={() => handleClick(assignment.employeeShifts[1].id)}
					>
						X
					</DeleteTowerAssignmentBtn>
				)}
			</TowerPositionEmployee>
			<TowerPositionEmployee slot={2} showAM={!showAM} outline={getOutline(3)}>
				{assignment.employeeShifts[3]?.name}
				{assignment.employeeShifts[3]?.name && (
					<DeleteTowerAssignmentBtn
						onClick={() => handleClick(assignment.employeeShifts[3].id)}
					>
						X
					</DeleteTowerAssignmentBtn>
				)}
			</TowerPositionEmployee>
		</TowerPositionDiv>
	);
}

export default TowerPosition;
