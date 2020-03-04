import React, { useState } from "react";
import PropTypes from "prop-types";
import { ConfirmationBox } from "../../styled/common/Confirmation";
import { ClickCatcher } from "../../styled/common/ClickCatcher";
import {Button} from "../../styled/common/FormControl";

/**
 * @date 2/17/2020
 * @author Arran Woodruff
 * @module Component
 */

/**
 *
 * @param children component that requires confirmation
 * @param action function which will be called upon confirmation
 * @param confirmationMessage message displayed on the confirmation button
 * @param color base color of confirmation button
 * @param hoverColor hover color of confirmation button
 * @returns {*} the Confirmation component
 * @constructor
 */
function Confirmation({
	children,
	action,
	confirmationMessage,
	color,
	hoverColor
}) {
	const [open, setOpen] = useState(false);

	const confirm = () => {
		setOpen(true);
	};

	const handleClick = () => {
		action();
		setOpen(false);
	};

	return (
		<ConfirmationBox color={color} hoverColor={hoverColor}>
			{open && (
				<>
					<ClickCatcher onClick={() => setOpen(false)} />
					<div id={"arrow"} />
					<button id={"confirmButton"} onClick={handleClick}>{confirmationMessage}</button>
				</>
			)}
			{children({ confirm })}
		</ConfirmationBox>
	);
}

Confirmation.propTypes = {
	children: PropTypes.func.isRequired,
	action: PropTypes.func.isRequired,
	confirmationMessage: PropTypes.string.isRequired,
	color: PropTypes.string,
	hoverColor: PropTypes.string
};

export default Confirmation;
