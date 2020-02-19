import React, { useEffect } from "react";
import { ListTitle, ListTitleText } from "../../styled/magtable/Titling";
import { TowerDiv, TowerMapDiv } from "../../styled/magtable/Maps";
import TowerPosition from "./TowerPosition";
import { useDispatch, useSelector } from "react-redux";
import { getMagTable } from "../../actions/magtable";

/**
 * @date 2020-02-19
 * @author Steven Wong
 * @module Component
 */

/**
 *
 * @constructor
 * @returns {*} The TowerMap component
 */
function TowerMap() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMagTable());
	}, [dispatch]);

	const assignments = useSelector(state => state.magtable.assignments);
	const apron = useSelector(state => state.magtable.selectedApron);

	console.log(apron);

	return (
		<TowerDiv>
			<ListTitle>
				<ListTitleText>Tower</ListTitleText>
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
								position={assignment.equipment.position}
							/>
						)
				)}
			</TowerMapDiv>
		</TowerDiv>
	);
}

export default TowerMap;
