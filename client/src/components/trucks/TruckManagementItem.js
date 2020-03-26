import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SYSTEM_ADMINISTRATOR } from "../../actions/constants";
import {
	ManipTruckManipIconDiv,
	TruckMgmtItemDiv,
	TruckNumberDiv,
	TruckStatusBox
} from "../../styled/magtable/ListContent";
import IconButton from "../common/IconButton";
import Confirmation from "../common/Confirmation";
import { deleteTruck } from "../../actions/truck";

/**
 * @date 3/5/2020
 * @author Tom Allcock, MJ Kochuk, Steven Wong
 *
 * The truck management item. This is specifically each truck and service vehicle that is in the system rendered out from Truck Management.
 * @category Components/Trucks
 * @constructor
 * @param truck The truck that is being rendered
 * @param setEditTruck The state of the truck if it is being edited or not.
 * @returns {*} The TruckManagementItem component
 */
function TruckManagementItem({ truck, setEditTruck }) {
	const dispatch = useDispatch();

	const authUser = useSelector(state => state.auth.user);

	// send our edited truck to our actions to persist the edit to the backend
	function handleEdit() {
		const editedTruck = {
			id: truck.equipment.id,
			status: truck.equipment.status,
			type: truck.equipment.type,
			notice: truck.equipment.notice
		};

		setEditTruck(editedTruck);
	}

	const handleDelete = id => {
		dispatch(deleteTruck(id));
	};

	return (
		<TruckMgmtItemDiv>
			<TruckNumberDiv status={truck.equipment.status}>
				{truck.equipment.id}
			</TruckNumberDiv>
			{authUser?.role?.name === SYSTEM_ADMINISTRATOR ? (
				<>
					<TruckStatusBox>{truck.equipment.notice}</TruckStatusBox>
					<ManipTruckManipIconDiv>
						<IconButton
							faClassName="fas fa-edit fa-2x"
							onClick={handleEdit}
							toolTip={"Edit Truck"}
							hoverColor={"blue"}
						/>
						<Confirmation
							confirmationMessage={"Confirm Delete"}
							action={() => handleDelete(truck.equipment.id)}
						>
							{({ confirm }) => (
								<IconButton
									faClassName="fa-trash-alt fa-2x"
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
					<TruckStatusBox>{truck.equipment.notice}</TruckStatusBox>
					<ManipTruckManipIconDiv>
						<IconButton
							faClassName="fas fa-edit fa-2x"
							onClick={handleEdit}
							toolTip={"Edit Truck"}
							hoverColor={"blue"}
						/>
					</ManipTruckManipIconDiv>
				</>
			)}
		</TruckMgmtItemDiv>
	);
}

export default TruckManagementItem;
