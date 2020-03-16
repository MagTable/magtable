import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
						<>
							{assignments
								.sort()
								.map(
									truck =>
										truck.equipment.id < 1000 && (
											<TruckManagementItem
												key={truck.equipment.id}
												truck={truck}
												setEditTruck={setEditTruck}
											/>
										)
								)}
						</>
					</FadeIn>
				</TruckManagementListDiv>
			</TruckMgmtDiv>
		</EditTruckWrap>
	);
}

export default TruckManagement;
