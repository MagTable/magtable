import React, { useState } from "react";
import WeatherBar from "./WeatherBar";
import ViewList from "./ViewList";
import { TVWrap } from "../../styled/tv/ViewList";
import MagtableHistorySelector from "../magtable/MagtableHistorySelector";
import Modal from "../common/Modal";

/**
 * @date 2020-03-25
 * @author MJ Kochuk
 * @category Components/TV
 * @constructor
 * @param props
 * @returns {*} The TVView component
 */
function TVView(props) {
	const [showHistoryModal, setShowHistoryModal] = useState(false);

	return (
		<>
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
		</>
	);
}

export default TVView;
