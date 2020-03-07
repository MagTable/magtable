import React from "react";
import { useSelector } from "react-redux";
import TruckManagementItem from "./TruckManagementItem";
import {
	TruckManagementTitle,
	TruckManagementWrapper,
	TruckManagementListDiv
} from "../../styled/trucks/TruckManagement";

/**
 * @date 3/5/2020
 * @author Tom Allcock
 * @module Component
 */

/**
 *
 * @constructor
 * @returns {*} The TruckManagement component
 */
function TruckManagement() {
	const assignments = useSelector(state => state.magtable.assignments);

	return (
		<TruckManagementWrapper>
			<TruckManagementTitle>Truck Status + Notices</TruckManagementTitle>
			<TruckManagementListDiv>
				{assignments.map(
					assignment =>
						assignment.equipment.id < 1000 && (
							<TruckManagementItem assignment={assignment} />
						)
				)}
			</TruckManagementListDiv>
		</TruckManagementWrapper>
	);
}

export default TruckManagement;
