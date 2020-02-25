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
	OJT,
	SET_EQUIPMENT_EMPLOYEE,
	SET_TRUCK_LOCATION
} from "../../actions/constants";
import { useDispatch } from "react-redux";
import {
	removeEquipmentEmployee,
	setTruckLocation
} from "../../actions/magtable";
import ReactTooltip from "react-tooltip";

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

		if (showAM === true) {
			return !assignment.employeeShifts[1];
		}
		if (showAM === false) {
			return !assignment.employeeShifts[3];
		}
	};

	const handleClick = shiftID => {
		dispatch(removeEquipmentEmployee(assignment.equipment.id, shiftID));
	};

	function getOutline(index) {
		if (index !== nextOpenSlot()) return null;

		if (isOver && !canDrop) return "danger";

		// if hovered shift is OJT and placed in a primary slot
		if (
			isOver &&
			canDrop &&
			hoveredShiftDescription === OJT &&
			(index === 0 || index === 2)
		)
			return "warning";

		if (isOver && canDrop) return "success";
	}

	function ojtWarn(index) {
		if (
			assignment.employeeShifts[index]?.description === OJT &&
			!assignment.employeeShifts[index + 1]
		) {
			return true;
		}

		if (
			assignment.employeeShifts[index]?.description === OJT &&
			assignment.employeeShifts[index + 1]?.description === OJT
		) {
			return true;
		}

		return false;
	}

	// todo see if we can refactor this
	return (
		<div ref={drop}>
			<TruckListItemDiv>
				<TruckNumberDiv ref={drag} status={assignment.equipment.status}>
					{assignment.equipment.id}
				</TruckNumberDiv>
				<TruckInfoDiv>
					<TruckListItemEmployeeList>
						{/* First AM Employee */}
						<TruckListItemEmployee
							slot={1}
							show={showAM}
							outline={getOutline(0)}
						>
							{assignment.employeeShifts[0]?.name}
							{ojtWarn(0) && (
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
							{assignment.employeeShifts[0]?.name &&
								!assignment.employeeShifts[1] && (
									<button
										onClick={() => handleClick(assignment.employeeShifts[0].id)}
									>
										X
									</button>
								)}
						</TruckListItemEmployee>
						{/* First PM Employee */}
						<TruckListItemEmployee
							slot={1}
							show={!showAM}
							outline={getOutline(2)}
						>
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
									<button
										onClick={() => handleClick(assignment.employeeShifts[2].id)}
									>
										X
									</button>
								)}
						</TruckListItemEmployee>
						{/* Second AM Employee */}
						<TruckListItemEmployee
							slot={2}
							show={showAM}
							outline={getOutline(1)}
						>
							{assignment.employeeShifts[1]?.name}
							{assignment.employeeShifts[1] && (
								<button
									onClick={() => handleClick(assignment.employeeShifts[1].id)}
								>
									X
								</button>
							)}
						</TruckListItemEmployee>
						{/* Second PM Employee */}
						<TruckListItemEmployee
							slot={2}
							show={!showAM}
							outline={getOutline(3)}
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
				{assignment.equipment.notice === "" ? null : (
					<TruckProblemsText>{assignment.equipment.notice}</TruckProblemsText>
				)}
			</TruckProblemsDiv>
		</div>
	);
}

export default TruckListItem;
