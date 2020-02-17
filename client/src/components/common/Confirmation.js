import React, { useState } from "react";
import PropTypes from "prop-types";
import { ConfirmationBox } from "../../styled/common/Confirmation";
import { ClickCatcher } from "../../styled/common/ClickCatcher";

function Confirmation({
	children,
	action,
	confirmationMessage,
	color,
	hoverColor
}) {
	const [open, setOpen] = useState(false);

	const confirm = () => {
		setOpen(!open);
	};

	const handleClick = () => {
		action();
		setOpen(!open);
	};

	return (
		<ConfirmationBox color={color} hoverColor={hoverColor}>
			{open && (
				<>
					<ClickCatcher onClick={() => setOpen(false)} />
					<div id={"arrow"} />
					<button onClick={handleClick}>{confirmationMessage}</button>
				</>
			)}
			{children({ confirm })}
		</ConfirmationBox>
	);
}

Confirmation.propTypes = {
	children: PropTypes.func.isRequired,
	action: PropTypes.func.isRequired
};

export default Confirmation;
