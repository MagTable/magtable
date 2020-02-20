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
import { useDrop, useDrag } from "react-dnd";
import {
	SET_EQUIPMENT_EMPLOYEE,
	SET_TRUCK_LOCATION
} from "../../actions/constants";
import { useDispatch } from "react-redux";
import {
	removeEquipmentEmployee,
	setTruckLocation
} from "../../actions/magtable";

/**
 * @date 2020-02-17
 * @author MJ Kochuk, Steven Wong, Arran Woodruff
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

	const [{ isDragging }, drag] = useDrag({
		item: { type: SET_TRUCK_LOCATION },
		end: (item, monitor) => {
			const dropResult = monitor.getDropResult();
			if (item && dropResult) {
				dispatch(
					setTruckLocation(dropResult.equipmentID, dropResult.parkingLocation)
				);
			}
		},
		collect: monitor => ({
			isDragging: !!monitor.isDragging()
		})
	});

	const [{ canDrop, isOver }, drop] = useDrop({
		accept: SET_EQUIPMENT_EMPLOYEE,
		drop: () => ({
			equipmentID: assignment.equipment.id,
			slotID: assignment.employeeShifts.length
		}),
		canDrop: () => assignment.employeeShifts.length < 4, // Logic to not allow more than 4 employees in a location.
		collect: monitor => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	});

	const isActive = canDrop && isOver;
	const style = isActive ? { border: "3px solid #6ac259" } : null;

	const dispatch = useDispatch();

	const handleClick = e => {
		dispatch(
			removeEquipmentEmployee(assignment.equipment.id, parseInt(e.target.value))
		);
	};

	return (
		<div ref={drop}>
			<TruckListItemDiv style={style} ref={drag}>
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
							{/*//todo button value needs to now be the slot number.*/}
							{/*<button value={slot.value} onClick={handleClick}>*/}
							{/*	X*/}
							{/*</button>*/}
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
				facere minima neque quod recusandae repudiandae. Aut dignissimos esse
				est iste laboriosam, libero maiores minima necessitatibus nostrum
				perferendis quae recusandae velit veniam veritatis voluptate! Aut
				cumque, earum et facere ipsa ipsam quod recusandae rem repellat sapiente
				sunt unde. Animi architecto autem consequuntur debitis fuga illum, ipsum
				quod veniam. Ad, architecto at dignissimos exercitationem inventore
				ipsum magni nisi perferendis recusandae rem rerum soluta temporibus!
				Atque consequuntur eius eveniet exercitationem facilis. Doloremque,
				perspiciatis, quibusdam.
			</TruckProblemsDiv>
		</div>
	);
}

export default TruckListItem;
