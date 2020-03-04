import React, { useState } from "react";
import { AssignmentContainer, MapsDiv } from "../../styled/magtable/Maps";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import TowerMap from "./TowerList";
import ParkingLocationMap from "./ParkingLocationMap";
import EmployeeList from "./EmployeeList";
import TruckList from "./TruckList";

/**
 * Placeholder component to assist in displaying routing
 * @constructor
 */
const AssignmentTable = () => {
	const [showAM, setShowAM] = useState(true);

	return (
		<DndProvider backend={Backend}>
			<AssignmentContainer>
				<EmployeeList />
				<TruckList showAM={showAM} setShowAM={setShowAM} />
				<MapsDiv>
					<ParkingLocationMap />
					<TowerMap showAM={showAM} />
				</MapsDiv>
			</AssignmentContainer>
		</DndProvider>
	);
};

export default AssignmentTable;
