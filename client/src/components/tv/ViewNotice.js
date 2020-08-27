import React from "react";
import {
	ViewTruckNotice,
	ViewTruckNoticeListItem,
	ViewTruckNumber
} from "../../styled/tv/ViewList";

/**
 * Displays individual notices for trucks with their IDs.
 * @date 2020-04-01
 * @author MJ Kochuk
 * @category Components/TV
 * @constructor
 * @param props
 * @returns {*} The ViewNotice component
 */
function ViewNotice({ assignment }) {
	return (
		<ViewTruckNoticeListItem>
			<ViewTruckNumber>
				<h1>{assignment.equipment.id}</h1>
			</ViewTruckNumber>
			<ViewTruckNotice>{assignment.equipment.notice}</ViewTruckNotice>
		</ViewTruckNoticeListItem>
	);
}

export default ViewNotice;
