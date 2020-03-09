//todo Make this similar to AssignmentTable

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTrucks } from "../../actions/truck";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import TruckManagement from "./TruckManagement";
import AddTruck from "./AddTruck";
import {
	TruckMgmtDiv,
	TruckMgmtWrap
} from "../../styled/trucks/TruckManagement";

const TruckManagementLayout = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTrucks());
	}, [dispatch]);
	return (
		<DndProvider backend={Backend}>
			<TruckMgmtWrap>
				<TruckManagement />
				<TruckMgmtDiv>
					<AddTruck />
				</TruckMgmtDiv>
			</TruckMgmtWrap>
		</DndProvider>
	);
};

export default TruckManagementLayout;
