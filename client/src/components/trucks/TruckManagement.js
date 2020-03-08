import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TruckManagementItem from "./TruckManagementItem";
import {
	TruckManagementTitle,
	TruckManagementWrapper,
	TruckManagementListDiv
} from "../../styled/trucks/TruckManagement";
import { getMagTable } from "../../actions/magtable";
import { getTrucks } from "../../actions/truck";

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
		dispatch(getTrucks());
	}, [dispatch]);

	const trucks = useSelector(state => state.trucks);

	console.log(trucks);

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
