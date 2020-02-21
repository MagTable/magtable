import React, { useState } from "react";
import {
	EmployeeLabelDiv as Label,
	EmployeeListItemContentDiv as Content,
	EmployeeListItemDiv as Wrapper,
	EmployeeListItemName as ItemName,
	EmployeeListItemTime as ItemTime
} from "../../styled/magtable/ListContent";
import { useDrag } from "react-dnd";
import { SET_EQUIPMENT_EMPLOYEE } from "../../actions/constants";
import { useDispatch } from "react-redux";
import { setEquipmentEmployee } from "../../actions/magtable";

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

	const [{ isDragging }, drag] = useDrag({
		item: { type: SET_EQUIPMENT_EMPLOYEE, id: employeeShift.id },
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
			}
		},
		collect: monitor => ({
			isDragging: !!monitor.isDragging()
		})
	});

	return (
		<Wrapper
			ref={drag}
			employee={employeeShift}
			disabled={employeeShift.assignedEquipment}
		>
			<Content>
				<ItemName key={employeeShift.id}>{employeeShift.name}</ItemName>
				<ItemTime>
					{employeeShift.startTime} - {employeeShift.endTime}
				</ItemTime>
				<ItemName>{employeeShift.description}</ItemName>
			</Content>

			{employeeShift.isGreen && <Label type={"greenPass"}>Green Pass</Label>}
			{!employeeShift.hasAvop && <Label type={"noAvop"}>No AVOP</Label>}

			{employeeShift.assignedEquipment}
		</Wrapper>
	);
}

export default EmployeeListItem;
