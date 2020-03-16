//todo Make this similar to AssignmentTable

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTrucks } from "../../actions/truck";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import TruckManagement from "./TruckManagement";
import { TruckMgmtWrap } from "../../styled/trucks/TruckManagement";

const TruckManagementLayout = () => {
	return (
		<DndProvider backend={Backend}>
			<TruckMgmtWrap>
				<TruckManagement />
			</TruckMgmtWrap>
		</DndProvider>
	);
};

export default TruckManagementLayout;
