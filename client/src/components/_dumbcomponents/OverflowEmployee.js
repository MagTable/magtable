import React, { useState } from "react";
import PropTypes from "prop-types";
import { OverflowMenuItem } from "./Overflow";
import { ClickCatcher } from "../../styled/common/ClickCatcher";
import { useDispatch } from "react-redux";
import { refreshEmployeeShifts } from "../../actions/magtable";

/**
 * @date 3/1/2020
 * @author Tom Allcock
 * @module Component
 */

/**
 *
 * @constructor
 * @param props
 * @returns {*} The OverflowEmployee component
 */
function OverflowEmployee({
	children,
	overflowAction,
	action,
	color,
	hoverColor
}) {
	const [open, setOpen] = useState(false);

	const dispatch = useDispatch();

	const openOverflow = () => {
		setOpen(true);
	};

	const handleClick = () => {
		action();
		setOpen(false);
	};

	return (
		<OverflowMenuItem color={color} hoverColor={hoverColor}>
			{open && (
				<>
					<ClickCatcher onClick={() => setOpen(false)} />
					<div id={"arrow"} />
					<button onClick={handleClick}>{overflowAction}</button>
				</>
			)}
			{children({ openOverflow })}
		</OverflowMenuItem>
	);
}

OverflowEmployee.propTypes = {
	children: PropTypes.func.isRequired,
	overflowActions: PropTypes.func.isRequired,
	color: PropTypes.string,
	hoverColor: PropTypes.string
};

export default OverflowEmployee;
