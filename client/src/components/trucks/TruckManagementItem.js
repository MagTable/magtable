import React, { useState } from "react";
import {
	TruckManagementItemDiv,
	TruckIdDiv,
	TruckManagementStatus,
	NoticeBox
} from "../../styled/trucks/TruckManagement";
import { useDispatch, useSelector } from "react-redux";
import { editTruck } from "../../actions/truck";
import { TRUCK_STATUSES, SYSTEM_ADMINISTRATOR } from "../../actions/constants";

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

	// when the notice is being changed, make sure it persists
	function handleChangeNotice(event) {
		setEditedNotice(event.target.value);
	}
	// when the status is being changed, make sure it persists
	function handleChangeStatus(event) {
		setEditedStatus(event.target.value);
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

	function isSelected(truckStatus) {
		if (truckStatus === editedStatus) {
			return true;
		} else {
			return false;
		}
	}

	return (
		<TruckManagementItemDiv>
			<TruckIdDiv status={editedStatus}>{truck.id}</TruckIdDiv>
			{authUser?.role?.name === SYSTEM_ADMINISTRATOR ? (
				<>
					<select onChange={handleChangeStatus}>
						{TRUCK_STATUSES.map(truckStatus => (
							<option value={truckStatus} selected={isSelected(truckStatus)}>
								{truckStatus}
							</option>
						))}
					</select>
					<NoticeBox value={editedNotice} onChange={handleChangeNotice} />
					<button onClick={handleEdit}>EDIT</button>
					<button>REMOVE BUTTON</button>
				</>
			) : (
				<>
					<select onChange={handleChangeStatus}>
						{TRUCK_STATUSES.map(truckStatus => (
							<option value={truckStatus} selected={isSelected(truckStatus)}>
								{truckStatus}
							</option>
						))}
					</select>
					<NoticeBox value={editedNotice} onChange={handleChangeNotice} />
					<button onClick={handleEdit}>EDIT</button>
				</>
			)}
		</TruckManagementItemDiv>
	);
}

export default TruckManagementItem;
