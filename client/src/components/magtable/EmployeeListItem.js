import React from "react";
import { useDrag } from "react-dnd";
import { SET_EQUIPMENT_EMPLOYEE } from "../../actions/constants";
import { useDispatch } from "react-redux";
import { setEquipmentEmployee } from "../../actions/magtable";
import {
	AssignedToWrap,
	EmpListItemDiv,
	EmpName,
	EmpRole,
	EmpHours,
	Labels,
	LabelText,
	LabelWrapper,
	ShiftInfo
} from "../../styled/magtable/ListContent";

/**
 * @date 2020-02-19
 * @author MJ Kochuk, Arran Woodruff, Steven Wong
 * @category Components/MagTable
 * @param employeeShift The Employee Shift data
 * @param assignment The equipment the employee is assigned too.
 * @returns {*} The EmployeeListItem component
 * @constructor
 */
function EmployeeListItem({ employeeShift, assignment }) {
	const dispatch = useDispatch();

	// This is used to drag the employee item to pieces of equipment. Check react-dnd for further information on how it works.
	const [{ isDragging }, drag] = useDrag({
		item: {
			type: SET_EQUIPMENT_EMPLOYEE,
			id: employeeShift.id,
			shiftDescription: employeeShift.description
		},
		canDrag: !assignment,
		end: (item, monitor) => {
			const dropResult = monitor.getDropResult();
			if (item && dropResult) {
				dispatch(
					setEquipmentEmployee(dropResult.equipmentID, {
						...employeeShift,
						...dropResult.newShiftAttributes
					})
				);
			}
		},
		collect: monitor => ({
			isDragging: !!monitor.isDragging()
		})
	});

	const assignedToTower = assignment?.equipment.id >= 1000;

	return (
		<EmpListItemDiv ref={drag} disabled={isDragging || assignment}>
			<ShiftInfo>
				<EmpName>{employeeShift.name}</EmpName>
				<EmpHours>
					{employeeShift.startTime} - {employeeShift.endTime}
				</EmpHours>
			</ShiftInfo>

			{assignment && (
				<AssignedToWrap isTower={assignedToTower}>
					<h2>
						{assignedToTower
							? assignment.equipment.type
							: assignment?.equipment.id}
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

export default React.memo(EmployeeListItem);
