import React from "react";
import EmployeeListItemContent from "./EmployeeListItemContent";
import EmployeeLabel from "./EmployeeLabel";
import { EmployeeListItemDiv } from "../../styled/magtable/ListContent";
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
		item: { type: SET_EQUIPMENT_EMPLOYEE },
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
			<EmployeeListItemContent employee={employeeShift} />
			{employeeShift.labels.map(label => (
				<EmployeeLabel key={employeeShift.id + label} label={label} />
			))}
		</EmployeeListItemDiv>
	);
}

export default EmployeeListItem;
