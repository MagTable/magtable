import React from "react";
import {
	NoticeWrapper,
	TruckNotice,
	TruckNum,
	TruckNumDiv
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
		<NoticeWrapper>
			<TruckNumDiv>
				<TruckNum>{assignment.equipment.id}</TruckNum>
			</TruckNumDiv>
			<TruckNotice>{assignment.equipment.notice}</TruckNotice>
		</NoticeWrapper>
	);
}

export default ViewNotice;
