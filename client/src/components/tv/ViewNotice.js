import React from "react";
import {
	NoticeWrapper,
	TruckNotice,
	TruckNum,
	TruckNumDiv,
	ViewTruckNotice,
	ViewTruckNoticeListItem,
	ViewTruckNumber
} from "../../styled/tv/ViewList";

/**
 * @date 2020-04-01
 * @author MJ Kochuk
 * @module Component
 */

/**
 * Displays individual notices for trucks with their IDs.
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
