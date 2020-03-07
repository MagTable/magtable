import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TruckManagementItem from "./TruckManagementItem";
import {
	TruckManagementTitle,
	TruckManagementWrapper,
	TruckManagementListDiv
} from "../../styled/trucks/TruckManagement";
import { getMagTable } from "../../actions/magtable";

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
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMagTable());
	}, [dispatch]);

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
