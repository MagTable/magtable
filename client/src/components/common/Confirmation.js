import React, { useState } from "react";
import PropTypes from "prop-types";
import { ConfirmationBox } from "../../styled/common/Confirmation";
import { ClickCatcher } from "../../styled/common/ClickCatcher";

/**
 * @date 2/17/2020
 * @author Arran Woodruff, Steven Wong
 * @module Component
 */

/**
 *
 * @param children Component that requires confirmation
 * @param action Function which will be called upon confirmation
 * @param confirmationMessage Message displayed on the confirmation button
 * @param color Base color of confirmation button
 * @param hoverColor Hover color of confirmation button
 * @returns {*} The Confirmation component
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
					<button id={"confirmButton"} onClick={handleClick}>
						{confirmationMessage}
					</button>
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
