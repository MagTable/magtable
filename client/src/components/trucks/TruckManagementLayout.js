import React from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import TruckManagement from "./TruckManagement";
import { TruckMgmtWrap } from "../../styled/trucks/TruckManagement";

/**
 * @date 03/05/2020
 * @author Steven Wong
 * The layout for the page of the Truck Management Layout.
 * @category Components/Trucks
 * @returns {*} The layout for the page of the Truck Management Layout.
 * @constructor
 */
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
