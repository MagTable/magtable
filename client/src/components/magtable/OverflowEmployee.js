import React, { useState } from "react";
import PropTypes from "prop-types";
import {
	FilterIcon,
	OverflowMenu,
	OverflowMenuButton
} from "../../styled/magtable/Overflow";
import { ClickCatcher } from "../../styled/common/ClickCatcher";
import AddEmployeeShift from "./AddEmployeeShift";
import Modal from "../common/Modal";
import { useSelector } from "react-redux";
import { SYSTEM_ADMINISTRATOR } from "../../actions/constants";
import IconButton from "../common/IconButton";

/**
 * @date 3/1/2020
 * @author Tom Allcock, Arran Woodruff, Steven Wong
 * @category Components/MagTable
 * @param children Children of the component.
 * @param color Color of the Icons
 * @param hoverColor Color when you hover over the icon
 * @param open Open state
 * @param setOpen Changing of the Open State
 * @param activeFilters The currently active filters.
 * @param filterAMEmployees AM Employees
 * @param filterPMEmployees PM Employees
 * @param filterTechEmployees Baylead and Technician Employees
 * @param filterTowerEmployees Tower Employees
 * @param filterManagementEmployees Management Employees
 * @param filterMechanicEmployees Mechanic Employees
 * @param filterTrainerEmployees Trainer Employees
 * @param refreshEmployees Refresh button for Employee List
 * @returns {*} Returns the overflow menu that is used to filter out all the specific information regarding employees and Adding Employees.
 * @constructor
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

	const [showModal, setShowModal] = useState(false);
	const authRole = useSelector(state => state.auth.user.role.name);

	const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);

	return (
		<OverflowMenu color={color} hoverColor={hoverColor}>
			{open && (
				<>
					<ClickCatcher onClick={() => setOpen(false)} />
					<div id={"container"}>
						<div id={"arrow"} />
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
						{authRole === SYSTEM_ADMINISTRATOR && (
							<OverflowMenuButton
								onClick={() => {
									setOpen(false);
									refreshEmployees();
								}}
							>
								<FilterIcon className={"fas fa-sync"} />
								Refresh{" "}
								<IconButton
									nopad
									toolTipSide={"right"}
									toolTip={"This will de-sync the Employee and Truck Lists"}
									color={"var(--context-orange)"}
									faClassName={"fa-exclamation-triangle"}
								/>
							</OverflowMenuButton>
						)}
						<Modal show={showModal} handleClose={handleClose}>
							<AddEmployeeShift setShowModal={setShowModal} />
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
