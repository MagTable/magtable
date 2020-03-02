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
	color,
	hoverColor,
	open,
	setOpen,
	refreshEmployees,
	showAMEmployees,
	showPMEmployees
}) {
	const dispatch = useDispatch();

	const openOverflow = () => {
		setOpen(true);
	};

	function handleClick() {
		setOpen(false);
	}

	return (
		<OverflowMenuItem color={color} hoverColor={hoverColor}>
			{open && (
				<>
					<ClickCatcher onClick={() => setOpen(false)} />
					<div id={"arrow"} />
					<button1 onClick={showAMEmployees}>AM Employees</button1>
					<button2 onClick={showPMEmployees}>PM Employees</button2>
					<button3 onClick={refreshEmployees}>Refresh Employees</button3>
				</>
			)}
			{children({ openOverflow })}
		</OverflowMenuItem>
	);
}

OverflowEmployee.propTypes = {
	children: PropTypes.func.isRequired,
	color: PropTypes.string,
	hoverColor: PropTypes.string
};

export default OverflowEmployee;
