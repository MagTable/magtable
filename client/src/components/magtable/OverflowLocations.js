import React, { useState } from "react";
import PropTypes from "prop-types";
import {
	OverflowMenu,
	OverflowMenuButton
} from "../../styled/magtable/Overflow";
import { ClickCatcher } from "../../styled/common/ClickCatcher";
import {
	clearTable,
	publishTable,
	setSelectedApron
} from "../../actions/magtable";
import { useDispatch, useSelector } from "react-redux";
import { EAST_APRON, WEST_APRON } from "../../actions/constants";
import Modal from "../common/Modal";
import BrixExport from "../brix/BrixExport";
import IconButton from "../common/IconButton";
import Confirmation from "../common/Confirmation";

/**
 * @date 3/1/2020
 * @author Tom Allcock, Arran Woodruff, Steven Wong
 * @category Components/MagTable
 * @param children Children of the Component
 * @param color Color of the Icon
 * @param hoverColor Hover color of icon.
 * @param open Open State of the overflow menu
 * @param setOpen Change the open state of the overflow menu.
 * @returns {*} Returns the overflow menu for Parking Map which holds Clear Table, Publish Table and Apron Switches
 * @constructor
 */
function OverflowLocations({ children, color, hoverColor, open, setOpen }) {
	const dispatch = useDispatch();
	const selectedApron = useSelector(state => state.magtable.selectedApron);
	const magtable = useSelector(state => state.magtable);
	const authUsername = useSelector(state => state.auth.user.username);
	const forecastLow = useSelector(state => state.brix.weather.forecastLow);

	let timePublished = "...";
	if (magtable.timePublished) {
		const date = new Date(magtable.timePublished);
		timePublished =
			date
				.getHours()
				.toString()
				.padStart(2, "0") +
			":" +
			date
				.getMinutes()
				.toString()
				.padStart(2, "0");
	}

	const publishedBy = magtable.publishedBy;

	// todo close overflow on button press? - arran
	const openOverflow = () => {
		setOpen(true);
	};
	const [showModal, setShowModal] = useState(false);

	const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);

	const handleApronSwitch = () => {
		if (selectedApron === EAST_APRON) {
			dispatch(setSelectedApron(WEST_APRON));
		} else {
			dispatch(setSelectedApron(EAST_APRON));
		}
	};

	const handlePublish = () => {
		dispatch(publishTable({ ...magtable, forecastLow }, authUsername));
		handleClose();
	};

	const handleClear = () => {
		dispatch(clearTable());
		handleClose();
	};

	return (
		<OverflowMenu color={color} hoverColor={hoverColor}>
			{open && (
				<>
					<ClickCatcher onClick={() => setOpen(false)} />
					<div id={"container"}>
						<div id={"arrow"} />
						<OverflowMenu>
							<OverflowMenuButton onClick={handleApronSwitch}>
								Apron: {selectedApron}
							</OverflowMenuButton>

							<Confirmation
								confirmationMessage={"Confirm Clear"}
								action={handleClear}
								color={"red"}
								hoverColor={"darkred"}
							>
								{({ confirm }) => (
									<OverflowMenuButton onClick={confirm}>
										Clear Table
									</OverflowMenuButton>
								)}
							</Confirmation>

							<Confirmation
								confirmationMessage={"Confirm Publish"}
								action={handlePublish}
								color={"blue"}
								hoverColor={"darkblue"}
							>
								{({ confirm }) => (
									<OverflowMenuButton onClick={confirm}>
										Publish
										<IconButton
											style={{ float: "right" }}
											nopad
											toolTipSide={"left"}
											color={"var(--context-blue)"}
											faClassName={"fa-info-circle fa-lg"}
											toolTip={`Last published by ${
												publishedBy ? publishedBy : "..."
											}
										at ${timePublished}`}
										/>
									</OverflowMenuButton>
								)}
							</Confirmation>

							<OverflowMenuButton onClick={handleShow}>
								Export Brix Records
							</OverflowMenuButton>
						</OverflowMenu>
						<Modal show={showModal} handleClose={handleClose}>
							<BrixExport setShowModal={setShowModal} />
						</Modal>
					</div>
				</>
			)}
			{children({ openOverflow })}
		</OverflowMenu>
	);
}

OverflowLocations.propTypes = {
	children: PropTypes.func.isRequired,
	color: PropTypes.string,
	hoverColor: PropTypes.string
};

export default OverflowLocations;
