import React, { useState } from "react";
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
	DANGER,
	MANAGEMENT_POSITIONS,
	MECHANIC,
	OJT,
	SET_EQUIPMENT_EMPLOYEE,
	SET_TRUCK_LOCATION,
	SUCCESS,
	TECHNICIAN_POSITIONS,
	TOWER_POSITIONS,
	WARNING
} from "../../actions/constants";
import { useDispatch } from "react-redux";
import {
	removeEquipmentEmployee,
	setTruckLocation
} from "../../actions/magtable";
import IconButton from "../common/IconButton";

/**
 * @date 2020-02-17
 * @author MJ Kochuk, Steven Wong, Arran Woodruff
 * @module Component
 */

/**
 * Displays the content of a Truck's assignment.
 *
 * Truck's assignment status is displayed as a color within TruckNumberDiv as a prop
 *
 * Renders each associated employeeShift with the ability to clear assignments
 * in accordance with business rules (no secondaries assigned without a primary)
 *
 * showAM toggles which employees are displayed (not handled with react, handled in css)
 *
 * Logic is written to determine whether incoming shifts are allowed, provide
 * a warning, or are permitted
 *
 * @constructor
 * @param assignment the associated assignment object
 * @param noticeOpen dictates whether or not to render the truck's notices
 * @param showAM toggle to display am or pm shift slots
 * @returns {*} The TruckListItem component
 */
function TruckListItem({ assignment, noticeOpen, showAM }) {
	const [hoveredShiftDescription, setHoveredShiftDescription] = useState(null);
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
		// if the list of employeeShifts does not have any nulls, it's full
		if (!assignment.employeeShifts.includes(null)) return false;
		// make sure the employee isn't already assigned here
		if (assignment.employeeShifts.find(shift => shift?.id === item.id))
			return false;

		// if AM secondary slot is filled, then AM is full
		if (showAM === true) {
			return !assignment.employeeShifts[1];
		}

		// if PM secondary slot is filled, then PM is full
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
			hoveredShiftDescription === OJT &&
			(index === 0 || index === 2)
		)
			return WARNING;

		// if hovered shift is not included in technician positions
		if (
			isOver &&
			canDrop &&
			!TECHNICIAN_POSITIONS.includes(hoveredShiftDescription)
		)
			return WARNING;

		if (isOver && canDrop) return SUCCESS;
	}

	function getAssignmentWarning(index) {
		if (assignment.employeeShifts[index] === null) return null;

		if (
			TOWER_POSITIONS.includes(assignment.employeeShifts[index]?.description)
		) {
			return "Tower Staff Assigned to Truck";
		}

		if (
			MANAGEMENT_POSITIONS.includes(
				assignment.employeeShifts[index]?.description
			)
		) {
			return "Management Assigned to Truck";
		}

		if (MECHANIC.includes(assignment.employeeShifts[index]?.description)) {
			return "Mechanic Assigned to Truck";
		}

		if (
			(index === 0 || index === 2) &&
			assignment.employeeShifts[index]?.description === OJT &&
			!assignment.employeeShifts[index + 1]
		) {
			return "OJT Requires Qualified Secondary";
		}

		if (
			(index === 0 || index === 2) &&
			assignment.employeeShifts[index]?.description === OJT &&
			assignment.employeeShifts[index + 1]?.description === OJT
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
			assignmentIndex: 2,
			shift: assignment.employeeShifts[2],
			slot: 1,
			show: !showAM,
			canClear: assignment.employeeShifts[2] && !assignment.employeeShifts[3]
		},
		{
			assignmentIndex: 1,
			shift: assignment.employeeShifts[1],
			slot: 2,
			show: showAM,
			canClear: assignment.employeeShifts[1]
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
		<div ref={drop}>
			<TruckListItemDiv>
				<TruckNumberDiv ref={drag} status={assignment.equipment.status}>
					{assignment.equipment.id}
				</TruckNumberDiv>
				<TruckInfoDiv>
					<TruckListItemEmployeeList>
						{employeeShifts.map(elem => (
							<TruckListItemEmployee
								key={elem.assignmentIndex}
								slot={elem.slot}
								show={elem.show}
								outlineType={getOutline(elem.assignmentIndex)}
								warningBackground={getAssignmentWarning(elem.assignmentIndex)}
							>
								{elem.shift?.name}
								{getAssignmentWarning(elem.assignmentIndex) && (
									<IconButton
										faClassName={"fa-exclamation-triangle"}
										color={"orange"}
										outlineType={"darkorange"}
										toolTip={getAssignmentWarning(elem.assignmentIndex)}
									/>
								)}
								{elem.canClear && (
									<button onClick={() => handleClear(elem.shift.id)}>X</button>
								)}
							</TruckListItemEmployee>
						))}
					</TruckListItemEmployeeList>
					<TruckListItemLocation>{assignment.location}</TruckListItemLocation>
				</TruckInfoDiv>
			</TruckListItemDiv>
			<TruckProblemsDiv noticeOpen={noticeOpen}>
				{assignment.equipment.notice !== "" && (
					<TruckProblemsText>{assignment.equipment.notice}</TruckProblemsText>
				)}
			</TruckProblemsDiv>
		</div>
	);
}

export default React.memo(TruckListItem);
