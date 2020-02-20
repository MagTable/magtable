import React from "react";
import { TowerTitle, TowerTitleText } from "../../styled/magtable/Titling";
import { TowerPositionDiv } from "../../styled/magtable/Maps";
import { useDrop } from "react-dnd";
import { SET_EQUIPMENT_EMPLOYEE } from "../../actions/constants";

const TowerPosition = ({ assignment }) => {
	const [, drop] = useDrop({
		accept: SET_EQUIPMENT_EMPLOYEE,
		drop: () => ({
			equipmentID: assignment.equipment.id,
			equipmentSlotID: assignment.employeeShifts.length
		})
	});

	return (
		<TowerPositionDiv ref={drop}>
			<TowerTitle>
				<TowerTitleText>{assignment.equipment.position}</TowerTitleText>
			</TowerTitle>
			{assignment.employeeShifts.map(shift => shift.name)}
		</TowerPositionDiv>
	);
};

export default TowerPosition;
