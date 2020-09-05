import React, { useState } from "react";
import { AssignmentContainer, MapsDiv } from "../../styled/magtable/Maps";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import TowerMap from "./TowerList";
import ParkingLocationMap from "./ParkingLocationMap";
import EmployeeList from "./EmployeeList";
import TruckList from "./TruckList";
import Modal from "../common/Modal";
import BrixManagement from "../brix/BrixManagement";

/**
 * Placeholder component to assist in displaying routing
 * @date 2020-03-24
 * @author Arran Woodruff
 * @category Components/MagTable
 * @constructor
 */
const AssignmentTable = () => {
	const [showBrixModal, setShowBrixModal] = useState(false);

	const openBrixModal = () => setShowBrixModal(true);

	return (
		<DndProvider backend={Backend}>
			<AssignmentContainer>
				<EmployeeList />
				<TruckList openBrixModal={openBrixModal} />
				<MapsDiv>
					<ParkingLocationMap openBrixModal={openBrixModal} />
					<TowerMap />
				</MapsDiv>
			</AssignmentContainer>

			<Modal handleClose={() => setShowBrixModal(false)} show={showBrixModal}>
				<BrixManagement />
			</Modal>
		</DndProvider>
	);
};

export default AssignmentTable;
