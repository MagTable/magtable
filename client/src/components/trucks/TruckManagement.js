import React, { useState } from "react";
import { useSelector } from "react-redux";
import TruckManagementItem from "./TruckManagementItem";
import {
	TruckManagementListDiv,
	EditTruckWrap,
	TruckMgmtDiv
} from "../../styled/trucks/TruckManagement";
import { ListTitle, ListTitleText } from "../../styled/magtable/Titling";
import AddTruck from "./AddTruck";
import Modal from "../modal/Modal";
import { FilterIcon } from "../../styled/magtable/Overflow";
import { Button } from "../../styled/common/FormControl";

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
	const trucks = useSelector(state => state.truck.trucks);
	// Next 3 lines of code are for the Add Truck Modal
	const [showModal, setModal] = useState(false);
	const handleClose = () => setModal(false);
	const handleShow = () => setModal(true);

	return (
		<EditTruckWrap>
			<TruckMgmtDiv>
				<ListTitle>
					<ListTitleText>Truck Status + Notices</ListTitleText>
					<Modal show={showModal} handleClose={handleClose}>
						<AddTruck />
					</Modal>
					<Button onClick={handleShow}>
						<FilterIcon className={"fas fa-plus"} />
						Add Truck
					</Button>
				</ListTitle>
				<TruckManagementListDiv>
					{trucks.map(truck => (
						<TruckManagementItem key={truck.id} truck={truck} />
					))}
				</TruckManagementListDiv>
			</TruckMgmtDiv>
		</EditTruckWrap>
	);
}

export default TruckManagement;
