import React from "react";
import {
	TruckManagementItemDiv,
	TruckIdDiv,
	TruckManagementStatus
} from "../../styled/trucks/TruckManagement";

/**
 * @date 3/5/2020
 * @author Tom Allcock
 * @module Component
 */

/**
 *
 * @constructor
 * @param props
 * @returns {*} The TruckManagementItem component
 */
function TruckManagementItem({ truck }) {
	return (
		<TruckManagementItemDiv>
			<TruckIdDiv status={truck.status}>{truck.id}</TruckIdDiv>
			<TruckManagementStatus>{truck.status}</TruckManagementStatus>
			{truck.notice}

			<button type={"submit"}>EDIT BUTTON</button>
		</TruckManagementItemDiv>
	);
}

export default TruckManagementItem;
