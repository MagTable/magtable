import React, { useState } from "react";
import PropTypes from "prop-types";
import {
	FilterIcon,
	OverflowMenu,
	OverflowMenuButton
} from "../../styled/magtable/Overflow";
import { ClickCatcher } from "../../styled/common/ClickCatcher";
import { useDispatch } from "react-redux";

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
	refreshEmployees
}) {
	const dispatch = useDispatch();

	const openOverflow = () => {
		setOpen(true);
	};

	function handleClick() {
		setOpen(false);
	}

	return (
		<OverflowMenu color={color} hoverColor={hoverColor}>
			{open && (
				<>
					<ClickCatcher onClick={() => setOpen(false)} />
					<div id={"arrow"} />
					<OverflowMenuButton onClick={filterAMEmployees}>
						{activeFilters[0] ? (
							<FilterIcon className={"fas fa-check"} color={"green"} />
						) : null}
						AM Employees
					</OverflowMenuButton>
					<OverflowMenuButton onClick={filterPMEmployees}>
						{activeFilters[1] ? (
							<FilterIcon className={"fas fa-check"} color={"green"} />
						) : null}
						PM Employees
					</OverflowMenuButton>
					<OverflowMenuButton onClick={filterTechEmployees}>
						{activeFilters[2] ? (
							<FilterIcon className={"fas fa-check"} color={"green"} />
						) : null}
						Technicians
					</OverflowMenuButton>
					<OverflowMenuButton onClick={filterTowerEmployees}>
						{activeFilters[3] ? (
							<FilterIcon className={"fas fa-check"} color={"green"} />
						) : null}
						Tower Staff
					</OverflowMenuButton>
					<OverflowMenuButton onClick={refreshEmployees}>
						<FilterIcon className={"fas fa-sync"} />
						Refresh Employees
					</OverflowMenuButton>
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
