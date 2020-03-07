import React from "react";
import {
	TruckManagementItemDiv,
	TruckIdDiv,
	TruckManagementStatus
} from "../../styled/trucks/TruckManagement";
import { TruckStatusMessage } from "../../styled/magtable/ListContent";

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
function TruckManagementItem({ assignment }) {
	return (
		<TruckManagementItemDiv>
			<TruckIdDiv status={assignment.equipment.status}>
				{assignment.equipment.id}
			</TruckIdDiv>
			<TruckManagementStatus>
				{assignment.equipment.status}
			</TruckManagementStatus>
			{assignment.equipment.notice}
		</TruckManagementItemDiv>
	);
}

export default TruckManagementItem;
