import React, { useState } from "react";
import {
	TruckManagementItemDiv,
	TruckIdDiv,
	TruckManagementStatus,
	NoticeBox
} from "../../styled/trucks/TruckManagement";
import { useDispatch } from "react-redux";
import { editTruck } from "../../actions/truck";

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

	function handleChange(event) {
		setEditedTruck(event.target.value);
	}

	function handleEdit() {
		dispatch(editTruck(editedTruck));
	}

	return (
		<TruckManagementItemDiv>
			<form>
				<TruckIdDiv status={truck.status}>{truck.id}</TruckIdDiv>
				<TruckManagementStatus>{truck.status}</TruckManagementStatus>
				<NoticeBox value={editedTruck.notice} onChange={handleChange} />

				<button type={"submit"} onClick={handleEdit}>
					EDIT BUTTON
				</button>
			</form>
		</TruckManagementItemDiv>
	);
}

export default TruckManagementItem;
