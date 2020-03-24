import React, { useEffect, useState } from "react";
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
import { DoubleClickConfirm } from "../../styled/common/FormControl";

/**
 * @date 3/1/2020
 * @author Tom Allcock, Arran Woodruff
 * @module Component
 */

/**
 *
 * @constructor
 * @param props
 * @returns {*} The OverflowEmployee component
 */
function OverflowLocations({ children, color, hoverColor, open, setOpen }) {
	const [clearConfirmation, setClearConfirmation] = useState(false);
	const [clearDisabled, setClearDisabled] = useState(false);

	const [publishConfirmation, setPublishConfirmation] = useState(false);
	const [publishDisabled, setPublishDisabled] = useState(false);

	// monitor the show boolean and clear the confirmations if it's true (when the menu is closed)
	useEffect(() => {
		setClearConfirmation(false);
		setClearDisabled(false);
		setPublishConfirmation(false);
		setPublishDisabled(false);
	}, [open]);

	const CONFIRMATION_DELAY = 2000;

	const dispatch = useDispatch();
	const selectedApron = useSelector(state => state.magtable.selectedApron);
	const magtable = useSelector(state => state.magtable);
	const authUsername = useSelector(state => state.auth.user.username);

	const openOverflow = () => {
		setOpen(true);
	};

	const handleApronSwitch = () => {
		if (selectedApron === EAST_APRON) {
			dispatch(setSelectedApron(WEST_APRON));
		} else {
			dispatch(setSelectedApron(EAST_APRON));
		}
	};

	const handlePublish = () => {
		if (!publishConfirmation) {
			setPublishConfirmation(true);
			setPublishDisabled(true);

			setTimeout(() => {
				setPublishDisabled(false);
			}, CONFIRMATION_DELAY);
		} else {
			dispatch(publishTable(magtable, authUsername));

			setPublishDisabled(false);
			setPublishConfirmation(false);
		}
	};

	const handleClear = () => {
		if (!clearConfirmation) {
			setClearConfirmation(true);
			setClearDisabled(true);

			setTimeout(() => {
				setClearDisabled(false);
			}, CONFIRMATION_DELAY);
		} else {
			dispatch(clearTable());

			setClearDisabled(false);
			setClearConfirmation(false);
		}
	};

	return (
		<OverflowMenu color={color} hoverColor={hoverColor}>
			{open && (
				<>
					<ClickCatcher onClick={() => setOpen(false)} />
					<div id={"arrow"} />
					<div id={"container"}>
						<OverflowMenu>
							<OverflowMenuButton onClick={handleApronSwitch}>
								Apron: {selectedApron}
							</OverflowMenuButton>

							<DoubleClickConfirm
								active={clearConfirmation}
								color={"var(--context-red)"}
							>
								<OverflowMenuButton
									hoverColor={
										clearConfirmation
											? "var(--context-red)"
											: "var(--context-red-light)"
									}
									disabled={clearDisabled}
									onClick={handleClear}
								>
									{clearConfirmation ? "Confirm Clear" : "Clear All"}
								</OverflowMenuButton>
							</DoubleClickConfirm>

							<DoubleClickConfirm
								active={publishConfirmation}
								color={"var(--context-blue)"}
							>
								<OverflowMenuButton
									hoverColor={
										publishConfirmation
											? "var(--context-blue)"
											: "var(--context-blue-light)"
									}
									disabled={publishDisabled}
									onClick={handlePublish}
								>
									{publishConfirmation ? "Confirm Publish" : "Publish"}
								</OverflowMenuButton>
							</DoubleClickConfirm>
						</OverflowMenu>
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
