import React, { useEffect, useState } from "react";
import {
	EmployeeLabelDiv as Label,
	EmployeeListItemDesc
} from "../../styled/magtable/ListContent";
import { useDrag } from "react-dnd";
import { SET_EQUIPMENT_EMPLOYEE } from "../../actions/constants";
import { useDispatch, useSelector } from "react-redux";
import {
	removeEquipmentEmployee,
	setEquipmentEmployee
} from "../../actions/magtable";
import {
	EmployeeListItemContentDiv,
	EmployeeListItemDiv,
	EmployeeListItemName,
	EmployeeListItemTime
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
	}, [assignment]);

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
		<EmployeeListItemDiv
			ref={drag}
			employee={employeeShift}
			disabled={isDragging || employeeShift.assignedEquipment}
		>
			<EmployeeListItemContentDiv>
				<EmployeeListItemName key={employeeShift.id}>
					{employeeShift.name}
				</EmployeeListItemName>
				<EmployeeListItemTime>
					{employeeShift.startTime} - {employeeShift.endTime}
				</EmployeeListItemTime>
				<EmployeeListItemDesc>{employeeShift.description}</EmployeeListItemDesc>
			</EmployeeListItemContentDiv>

			{employeeShift.isGreen && <Label type={"greenPass"}>Green Pass</Label>}
			{employeeShift.noAvop && <Label type={"noAvop"}>No AVOP</Label>}

			{employeeShift.assignedEquipment}
			{canRemove && <button onClick={() => handleRemove()}>X</button>}
		</EmployeeListItemDiv>
	);
}

export default EmployeeListItem;
