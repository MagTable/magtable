import React, { useState } from "react";
import { ListTitle, ListTitleText } from "../../styled/magtable/Titling";
import TruckListItem from "../magtable/TruckListItem";
import {
	TruckListDiv,
	TruckListDivWrapper,
	TruckListManipDiv
} from "../../styled/magtable/ListContent";
import { useSelector } from "react-redux";
import Switch from "react-switch";
import {
	ToggleLabelLeft,
	ToggleLabelLeftNotice,
	ToggleLabelRight,
	ToggleLabelRightNotice
} from "../../styled/common/FormControl";

/**
 * @date 2020-02-17
 * @author MJ Kochuk
 * @module Component
 */

/**
 * Rendered on the Truck Assignment page, displays all available trucks, the employees assigned to each (two AM and two
 * PM slots for employees) while color-coding each truck to represent their operational status. User can expand and
 * contract notices on all trucks and swap between displaying AM employees and PM employees. Trucks are draggable for
 * assigning them to locations in the LocationMap.
 *
 * @constructor
 * @returns {*} The TruckList component
 */
function TruckList({ showAM, setShowAM }) {
	const [noticesOpen, setNoticesOpen] = useState(false);

	const assignments = useSelector(state => state.magtable.assignments);

	return (
		<TruckListDivWrapper>
			<ListTitle>
				<ListTitleText>Trucks</ListTitleText>
				<TruckListManipDiv>
					{/*<TruckListButton onClick={() => setNoticesOpen(!noticesOpen)}>*/}
					{/*	Show Notices*/}
					{/*</TruckListButton>*/}

					<Switch
						onChange={() => setNoticesOpen(!noticesOpen)}
						checked={noticesOpen !== true}
						offColor={"#161616"}
						onColor={"#161616"}
						onHandleColor={"#bfb8ad"}
						offHandleColor={"#bfb8ad"}
						checkedIcon={
							<ToggleLabelLeftNotice>Show Notices</ToggleLabelLeftNotice>
						}
						uncheckedIcon={
							<ToggleLabelRightNotice>Hide Notices</ToggleLabelRightNotice>
						}
						width={150}
					/>

					<Switch
						onChange={() => setShowAM(!showAM)}
						checked={showAM === true}
						offColor={"#414244"}
						onColor={"#414244"}
						checkedIcon={<ToggleLabelLeft>AM</ToggleLabelLeft>}
						uncheckedIcon={<ToggleLabelRight>PM</ToggleLabelRight>}
						width={80}
					/>
				</TruckListManipDiv>
			</ListTitle>
			<TruckListDiv>
				{assignments.map(
					assignment =>
						assignment.equipment.id < 1000 && (
							<TruckListItem
								noticeOpen={noticesOpen}
								key={assignment.equipment.id}
								assignment={assignment}
								showAM={showAM}
								shift
							/>
						)
				)}
			</TruckListDiv>
		</TruckListDivWrapper>
	);
}

export default React.memo(TruckList);