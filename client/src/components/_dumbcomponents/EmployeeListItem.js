import React from "react";
import EmployeeListItemContent from "./EmployeeListItemContent";
import EmployeeLabel from "./EmployeeLabel";
import { EmployeeListItemDiv } from "../../styled/magtable/ListContent";
import { useDrag } from "react-dnd";
import { SET_EQUIPMENT_EMPLOYEE } from "../../actions/constants";
import { setEquipmentEmployee } from "../../actions/magtable";
import { useDispatch } from "react-redux";

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
function EmployeeListItem({ employee }) {
	const dispatch = useDispatch();

	const [{ isDragging }, drag] = useDrag({
		item: { type: SET_EQUIPMENT_EMPLOYEE },
		end: (item, monitor) => {
			const dropResult = monitor.getDropResult();
			if (item && dropResult) {
				dispatch(
					setEquipmentEmployee(
						dropResult.equipmentID,
						employee,
						dropResult.equipmentSlotID
					)
				);
			}
		}
	});

	return (
		<EmployeeListItemDiv key={employee.name} employee={employee} ref={drag}>
			<EmployeeListItemContent employee={employee} />
			{employee.labels.map(label => (
				//Todo pass in the right tooltip message for each label type.
				<EmployeeLabel
					key={employee.id + label}
					label={label}
					toolTip={"Example"}
				/>
			))}
		</EmployeeListItemDiv>
	);
}

export default EmployeeListItem;
