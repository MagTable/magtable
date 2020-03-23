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
 * @author MJ Kochuk, Arran Woodruff
 * @module Component
 */

/**
 *
 * @constructor
 * @param props
 * @returns {*} The EmployeeListItem component
 */
function EmployeeListItem({ employeeShift, assignment }) {
	const dispatch = useDispatch();

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

	// not needed unless we readd remove assignment to this component
	// function handleRemove() {
	// 	dispatch(
	// 		removeEquipmentEmployee(assignment.equipment.id, employeeShift.id)
	// 	);
	// }

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
					{/* Difficult to determine 'canClear' currently, disabled until fix is decided*/}

					{/*<UnassignBtn*/}
					{/*	disabled={!canClear}*/}
					{/*	onClick={() => canClear && handleRemove()}*/}
					{/*>*/}
					{/*	<i className="fas fa-times" />*/}
					{/*</UnassignBtn>*/}
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
