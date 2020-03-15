import React, { useState } from "react";
import { NoticeBox } from "../../styled/trucks/TruckManagement";
import { useDispatch, useSelector } from "react-redux";
import { TRUCK_STATUSES, SYSTEM_ADMINISTRATOR } from "../../actions/constants";
import {
	ManipTruckManipIconDiv,
	TruckListItemDiv,
	TruckMgmtItemDiv,
	TruckNumberDiv,
	TruckStatusBox
} from "../../styled/magtable/ListContent";
import { Button } from "../../styled/common/FormControl";
import IconButton from "../common/IconButton";
import Confirmation from "../common/Confirmation";
import { editTruck } from "../../actions/truck";

/**
 * @date 3/5/2020
 * @author Tom Allcock, MJ Kochuk, Steven Wong
 * @module Component
 */

/**
 *
 * @constructor
 * @param props
 * @returns {*} The TruckManagementItem component
 */
function TruckManagementItem({ truck, setEditTruck }) {
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

		const editedTruck = {
			id: truck.id,
			status: editedStatus,
			notice: editedNotice
		};

		dispatch(editTruck(editedTruck));
	}

	// send our edited truck to our actions to persist the edit to the backend
	function handleEdit() {
		const editedTruck = {
			id: truck.id,
			status: editedStatus,
			notice: editedNotice
		};

		setEditTruck(editedTruck);
		// console.log(editedTruck);
		// dispatch(editTruck(editedTruck));
	}

	function isSelected(truckStatus) {
		if (truckStatus === editedStatus) {
			return true;
		} else {
			return false;
		}
	}

	return (
		<TruckMgmtItemDiv>
			<TruckNumberDiv status={editedStatus}>{truck.id}</TruckNumberDiv>
			{authUser?.role?.name === SYSTEM_ADMINISTRATOR ? (
				<>
					{/*<select onChange={handleChangeStatus}>*/}
					{/*	{TRUCK_STATUSES.map(truckStatus => (*/}
					{/*		<option value={truckStatus} selected={isSelected(truckStatus)}>*/}
					{/*			{truckStatus}*/}
					{/*		</option>*/}
					{/*	))}*/}
					{/*</select>*/}
					<TruckStatusBox>{editedNotice}</TruckStatusBox>
					<ManipTruckManipIconDiv>
						<IconButton
							faClassName="fas fa-edit"
							onClick={handleEdit}
							toolTip={"Edit Truck"}
							hoverColor={"blue"}
						/>
						<Confirmation
							confirmationMessage={"Confirm Delete"}
							action={() => {}}
						>
							{({ confirm }) => (
								<IconButton
									faClassName="fa-trash-alt"
									onClick={confirm}
									toolTip={"Delete Truck"}
									hoverColor={"red"}
								/>
							)}
						</Confirmation>
					</ManipTruckManipIconDiv>
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
		</TruckMgmtItemDiv>
	);
}

export default TruckManagementItem;
