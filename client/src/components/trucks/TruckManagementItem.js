import React, { useState } from "react";
import {
	TruckManagementItemDiv,
	TruckIdDiv,
	TruckManagementStatus,
	NoticeBox,
	EditTruckWrap,
	AddTruckWrap
} from "../../styled/trucks/TruckManagement";
import { useDispatch, useSelector } from "react-redux";
import { editTruck } from "../../actions/truck";
import { SYSTEM_ADMINISTRATOR } from "../../actions/constants";

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

	//
	const [editedNotice, setEditedNotice] = useState(truck.notice);
	const [editedStatus, setEditedStatus] = useState(truck.status);

	const authUser = useSelector(state => state.auth.user);

	// when the notice is being changed, make sure to persist changes to the truck object
	function handleChangeNotice(event) {
		setEditedNotice(event.target.value);
	}

	// send our edited truck to our actions to persist the edit to the backend
	function handleEdit() {
		const editedTruck = {
			id: truck.id,
			status: editedStatus,
			notice: editedNotice
		};
		console.log(editedTruck);
		dispatch(editTruck(editedTruck));
	}

	return (
		<TruckManagementItemDiv>
			<TruckIdDiv status={truck.status}>{truck.id}</TruckIdDiv>
			{authUser?.role?.name === SYSTEM_ADMINISTRATOR ? (
				<AddTruckWrap>
					<TruckManagementStatus>{truck.status}</TruckManagementStatus>
					<NoticeBox value={editedNotice} onChange={handleChangeNotice} />
					<button onClick={handleEdit}>EDIT</button>
					<button>REMOVE BUTTON</button>
				</AddTruckWrap>
			) : (
				<EditTruckWrap>
					<TruckManagementStatus>{truck.status}</TruckManagementStatus>
					<NoticeBox value={editedNotice} onChange={handleChangeNotice} />
					<button onClick={handleEdit}>EDIT</button>
				</EditTruckWrap>
			)}
		</TruckManagementItemDiv>
	);
}

export default TruckManagementItem;
