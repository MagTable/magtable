import React, { useEffect, useState } from "react";
import WeatherBar from "./WeatherBar";
import ViewList from "./ViewList";
import { TvViewContainer, TvViewContent } from "../../styled/tv/ViewList";
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
	const [fullScreen, setFullScreen] = useState(false);

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
	}, [dispatch]);

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
		<TvViewContainer>
			<ListTitle>
				<ListTitleText>
					Assignments
					{historicalMagtable && <span>: {formattedTimePublished}</span>}
				</ListTitleText>
				{authUser.role.name === SYSTEM_ADMINISTRATOR && (
					<AddTruckBtn onClick={handleHistoryClick}>
						{historicalMagtable ? "Current" : "History"}
						<FilterIcon className={"fas fa-calendar-alt"} />
					</AddTruckBtn>
				)}
			</ListTitle>
			<TvViewContent fullScreen={fullScreen}>
				<ViewList fullScreen={fullScreen} setFullScreen={setFullScreen} />
				<WeatherBar />
			</TvViewContent>
			<Modal
				show={showHistoryModal}
				handleClose={() => setShowHistoryModal(false)}
			>
				<MagtableHistorySelector
					handleClose={() => setShowHistoryModal(false)}
				/>
			</Modal>
		</TvViewContainer>
	);
}

export default TVView;
