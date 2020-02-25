import React, { useEffect, useState } from "react";
import {
	EmployeeLabelDiv as Label,
	EmployeeListItemContentDiv as Content,
	EmployeeListItemDiv as Wrapper,
	EmployeeListItemName as ItemName,
	EmployeeListItemTime as ItemTime
} from "../../styled/magtable/ListContent";
import { useDrag } from "react-dnd";
import { SET_EQUIPMENT_EMPLOYEE } from "../../actions/constants";
import { useDispatch, useSelector } from "react-redux";
import {
	removeEquipmentEmployee,
	setEquipmentEmployee
} from "../../actions/magtable";

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
	const [canClear, setCanClear] = useState(false);

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

	function handleClick() {
		dispatch(
			removeEquipmentEmployee(employeeShift.assignedEquipment, employeeShift.id)
		);
	}

	return (
		// todo employee prop redundant
		<Wrapper
			ref={drag}
			employee={employeeShift}
			disabled={employeeShift.assignedEquipment}
		>
			<Content>
				{/* todo key prop redundant */}
				<ItemName key={employeeShift.id}>{employeeShift.name}</ItemName>
				<ItemTime>
					{employeeShift.startTime} - {employeeShift.endTime}
				</ItemTime>
				<ItemName>{employeeShift.description}</ItemName>
			</Content>

			{employeeShift.isGreen && <Label type={"greenPass"}>Green Pass</Label>}
			{!employeeShift.hasAvop && <Label type={"noAvop"}>No AVOP</Label>}

			{employeeShift.assignedEquipment}
			{canClear && <button onClick={() => handleClick()}>X</button>}
		</Wrapper>
	);
}

export default EmployeeListItem;
