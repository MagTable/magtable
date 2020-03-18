import React, { useEffect, useState } from "react";
import { useDrag } from "react-dnd";
import { SET_EQUIPMENT_EMPLOYEE } from "../../actions/constants";
import { useDispatch, useSelector } from "react-redux";
import {
	removeEquipmentEmployee,
	setEquipmentEmployee
} from "../../actions/magtable";
import {
	AssignedToWrap,
	EmpListItemDiv,
	EmpName,
	EmpRole,
	EmpHours,
	Labels,
	LabelText,
	LabelWrapper,
	ShiftInfo,
	UnassignBtn
} from "../../styled/magtable/ListContent";

/**
 * @date 2020-02-19
 * @author MJ Kochuk
 * @module Component
 */

/**
 *
 * @constructor
 * @param props
 * @returns {*} The EmployeeListItem component
 */
function EmployeeListItem({ employee: employeeShift }) {
	const dispatch = useDispatch();

	const [assignedSlotID, setAssignedSlotID] = useState();
	const [canRemove, setCanClear] = useState(false);

	const assignment = useSelector(state =>
		state.magtable.assignments.find(
			assignment => assignment.equipment.id === employeeShift.assignedEquipment
		)
	);

	useEffect(() => {
		// if there's no assignment, you can't clear
		if (assignment) {
			setCanClear(true);
			// if there's an assignment and the assigned slot is a primary
			// and the associated secondary slot is filled, you can't clear
			if (assignedSlotID === 0 && assignment.employeeShifts[assignedSlotID + 1])
				setCanClear(false);
			if (assignedSlotID === 2 && assignment.employeeShifts[assignedSlotID + 1])
				setCanClear(false);
		} else {
			setCanClear(false);
		}
	}, [assignment, setCanClear, assignedSlotID]);

	const [{ isDragging }, drag] = useDrag({
		item: {
			type: SET_EQUIPMENT_EMPLOYEE,
			id: employeeShift.id,
			shiftDescription: employeeShift.description
		},
		canDrag: !employeeShift.assignedEquipment,
		end: (item, monitor) => {
			const dropResult = monitor.getDropResult();
			if (item && dropResult) {
				dispatch(
					setEquipmentEmployee(
						dropResult.equipmentID,
						employeeShift,
						dropResult.equipmentSlotID
					)
				);
				setAssignedSlotID(dropResult.equipmentSlotID);
				setCanClear(true);
			}
		},
		collect: monitor => ({
			isDragging: !!monitor.isDragging()
		})
	});

	function handleRemove() {
		dispatch(
			removeEquipmentEmployee(employeeShift.assignedEquipment, employeeShift.id)
		);
	}

	return (
		<EmpListItemDiv
			ref={drag}
			disabled={isDragging || employeeShift.assignedEquipment}
		>
			<ShiftInfo>
				<EmpName>{employeeShift.name}</EmpName>
				<EmpHours>
					{employeeShift.startTime} - {employeeShift.endTime}
				</EmpHours>
			</ShiftInfo>

			{employeeShift.assignedEquipment && (
				<AssignedToWrap isTower={assignment.equipment.id >= 1000}>
					<UnassignBtn
						disabled={!canRemove}
						onClick={() => canRemove && handleRemove()}
					>
						<i className="fas fa-times" />
					</UnassignBtn>
					<h2>
						{assignment.equipment.type
							? assignment.equipment.type
							: employeeShift.assignedEquipment}
					</h2>
				</AssignedToWrap>
			)}

			<Labels>
				{employeeShift.isGreen && (
					<LabelWrapper type={"greenPass"}>
						<LabelText>Green Pass</LabelText>
					</LabelWrapper>
				)}

				{employeeShift.noAvop && (
					<LabelWrapper type={"noAvop"}>
						<LabelText>No AVOP</LabelText>
					</LabelWrapper>
				)}
			</Labels>

			<EmpRole>{employeeShift.description}</EmpRole>
		</EmpListItemDiv>
	);
}

export default EmployeeListItem;
