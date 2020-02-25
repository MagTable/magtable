import React, { useState } from "react";
import { AssignmentContainer, MapsDiv } from "../../styled/magtable/Maps";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import TowerMap from "./TowerMap";
import TruckMap from "./TruckMap";
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
					<TruckMap />
					<TowerMap showAM={showAM} />
				</MapsDiv>
			</AssignmentContainer>
		</DndProvider>
	);
};

export default AssignmentTable;
