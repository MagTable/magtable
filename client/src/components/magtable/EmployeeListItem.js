import React from "react";
import {
	EmployeeLabelDiv,
	EmployeeListItemContentDiv,
	EmployeeListItemDiv,
	EmployeeListItemName,
	EmployeeListItemTime
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
		end: (item, monitor) => {
			const dropResult = monitor.getDropResult();
			if (item && dropResult) {
				dispatch(
					setEquipmentEmployee(
						dropResult.equipmentID,
						employeeShift,
						dropResult.slotID
					)
				);
			}
		},
		collect: monitor => ({
			isDragging: !!monitor.isDragging()
		})
	});

	return (
		<EmployeeListItemDiv ref={drag} employee={employeeShift}>
			<EmployeeListItemContentDiv>
				<EmployeeListItemName key={employeeShift.id}>
					{employeeShift.name}
				</EmployeeListItemName>
				<EmployeeListItemTime>
					{employeeShift.startTime} - {employeeShift.endTime}
				</EmployeeListItemTime>
				<EmployeeListItemName>{employeeShift.description}</EmployeeListItemName>
			</EmployeeListItemContentDiv>

			{employeeShift.isGreen && <EmployeeLabelDiv label={"gp"} />}
			{employeeShift.hasAvop && <EmployeeLabelDiv label={"ts"} />}
		</EmployeeListItemDiv>
	);
}

export default EmployeeListItem;
