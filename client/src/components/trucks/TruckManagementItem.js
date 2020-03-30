import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SYSTEM_ADMINISTRATOR } from "../../actions/constants";
import {
	ManipTruckManipIconDiv,
	TruckListManipulateBlock,
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
		<TruckListManipulateBlock>
			<TruckNumberDiv status={truck.equipment.status}>
				{truck.equipment.id}
			</TruckNumberDiv>
			<TruckStatusBox>{truck.equipment.notice}</TruckStatusBox>
			<ManipTruckManipIconDiv>
				<IconButton
					faClassName="fa-edit fa-lg"
					onClick={handleEdit}
					toolTip="Edit Truck"
					hoverColor="blue"
				/>
				{authUser.role.name === SYSTEM_ADMINISTRATOR && (
					<Confirmation
						confirmationMessage={"Confirm Delete"}
						action={() => handleDelete(truck.equipment.id)}
					>
						{({ confirm }) => (
							<IconButton
								faClassName="fa-trash-alt fa-lg"
								onClick={confirm}
								toolTip="Delete Truck"
								hoverColor="red"
							/>
						)}
					</Confirmation>
				)}
			</ManipTruckManipIconDiv>
		</TruckListManipulateBlock>
	);
}

export default TruckManagementItem;
