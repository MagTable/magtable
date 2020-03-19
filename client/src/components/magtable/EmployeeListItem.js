import React, { useEffect, useState } from "react";
import { useDrag } from "react-dnd";
import { AM, PM, SET_EQUIPMENT_EMPLOYEE } from "../../actions/constants";
import { useDispatch } from "react-redux";
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
function EmployeeListItem({ employeeShift, assignment }) {
	const dispatch = useDispatch();

	const [canClear, setCanClear] = useState(false);

	useEffect(() => {
		const amSecondary = assignment?.employeeShifts.find(
			shift => shift.timeOfDay === AM && !shift.isPrimary
		);

		const pmSecondary = assignment?.employeeShifts.find(
			shift => shift.timeOfDay === PM && !shift.isPrimary
		);

		if (employeeShift.isPrimary) {
			if (employeeShift.timeOfDay === AM) {
				setCanClear(!!amSecondary);
			} else {
				setCanClear(!!pmSecondary);
			}
			return;
		}

		setCanClear(true);
	}, [assignment]);

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

	function handleRemove() {
		dispatch(
			removeEquipmentEmployee(assignment.equipment.id, employeeShift.id)
		);
	}

	const assignedToTower = assignment?.equipment.id >= 1000;

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

			{assignment && (
				<AssignedToWrap isTower={assignedToTower}>
					<UnassignBtn
						disabled={!canClear}
						onClick={() => canClear && handleRemove()}
					>
						<i className="fas fa-times" />
					</UnassignBtn>
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
