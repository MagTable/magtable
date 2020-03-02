import React from "react";
import { ListTitle, ListTitleText } from "../../styled/magtable/Titling";
import { TowerDiv, TowerMapDiv } from "../../styled/magtable/Maps";
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
 * @returns {*} The TowerMap component and sets the tower positions based on the selected Apron
 */
function TowerMap({ showAM }) {
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
		<TowerDiv>
			<ListTitle>
				<ListTitleText>
					{apron === EAST_APRON && "East Tower"}
					{apron === WEST_APRON && "West Tower"}
				</ListTitleText>
			</ListTitle>
			<TowerMapDiv>
				{towerPositions.map(towerPosition => (
					<TowerListItem
						key={towerPosition.equipment.id}
						assignment={towerPosition}
						showAM={showAM}
						shift
					/>
				))}
			</TowerMapDiv>
		</TowerDiv>
	);
}

export default React.memo(TowerMap);