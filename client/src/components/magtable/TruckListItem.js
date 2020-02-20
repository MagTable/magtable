import React from "react";
import {
	TruckInfoDiv,
	TruckListItemDiv,
	TruckListItemEmployee,
	TruckListItemEmployeeList,
	TruckListItemLocation,
	TruckNumberDiv,
	TruckProblemsDiv
} from "../../styled/magtable/ListContent";
import { SET_EQUIPMENT_EMPLOYEE } from "../../actions/constants";
import { useDrop } from "react-dnd";

/**
 * @date 2020-02-17
 * @author MJ Kochuk
 * @module Component
 */

/**
 *
 * @constructor
 * @param props
 * @returns {*} The TruckListItem component
 */
function TruckListItem({ assignment, open, displayedTime }) {
	let colorCode;

	// Sets the color for the TruckNumberDiv based on the status of the truck
	switch (assignment.equipment.status) {
		case "GO": {
			colorCode = "--context-green"; // Operational
			break;
		}
		case "INOP": {
			colorCode = "--context-red"; // Inoperable
			break;
		}
		case "CON": {
			colorCode = "--context-blue"; // Conditional
			break;
		}
		case "OOS": {
			colorCode = "--context-grey"; // Out of service
			break;
		}
		default: {
			// If an unknown tuck status is provided.
		}
	}

	const [{ canDrop, isOver }, drop] = useDrop({
		accept: SET_EQUIPMENT_EMPLOYEE,
		drop: () => ({
			equipmentID: assignment.equipment.id,
			slotID: assignment.employeeShifts.length
		}),
		canDrop: () => true,
		collect: monitor => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	});

	const isActive = canDrop && isOver;
	const style = isActive ? { border: "2px solid red" } : null;

	return (
		<div ref={drop}>
			<TruckListItemDiv style={style}>
				<TruckNumberDiv colorCode={colorCode}>
					{assignment.equipment.id}
				</TruckNumberDiv>
				<TruckInfoDiv>
					<TruckListItemEmployeeList>
						<TruckListItemEmployee
							time={"am"}
							slot={1}
							displayedTime={displayedTime}
						>
							{assignment.employeeShifts[0]?.name}
						</TruckListItemEmployee>
						<TruckListItemEmployee
							time={"am"}
							slot={2}
							displayedTime={displayedTime}
						>
							{assignment.employeeShifts[1]?.name}
						</TruckListItemEmployee>
						<TruckListItemEmployee
							time={"pm"}
							slot={1}
							displayedTime={displayedTime}
						>
							{assignment.employeeShifts[2]?.name}
						</TruckListItemEmployee>
						<TruckListItemEmployee
							time={"pm"}
							slot={2}
							displayedTime={displayedTime}
						>
							{assignment.employeeShifts[3]?.name}
						</TruckListItemEmployee>
					</TruckListItemEmployeeList>

					<TruckListItemLocation>{assignment.location}</TruckListItemLocation>
				</TruckInfoDiv>
			</TruckListItemDiv>
			<TruckProblemsDiv open={open}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
				doloremque doloribus fuga ipsa necessitatibus nobis? Culpa eligendi est
				perspiciatis, quibusdam.
			</TruckProblemsDiv>
		</div>
	);
}

export default TruckListItem;
