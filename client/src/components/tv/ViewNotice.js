import React from "react";
import {
	NoticeWrapper,
	TruckNotice,
	TruckNum,
	TruckNumDiv
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
		<NoticeWrapper>
			<TruckNumDiv>
				<TruckNum>{assignment.equipment.id}</TruckNum>
			</TruckNumDiv>
			<TruckNotice>{assignment.equipment.notice}</TruckNotice>
		</NoticeWrapper>
	);
}

export default ViewNotice;
