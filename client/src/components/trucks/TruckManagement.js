import React from "react";
import { useSelector } from "react-redux";
import TruckManagementItem from "./TruckManagementItem";
import {
	TruckManagementTitle,
	TruckManagementWrapper,
	TruckManagementListDiv,
	EditTruckWrap
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
	const trucks = useSelector(state => state.truck.trucks);

	return (
		<EditTruckWrap>
			<TruckManagementWrapper>
				<TruckManagementTitle>Truck Status + Notices</TruckManagementTitle>
				<TruckManagementListDiv>
					{trucks.map(truck => (
						<TruckManagementItem key={truck.id} truck={truck} />
					))}
				</TruckManagementListDiv>
			</TruckManagementWrapper>
		</EditTruckWrap>
	);
}

export default TruckManagement;
