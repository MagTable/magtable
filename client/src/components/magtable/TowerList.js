import React from "react";
import { TowerMapDiv } from "../../styled/magtable/Maps";
import TowerListItem from "./TowerListItem";
import { useSelector } from "react-redux";
import { EAST_APRON, WEST_APRON } from "../../actions/constants";

/**
 * @date 2020-02-19
 * @author MJ Kochuk, Steven Wong
 * @module Component
 */

/**
 *
 * @constructor
 * @returns {*} The TowerList component and sets the tower positions based on the selected Apron
 */
function TowerList({ showAM }) {
	const assignments = useSelector(state => state.magtable.assignments);
	const apron = useSelector(state => state.magtable.selectedApron);

	const towerPositions = assignments.filter(assignment => {
		const equipmentID = assignment.equipment.id;

		// if selected apron is EDA, return EDA positions (id = 1001 - 1010)
		if (apron === EAST_APRON && equipmentID >= 1001 && equipmentID <= 1010)
			return true;

		// if selected apron is WDA, return WDA positions (id = 1011 - 1020)
		if (apron === WEST_APRON && equipmentID >= 1011 && equipmentID <= 1020)
			return true;

		// always return tower spotter position (id == 1000)
		if (equipmentID === 1000) return true;

		// only return tower positions (id >= 1000)
		if (equipmentID >= 1000) return false;

		return null;
	});

	return (
		<TowerMapDiv>
			{towerPositions.map(towerPosition => (
				<TowerListItem
					key={towerPosition.equipment.id}
					assignment={towerPosition}
					showAM={showAM}
				/>
			))}
		</TowerMapDiv>
	);
}

export default React.memo(TowerList);