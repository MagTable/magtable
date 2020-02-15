import React, { useState } from "react";
import PropTypes from "prop-types";
import { ConfirmationBox } from "../../styled/common/Confirmation";
import { ClickCatcher } from "../../styled/common/ClickCatcher";

function Confirmation({ children, action, confirmationMessage }) {
	const [open, setOpen] = useState(false);

	const confirm = () => {
		setOpen(!open);
	};

	return (
		<ConfirmationBox>
			{open && (
				<>
					<ClickCatcher onClick={() => setOpen(false)} />
					<div id={"arrow"} />
					<button onClick={action}>{confirmationMessage}</button>
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
