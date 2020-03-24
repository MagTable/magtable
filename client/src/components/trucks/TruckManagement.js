import React, { useState } from "react";
import { useSelector } from "react-redux";
import TruckManagementItem from "./TruckManagementItem";
import {
	TruckManagementListDiv,
	EditTruckWrap,
	TruckMgmtDiv,
	AddTruckBtn
} from "../../styled/trucks/TruckManagement";
import { ListTitle, ListTitleText } from "../../styled/magtable/Titling";
import AddTruck from "./AddTruck";
import Modal from "../modal/Modal";
import { FilterIcon } from "../../styled/magtable/Overflow";
import EditTruck from "./EditTruck";
import FadeIn from "react-fade-in";
import { DEICE_TRUCK, SERVICE_VEHICLE } from "../../actions/constants";

/**
 * @date 3/5/2020
 * @author Tom Allcock, MJ Kochuk, Steven Wong
 * @module Component
 */

/**
 *
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

	const truckAssignments = assignments.filter(
		assignment =>
			assignment.equipment.id < 1000 &&
			assignment.equipment.type === DEICE_TRUCK
	);
	const serviceVehicleAssignments = assignments.filter(
		assignment =>
			assignment.equipment.id < 1000 &&
			assignment.equipment.type === SERVICE_VEHICLE
	);

	return (
		<EditTruckWrap>
			<TruckMgmtDiv>
				<ListTitle>
					<ListTitleText>Truck Status + Notices</ListTitleText>
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
				</ListTitle>
				<TruckManagementListDiv>
					<FadeIn>
						<h2>Service Vehicles</h2>
						{serviceVehicleAssignments.map(assignment => (
							<TruckManagementItem
								key={assignment.equipment.id}
								truck={assignment}
								setEditTruck={setEditTruck}
							/>
						))}
						<h2>De-Ice Vehicles</h2>
						{truckAssignments.map(assignment => (
							<TruckManagementItem
								key={assignment.equipment.id}
								truck={assignment}
								setEditTruck={setEditTruck}
							/>
						))}
					</FadeIn>
				</TruckManagementListDiv>
			</TruckMgmtDiv>
		</EditTruckWrap>
	);
}

export default TruckManagement;
