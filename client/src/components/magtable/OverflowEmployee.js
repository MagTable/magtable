import React, { useState } from "react";
import PropTypes from "prop-types";
import { OverflowMenuItem } from "./Overflow";
import { ClickCatcher } from "../../styled/common/ClickCatcher";
import { useDispatch } from "react-redux";
import AddEmployeeShift from "./AddEmployeeShift";
import AddEmployeeShiftModal from "../modal/AddEmployeeShiftModal";

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
	showPMEmployees,
	showTechEmployees,
	showTowerEmployees
}) {
	const dispatch = useDispatch();

	const openOverflow = () => {
		setOpen(true);
	};

	function handleClick() {
		setOpen(false);
	}

	const [showModal, setModal] = useState(false);

	const handleClose = () => setModal(false);
	const handleShow = () => setModal(true);

	return (
		<OverflowMenuItem color={color} hoverColor={hoverColor}>
			{open && (
				<>
					<ClickCatcher onClick={() => setOpen(false)} />
					<div id={"arrow"} />
					<buttonAM onClick={showAMEmployees}>AM Employees</buttonAM>
					<buttonPM onClick={showPMEmployees}>PM Employees</buttonPM>
					<buttonTech onClick={showTechEmployees}>Technicians</buttonTech>
					<buttonTower onClick={showTowerEmployees}>Tower Staff</buttonTower>
					<buttonRefresh onClick={refreshEmployees}>
						Refresh Employees
					</buttonRefresh>
					<AddEmployeeShiftModal show={showModal} handleClose={handleClose}>
						<AddEmployeeShift />
					</AddEmployeeShiftModal>
					<buttonShifts onClick={handleShow}>Add Employee Shift</buttonShifts>
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
