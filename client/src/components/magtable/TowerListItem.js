import React, { useEffect, useState } from "react";
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
	WARNING,
	AM,
	PM
} from "../../actions/constants";
import { removeEquipmentEmployee } from "../../actions/magtable";
import { useDispatch } from "react-redux";
import IconButton from "../common/IconButton";

/**
 * @date 2/21/2020
 * @author Steven Wong, MJ Kochuk, Tom Allcock
 * @category Components/MagTable
 * @constructor
 * @param assignment The assignment for the Tower
 * @param showAM The state of showAM
 * @returns {*} The TowerListItem component
 */
function TowerListItem({ assignment, showAM }) {
	const [hoveredShiftDescription, setHoveredShiftDescription] = useState(null);
	const [shifts, setShifts] = useState({});
	const { amPrimary, amSecondary, pmPrimary, pmSecondary } = shifts;

	const dispatch = useDispatch();

	useEffect(() => {
		const amPrimary = assignment.employeeShifts.find(
			shift => shift.timeOfDay === AM && shift.isPrimary
		);
		const amSecondary = assignment.employeeShifts.find(
			shift => shift.timeOfDay === AM && !shift.isPrimary
		);

		const pmPrimary = assignment.employeeShifts.find(
			shift => shift.timeOfDay === PM && shift.isPrimary
		);
		const pmSecondary = assignment.employeeShifts.find(
			shift => shift.timeOfDay === PM && !shift.isPrimary
		);

		setShifts({ amPrimary, amSecondary, pmPrimary, pmSecondary });
	}, [assignment]);

	/*
	 * Drop component that accepts only SET_EQUIPMENT_EMPLOYEE draggables.
	 */
	const [{ canDrop, isOver }, drop] = useDrop({
		accept: SET_EQUIPMENT_EMPLOYEE,
		drop: () => ({
			equipmentID: assignment.equipment.id,
			newShiftAttributes: newShiftAttributes()
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

	const newShiftAttributes = () => {
		const newShiftAttributes = {};

		newShiftAttributes.timeOfDay = showAM ? AM : PM;

		if (showAM) {
			newShiftAttributes.isPrimary = !amPrimary;
		} else {
			// PM case
			newShiftAttributes.isPrimary = !pmPrimary;
		}

		return newShiftAttributes;
	};

	const handleCanDrop = item => {
		// Logic to not allow more than 4 employees in a location.
		if (assignment.employeeShifts.length >= 4) return false;

		// make sure the employee isn't already assigned here
		if (assignment.employeeShifts.find(shift => shift?.id === item.id))
			return false;

		// if AM secondary slot is filled, then AM is full
		if (showAM === true) {
			return !amSecondary;
		}

		// if PM secondary slot is filled, then PM is full
		if (showAM === false) {
			return !pmSecondary;
		}
	};

	const handleClear = shiftID => {
		dispatch(removeEquipmentEmployee(assignment.equipment.id, shiftID));
	};

	// Outline for dropping
	function getOutline(index) {
		const primaryDrop = index % 2 === 0; // even indexes are primaries
		if (primaryDrop !== newShiftAttributes().isPrimary) return null;

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

	// Assignment Warnings
	function setAssignmentWarnings() {
		Object.values(shifts).forEach(shift => {
			if (!shift) return;

			if (TECHNICIAN_POSITIONS.includes(shift.description)) {
				shift.warning = "Technician Assigned to Tower";
				return;
			}

			if (MANAGEMENT_POSITIONS.includes(shift.description)) {
				shift.warning = "Management Assigned to Tower";
				return;
			}
			if (shift.description === MECHANIC) {
				shift.warning = "Mechanic Assigned to Tower";
				return;
			}

			const isPrimary = shift.isPrimary;
			const isUnqualified = shift.description === OJT_TOWER;
			let noSecondary;
			let unqualifiedSecondary;

			// set time of day-dependent booleans
			if (shift.timeOfDay === AM) {
				noSecondary = !amSecondary;
				unqualifiedSecondary =
					!TOWER_POSITIONS.includes(amSecondary?.description) &&
					amSecondary?.description !== OJT_TOWER;
			} else {
				noSecondary = !pmSecondary;
				unqualifiedSecondary =
					!TOWER_POSITIONS.includes(pmSecondary?.description) &&
					amSecondary?.description !== OJT_TOWER;
			}

			// final boolean expression to determine OJT warning
			if (isPrimary && isUnqualified && (noSecondary || unqualifiedSecondary)) {
				shift.warning = "OJT Tower Requires Qualified Secondary";
				return;
			}

			// if no warning, clear warning attribute
			shift.warning = null;
		});
	}
	setAssignmentWarnings();

	// Checking if we can clear the assignment
	function setCanClear() {
		Object.values(shifts).forEach(shift => {
			if (!shift) return;

			if (showAM) {
				shift.canClear = (shift.isPrimary && !amSecondary) || !shift.isPrimary;
			} else {
				shift.canClear = (shift.isPrimary && !pmSecondary) || !shift.isPrimary;
			}
		});
	}
	setCanClear();

	const currentPrimary = showAM ? amPrimary : pmPrimary;
	const currentSecondary = showAM ? amSecondary : pmSecondary;

	return (
		<TowerPositionDiv ref={drop}>
			<TowerTitle>
				<TowerTitleText>{assignment.equipment.type}</TowerTitleText>
			</TowerTitle>
			{/* PRIMARY */}
			<EquipmentListItemEmployee outlineType={getOutline(0)}>
				<EquipmentListItemEmployeeName show={showAM} offPosition={150}>
					{amPrimary?.name}
				</EquipmentListItemEmployeeName>
				<EquipmentListItemEmployeeName show={!showAM} offPosition={-150}>
					{pmPrimary?.name}
				</EquipmentListItemEmployeeName>
				<EquipmentListItemEmployeeWarning>
					{currentPrimary?.warning && (
						<IconButton
							faClassName={"fa-exclamation-triangle"}
							color={"orange"}
							outlineType={"darkorange"}
							toolTip={currentPrimary?.warning}
						/>
					)}
				</EquipmentListItemEmployeeWarning>
				{currentPrimary && (
					<EquipmentListItemEmployeeClearButton>
						<EquipmentListItemButton
							disabled={!currentPrimary.canClear}
							onClick={() => handleClear(currentPrimary.id)}
						>
							<i className="fas fa-times" />
						</EquipmentListItemButton>
					</EquipmentListItemEmployeeClearButton>
				)}
			</EquipmentListItemEmployee>
			{/* SECONDARY */}
			<EquipmentListItemEmployee darken outlineType={getOutline(1)}>
				<EquipmentListItemEmployeeName show={showAM} offPosition={150}>
					{amSecondary?.name}
				</EquipmentListItemEmployeeName>
				<EquipmentListItemEmployeeName show={!showAM} offPosition={-150}>
					{pmSecondary?.name}
				</EquipmentListItemEmployeeName>
				<EquipmentListItemEmployeeWarning>
					{currentSecondary?.warning && (
						<IconButton
							faClassName={"fa-exclamation-triangle"}
							color={"orange"}
							outlineType={"darkorange"}
							toolTip={currentSecondary?.warning}
						/>
					)}
				</EquipmentListItemEmployeeWarning>
				{currentSecondary && (
					<EquipmentListItemEmployeeClearButton>
						<EquipmentListItemButton
							disabled={!currentSecondary.canClear}
							onClick={() => handleClear(currentSecondary.id)}
						>
							<i className="fas fa-times" />
						</EquipmentListItemButton>
					</EquipmentListItemEmployeeClearButton>
				)}
			</EquipmentListItemEmployee>
		</TowerPositionDiv>
	);
}

export default React.memo(TowerListItem);
