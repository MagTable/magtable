import React, { useState } from "react";
import { useSelector } from "react-redux";
import TruckManagementItem from "./TruckManagementItem";
import {
	TruckManagementListDiv,
	TruckMgmtDiv,
	AddTruckBtn,
	TruckManagementDiv
} from "../../styled/trucks/TruckManagement";
import { ListTitle, ListTitleText } from "../../styled/magtable/Titling";
import AddTruck from "./AddTruck";
import Modal from "../modal/Modal";
import { FilterIcon } from "../../styled/magtable/Overflow";
import EditTruck from "./EditTruck";
import {
	DEICE_TRUCK,
	SERVICE_VEHICLE,
	SYSTEM_ADMINISTRATOR
} from "../../actions/constants";

/**
 * @date 3/5/2020
 * @author Tom Allcock, MJ Kochuk, Steven Wong
 * This is the main component that deals with all the rendering of the Truck Management page.
 * @category Components/Trucks
 * @constructor
 * @returns {*} The TruckManagement component
 */
function TruckManagement() {
	const assignments = useSelector(state => state.magtable.assignments);
	// Next 3 lines of code are for the Add Truck Modal
	const [showModal, setModal] = useState(false);
	const handleClose = () => setModal(false);
	const handleShow = () => setModal(true);
	const [editTruck, setEditTruck] = useState(null);
	const authUser = useSelector(state => state.auth.user);

	// Gets only the De-Ice Trucks in the System.
	const truckAssignments = assignments.filter(
		assignment =>
			assignment.equipment.id < 1000 &&
			assignment.equipment.type === DEICE_TRUCK &&
			assignment.equipment.active === true
	);

	// Gets only the Service Vehicles in the System.
	const serviceVehicleAssignments = assignments.filter(
		assignment =>
			assignment.equipment.id < 1000 &&
			assignment.equipment.type === SERVICE_VEHICLE &&
			assignment.equipment.active === true
	);

	return (
		<TruckMgmtDiv>
			<ListTitle>
				<ListTitleText>Manage Trucks</ListTitleText>
				{authUser?.role?.name === SYSTEM_ADMINISTRATOR ? (
					<>
						<Modal show={showModal} handleClose={handleClose}>
							<AddTruck />
						</Modal>
						<Modal
							show={editTruck !== null}
							handleClose={() => setEditTruck(null)}
						>
							<EditTruck truck={editTruck} />
						</Modal>
						<AddTruckBtn onClick={handleShow}>
							<FilterIcon className={"fas fa-plus"} />
							Add Truck
						</AddTruckBtn>
					</>
				) : null}
			</ListTitle>
			<TruckManagementListDiv>
				<TruckManagementDiv>
					<h2>Service Vehicles</h2>
					{serviceVehicleAssignments.map(assignment => (
						<TruckManagementItem
							key={assignment.equipment.id}
							truck={assignment}
							setEditTruck={setEditTruck}
						/>
					))}
					<h2>De-Ice Trucks</h2>
					{truckAssignments.map(assignment => (
						<TruckManagementItem
							key={assignment.equipment.id}
							truck={assignment}
							setEditTruck={setEditTruck}
						/>
					))}
				</TruckManagementDiv>
			</TruckManagementListDiv>
		</TruckMgmtDiv>
	);
}

export default TruckManagement;
