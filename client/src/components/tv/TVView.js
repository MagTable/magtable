import React, { useState } from "react";
import WeatherBar from "./WeatherBar";
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
			<WeatherBar />
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
