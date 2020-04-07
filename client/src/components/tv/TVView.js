import React, { useEffect, useState } from "react";
import WeatherBar from "./WeatherBar";
import ViewList from "./ViewList";
import { TVWrap } from "../../styled/tv/ViewList";
import MagtableHistorySelector from "./MagtableHistorySelector";
import Modal from "../common/Modal";
import { useDispatch, useSelector } from "react-redux";
import { ListTitle, ListTitleText } from "../../styled/magtable/Titling";
import { SYSTEM_ADMINISTRATOR } from "../../actions/constants";
import { FilterIcon } from "../../styled/magtable/Overflow";
import { AddTruckBtn } from "../../styled/trucks/TruckManagement";
import { clearHistoricalMagtable } from "../../actions/magtable";

/**
 * The page used on the TV to display assignments and the weather without user input.
 * @date 2020-03-25
 * @author MJ Kochuk
 * @category Components/TV
 * @constructor
 * @param props
 * @returns {*} The TVView component
 */
function TVView(props) {
	const [showHistoryModal, setShowHistoryModal] = useState(false);
	const dispatch = useDispatch();
	const authUser = useSelector(state => state.auth.user);
	const historicalMagtable = useSelector(
		state => state.magtable.historical.magtable
	);

	// clear the historical magtable when the page is unloaded
	useEffect(() => {
		return () => {
			dispatch(clearHistoricalMagtable());
		};
	}, []);

	const timePublished = new Date(historicalMagtable?.timePublished);

	const formattedTimePublished =
		timePublished.toLocaleDateString() +
		" @ " +
		timePublished.toLocaleTimeString();

	const handleHistoryClick = () => {
		if (historicalMagtable) {
			dispatch(clearHistoricalMagtable());
		} else {
			setShowHistoryModal(true);
		}
	};

	return (
		<div>
			<ListTitle>
				<ListTitleText>
					Assignments
					{historicalMagtable && <span>: {formattedTimePublished}</span>}
				</ListTitleText>
				{authUser.role.name === SYSTEM_ADMINISTRATOR && (
					<AddTruckBtn onClick={handleHistoryClick}>
						<FilterIcon className={"fas fa-calendar-alt"} />
						{historicalMagtable ? "Current" : "History"}
					</AddTruckBtn>
				)}
			</ListTitle>
			<TVWrap>
				<ViewList />
				<WeatherBar />
			</TVWrap>
			<Modal
				show={showHistoryModal}
				handleClose={() => setShowHistoryModal(false)}
			>
				<MagtableHistorySelector
					handleClose={() => setShowHistoryModal(false)}
				/>
			</Modal>
		</div>
	);
}

export default TVView;
