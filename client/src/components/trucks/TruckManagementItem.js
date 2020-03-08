import React, { useState } from "react";
import {
	TruckManagementItemDiv,
	TruckIdDiv,
	TruckManagementStatus,
	NoticeBox
} from "../../styled/trucks/TruckManagement";
import { useDispatch, useSelector } from "react-redux";
import { editTruck } from "../../actions/truck";
import AddTruck from "./AddTruck";

/**
 * @date 3/5/2020
 * @author Tom Allcock
 * @module Component
 */

/**
 *
 * @constructor
 * @param props
 * @returns {*} The TruckManagementItem component
 */
function TruckManagementItem({ truck }) {
	const dispatch = useDispatch();
	const [editedTruck, setEditedTruck] = useState(truck);

	const authUser = useSelector(state => state.auth.user);

	// when the notice is being changed, make sure to persist changes to the truck object
	function handleChange(event) {
		setEditedTruck(event.target.value);
	}

	// send our edited truck to our actions to persist the edit to the backend
	function handleEdit() {
		dispatch(editTruck(editedTruck));
	}

	return (
		<TruckManagementItemDiv>
			<TruckIdDiv status={truck.status}>{truck.id}</TruckIdDiv>
			<TruckManagementStatus>{truck.status}</TruckManagementStatus>
			<NoticeBox value={editedTruck.notice} onChange={handleChange} />
			<button type={"submit"} onClick={handleEdit}>
				EDIT BUTTON
			</button>
		</TruckManagementItemDiv>
	);
}

export default TruckManagementItem;
