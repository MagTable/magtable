import React, { useState } from "react";
import { TowerTitle, TowerTitleText } from "../../styled/magtable/Titling";
import { TowerPositionDiv } from "../../styled/magtable/Maps";
import {
	EquipmentListItemEmployee,
	EquipmentListItemEmployeeName,
	EquipmentListItemEmployeeWarning,
	EquipmentListItemEmployeeClearButton,
	EquipmentListItemButton
} from "../../styled/magtable/ListContent";
import { useDrop } from "react-dnd";
import {
	DANGER,
	MANAGEMENT_POSITIONS,
	MECHANIC,
	OJT_TOWER,
	SET_EQUIPMENT_EMPLOYEE,
	SUCCESS,
	TOWER_POSITIONS,
	TECHNICIAN_POSITIONS,
	WARNING
} from "../../actions/constants";
import { removeEquipmentEmployee } from "../../actions/magtable";
import { useDispatch } from "react-redux";
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
 * @param showAM
 * @returns {*} The TowerListItem component
 */
function TowerListItem({ assignment, showAM }) {
	const [hoveredShiftDescription, setHoveredShiftDescription] = useState(null);
	const dispatch = useDispatch();

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

	const handleClear = shiftID => {
		dispatch(removeEquipmentEmployee(assignment.equipment.id, shiftID));
	};

	function getOutline(index) {
		if (index !== nextOpenSlot()) return null;

		// if can't drop, danger
		if (isOver && !canDrop) return DANGER;

		// if hovered shift is OJT and placed in a primary slot
		if (
			isOver &&
			canDrop &&
			hoveredShiftDescription === OJT_TOWER &&
			(index === 0 || index === 2)
		)
			return WARNING;

		// if hovered shift is not included in technician positions
		if (isOver && canDrop && !TOWER_POSITIONS.includes(hoveredShiftDescription))
			return WARNING;

		if (isOver && canDrop) return SUCCESS;
	}

	function getAssignmentWarning(index) {
		if (
			TECHNICIAN_POSITIONS.includes(
				assignment.employeeShifts[index]?.description
			)
		) {
			return "Truck Staff Assigned to Tower";
		}

		if (
			MANAGEMENT_POSITIONS.includes(
				assignment.employeeShifts[index]?.description
			)
		) {
			return "Management Assigned to Tower";
		}

		if (MECHANIC.includes(assignment.employeeShifts[index]?.description)) {
			return "Mechanic Assigned to Tower";
		}

		/* if OJT-Tower is assigned to primary without a secondary */
		if (
			(index === 0 || index === 2) &&
			assignment.employeeShifts[index]?.description === OJT_TOWER &&
			!assignment.employeeShifts[index + 1]
		) {
			return "OJT Requires Qualified Secondary";
		}

		if (
			(index === 0 || index === 2) &&
			assignment.employeeShifts[index]?.description === OJT_TOWER &&
			assignment.employeeShifts[index + 1]?.description === OJT_TOWER
		) {
			return "OJT Requires Qualified Secondary";
		}

		return null;
	}

	const employeeShifts = [
		{
			assignmentIndex: 0,
			shift: assignment.employeeShifts[0],
			slot: 1,
			show: showAM,
			canClear: assignment.employeeShifts[0] && !assignment.employeeShifts[1]
		},
		{
			assignmentIndex: 1,
			shift: assignment.employeeShifts[1],
			slot: 2,
			show: showAM,
			canClear: assignment.employeeShifts[1]
		},
		{
			assignmentIndex: 2,
			shift: assignment.employeeShifts[2],
			slot: 1,
			show: !showAM,
			canClear: assignment.employeeShifts[2] && !assignment.employeeShifts[3]
		},
		{
			assignmentIndex: 3,
			shift: assignment.employeeShifts[3],
			slot: 2,
			show: !showAM,
			canClear: assignment.employeeShifts[3]
		}
	];

	return (
		<TowerPositionDiv ref={drop}>
			<TowerTitle>
				<TowerTitleText>{assignment.equipment.position}</TowerTitleText>
			</TowerTitle>
			{employeeShifts.map(elem => (
				<EquipmentListItemEmployee
					key={elem.assignmentIndex}
					slot={elem.slot}
					show={elem.show}
					outlineType={getOutline(elem.assignmentIndex)}
					warningBackground={getAssignmentWarning(elem.assignmentIndex)}
				>
					<EquipmentListItemEmployeeName>
						{elem.shift?.name}
					</EquipmentListItemEmployeeName>
					<EquipmentListItemEmployeeWarning>
						{getAssignmentWarning(elem.assignmentIndex) && (
							<IconButton
								faClassName={"fa-exclamation-triangle"}
								color={"var(--context-orange)"}
								outlineType={"darkorange"}
								toolTip={getAssignmentWarning(elem.assignmentIndex)}
							/>
						)}
					</EquipmentListItemEmployeeWarning>
					<EquipmentListItemEmployeeClearButton>
						{elem.shift && (
							<EquipmentListItemButton
								disabled={!elem.canClear}
								onClick={() => elem.canClear && handleClear(elem.shift.id)}
							>
								<i className="fas fa-times" />
							</EquipmentListItemButton>
						)}
					</EquipmentListItemEmployeeClearButton>
				</EquipmentListItemEmployee>
			))}
		</TowerPositionDiv>
	);
}

export default React.memo(TowerListItem);
