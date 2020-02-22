import React, { useEffect } from "react";
import { ListTitle, ListTitleText } from "../../styled/magtable/Titling";
import { TowerDiv, TowerMapDiv } from "../../styled/magtable/Maps";
import TowerPosition from "../_dumbcomponents/TowerPosition";
import { useDispatch, useSelector } from "react-redux";
import { getMagTable } from "../../actions/magtable";

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
function TowerMap(displayedTime) {
	const dispatch = useDispatch();

	const assignments = useSelector(state => state.magtable.assignments);
	const apron = useSelector(state => state.magtable.selectedApron);

	return (
		<TowerDiv>
			<ListTitle>
				<ListTitleText>
					{apron === "EDA" ? "East Tower" : "West Tower"}
				</ListTitleText>
			</ListTitle>
			<TowerMapDiv>
				{assignments.map(
					assignment =>
						assignment.equipment.id >= 1000 &&
						(apron === "EDA"
							? assignment.equipment.id < 1010
							: assignment.equipment.id > 1010 ||
							  assignment.equipment.id === 1000) && (
							<TowerPosition
								key={assignment.equipment.id}
								assignment={assignment}
								displayedTime={displayedTime}
							/>
						)
				)}
			</TowerMapDiv>
		</TowerDiv>
	);
}

export default TowerMap;
