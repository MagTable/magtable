import React from "react";
import { useSelector } from "react-redux";
import TruckManagementItem from "./TruckManagementItem";
import {
	TruckManagementWrapper,
	TruckManagementListDiv,
	EditTruckWrap,
	TruckMgmtDiv
} from "../../styled/trucks/TruckManagement";
import { ListTitle, ListTitleText } from "../../styled/magtable/Titling";

/**
 * @date 3/5/2020
 * @author Tom Allcock, MJ Kochuk
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
			<TruckMgmtDiv>
				<ListTitle>
					<ListTitleText>Truck Status + Notices</ListTitleText>
				</ListTitle>
				<TruckManagementListDiv>
					{trucks.map(truck => (
						<TruckManagementItem key={truck.id} truck={truck} />
					))}
				</TruckManagementListDiv>
			</TruckMgmtDiv>
		</EditTruckWrap>
	);
}

export default TruckManagement;
