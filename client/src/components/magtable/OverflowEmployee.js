import React, { useState } from "react";
import PropTypes from "prop-types";
import {
	FilterIcon,
	OverflowMenu,
	OverflowMenuButton
} from "../../styled/magtable/Overflow";
import { ClickCatcher } from "../../styled/common/ClickCatcher";
import AddEmployeeShift from "./AddEmployeeShift";
import Modal from "../modal/Modal";

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
	activeFilters,
	filterAMEmployees,
	filterPMEmployees,
	filterTechEmployees,
	filterTowerEmployees,
	filterManagementEmployees,
	filterMechanicEmployees,
	filterTrainerEmployees,
	refreshEmployees
}) {
	const openOverflow = () => {
		setOpen(true);
	};

	const [showModal, setModal] = useState(false);

	const handleClose = () => setModal(false);
	const handleShow = () => setModal(true);

	return (
		<OverflowMenu color={color} hoverColor={hoverColor}>
			{open && (
				<>
					<ClickCatcher onClick={() => setOpen(false)} />
					<div id={"arrow"} />
					<div id={"container"}>
						<OverflowMenuButton onClick={filterAMEmployees}>
							{activeFilters[0] ? (
								<FilterIcon className={"fas fa-times"} color={"red"} />
							) : (
								<FilterIcon className={"fas fa-check"} color={"green"} />
							)}
							AM Employees
						</OverflowMenuButton>
						<OverflowMenuButton onClick={filterPMEmployees}>
							{activeFilters[1] ? (
								<FilterIcon className={"fas fa-times"} color={"red"} />
							) : (
								<FilterIcon className={"fas fa-check"} color={"green"} />
							)}
							PM Employees
						</OverflowMenuButton>
						<OverflowMenuButton onClick={filterTechEmployees}>
							{activeFilters[2] ? (
								<FilterIcon className={"fas fa-times"} color={"red"} />
							) : (
								<FilterIcon className={"fas fa-check"} color={"green"} />
							)}
							Technicians
						</OverflowMenuButton>
						<OverflowMenuButton onClick={filterTowerEmployees}>
							{activeFilters[3] ? (
								<FilterIcon className={"fas fa-times"} color={"red"} />
							) : (
								<FilterIcon className={"fas fa-check"} color={"green"} />
							)}
							Tower Staff
						</OverflowMenuButton>
						<OverflowMenuButton onClick={filterManagementEmployees}>
							{activeFilters[4] ? (
								<FilterIcon className={"fas fa-times"} color={"red"} />
							) : (
								<FilterIcon className={"fas fa-check"} color={"green"} />
							)}
							Management
						</OverflowMenuButton>
						<OverflowMenuButton onClick={filterMechanicEmployees}>
							{activeFilters[5] ? (
								<FilterIcon className={"fas fa-times"} color={"red"} />
							) : (
								<FilterIcon className={"fas fa-check"} color={"green"} />
							)}
							Mechanics
						</OverflowMenuButton>
						<OverflowMenuButton onClick={filterTrainerEmployees}>
							{activeFilters[6] ? (
								<FilterIcon className={"fas fa-times"} color={"red"} />
							) : (
								<FilterIcon className={"fas fa-check"} color={"green"} />
							)}
							Trainers
						</OverflowMenuButton>
						<OverflowMenuButton
							onClick={() => {
								setOpen(false);
								refreshEmployees();
							}}
						>
							<FilterIcon className={"fas fa-sync"} />
							Refresh
						</OverflowMenuButton>
						<Modal show={showModal} handleClose={handleClose}>
							<AddEmployeeShift />
						</Modal>
						<OverflowMenuButton onClick={handleShow}>
							<FilterIcon className={"fas fa-user-plus"} />
							Add Shift
						</OverflowMenuButton>
					</div>
				</>
			)}
			{children({ openOverflow })}
		</OverflowMenu>
	);
}

OverflowEmployee.propTypes = {
	children: PropTypes.func.isRequired,
	color: PropTypes.string,
	hoverColor: PropTypes.string
};

export default OverflowEmployee;
