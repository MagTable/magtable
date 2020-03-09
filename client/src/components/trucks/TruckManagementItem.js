import React, { useState } from "react";
import { NoticeBox } from "../../styled/trucks/TruckManagement";
import { useDispatch, useSelector } from "react-redux";
import { editTruck } from "../../actions/truck";
import { TRUCK_STATUSES, SYSTEM_ADMINISTRATOR } from "../../actions/constants";
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
		<TruckListItemDiv>
			<TruckNumberDiv status={editedStatus}>{truck.id}</TruckNumberDiv>
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
					<Button onClick={handleEdit}>Edit</Button>
					<Button>Remove</Button>
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
					<Button onClick={handleEdit}>Edit</Button>
				</>
			)}
		</TruckListItemDiv>
	);
}

export default TruckManagementItem;
