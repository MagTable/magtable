import React, { useState } from "react";
import { NoticeBox } from "../../styled/trucks/TruckManagement";
import { useDispatch, useSelector } from "react-redux";
import { editTruck } from "../../actions/truck";
import AddTruck from "./AddTruck";
import {
	TruckListItemDiv,
	TruckNoticeIndicator,
	TruckNumberDiv
} from "../../styled/magtable/ListContent";
import { Button } from "../../styled/common/FormControl";

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
		<TruckListItemDiv>
			<TruckNumberDiv status={truck.status}>{truck.id}</TruckNumberDiv>
			<TruckNoticeIndicator>{truck.status}</TruckNoticeIndicator>
			<NoticeBox value={editedTruck.notice} onChange={handleChange} />
			<Button type={"submit"} onClick={handleEdit}>
				Edit
			</Button>
		</TruckListItemDiv>
	);
}

export default TruckManagementItem;
