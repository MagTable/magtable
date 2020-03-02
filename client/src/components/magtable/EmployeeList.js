import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	EmployeeListDiv,
	EmployeeListDivWrapper,
	EmployeeListItemContentDiv,
	EmployeeListItemDiv,
	EmployeeListItemName,
	EmployeeListItemTime,
	StartTimeSeparator
} from "../../styled/magtable/ListContent";
import { ListTitle, ListTitleText } from "../../styled/magtable/Titling";
import EmployeeListItem from "./EmployeeListItem";
import IconButton from "../common/IconButton";
import { refreshEmployeeShifts } from "../../actions/magtable";
import OverflowEmployee from "./OverflowEmployee";
import { TECHNICIAN_POSITIONS, TOWER_POSITIONS } from "../../actions/constants";

/**
 * @date 2/19/2020
 * @author Tom Allcock, Arran Woodruff
 * @module Component
 */

/**
 * Handles rendering of the employee list in the assignment table.
 *
 * @constructor
 * @returns {*} The EmployeeList component
 */
const EmployeeList = () => {
	const dispatch = useDispatch();
	const employeeShifts = useSelector(state => state.magtable.employeeShifts); // get the employees
	const loading = useSelector(state => state.magtable.shiftsLoading);
	const [open, setOpen] = useState(false);
	// employees are already sorted by time
	const startTimes = [];

	// used to determine if the app shows employees who start before noon, but after midnight, default false to show all times
	const [filterAM, setFilterAM] = useState(false);
	// used to determine if the app shows employees who start before midnight, but after noon, default false to show all times
	const [filterPM, setFilterPM] = useState(false);
	// used to determine if the app shows employees that are part of the technician staff, default true to show all employees
	const [filterTech, setFilterTech] = useState(true);
	// used to determine if the app shows employees that are part of the tower staff, default true to show all employees
	const [filterTower, setFilterTower] = useState(true);

	if (loading) return <h1>Loading Users...</h1>;

	employeeShifts.shifts.forEach(emp => {
		if (!startTimes.includes(emp.startTime)) {
			startTimes.push(emp.startTime); // add the start time if it's not already in the list
		}
	});
	if (!loading) {
		employeeShifts.shifts.forEach(emp => {
			if (!startTimes.includes(emp.startTime)) {
				startTimes.push(emp.startTime); // add the start time if it's not already in the list
			}
		});
	}

	const refreshEmployees = () => {
		// refresh employees upon clicking the button
		dispatch(refreshEmployeeShifts());
		setOpen(false);
	};
	const showAMEmployees = () => {
		// toggle AM filter while making sure the PM filter is off
		setFilterAM(!filterAM);
		setFilterPM(false);
		setOpen(false);
	};
	const showPMEmployees = () => {
		// toggle PM filter while making sure the AM filter is off
		setFilterPM(!filterPM);
		setFilterAM(false);
		setOpen(false);
	};
	const showTechEmployees = () => {
		// toggle the tech filter, no need to make sure that tower filter is off
		setFilterTech(!filterTech);
		setOpen(false);
	};
	const showTowerEmployees = () => {
		// toggle the tower filter, no need to make sure that tech filter is off
		setFilterTower(!filterTower);
		setOpen(false);
	};

	// determine what filter is applied, then apply the filter and return corresponding boolean value
	function timeFilter(startTime) {
		const start = parseInt(startTime);
		if (filterAM) {
			// if we are only showing AM shifts...
			// if startTime is in the morning (AM) then return true here
			if (start >= 0 && start < 1200) {
				return true;
			} else {
				// otherwise don't show it, we don't want it
				return false;
			}
		} else if (filterPM) {
			// if we are only showing PM shifts...
			// if startTime is in the afternoon (PM) then return true here
			if (start >= 1200 && start < 2400) {
				return true;
			} else {
				// otherwise don't show it, we don't want it
				return false;
			}
		} else {
			// we aren't filtering anything, so show everything
			return true;
		}
	}

	function positionFilter(position) {
		if (filterTech && TECHNICIAN_POSITIONS.includes(position)) {
			// if we want to see technicians AND position is included in TECHNICIAN_POSITIONS, return true
			return true;
		} else if (filterTower && TOWER_POSITIONS.includes(position)) {
			// if we want to see tower staff AND position is included in TOWER+POSITIONS, return true
			return true;
		} else {
			// we are filtering off everything, so show nothing
			return false;
		}
	}

	return (
		<EmployeeListDivWrapper>
			<ListTitle>
				<ListTitleText>Employees</ListTitleText>
				<OverflowEmployee
					open={open}
					setOpen={setOpen}
					refreshEmployees={refreshEmployees}
					showAMEmployees={showAMEmployees}
					showPMEmployees={showPMEmployees}
					showTechEmployees={showTechEmployees}
					showTowerEmployees={showTowerEmployees}
				>
					{({ openOverflow }) => (
						<IconButton
							faClassName="fa-bars"
							onClick={openOverflow}
							color={"white"}
							hoverColor={"grey"}
						/>
					)}
				</OverflowEmployee>
			</ListTitle>

			{!loading ? (
				<>
					<EmployeeListItemDiv>
						<EmployeeListItemContentDiv>
							<EmployeeListItemName>
								{employeeShifts.scheduleDate}
							</EmployeeListItemName>
							<EmployeeListItemTime>
								Last Updated:
								{employeeShifts.lastUpdated}
							</EmployeeListItemTime>
						</EmployeeListItemContentDiv>
					</EmployeeListItemDiv>

					<EmployeeListDiv>
						{startTimes.map(startTime => (
							<div key={startTime}>
								<StartTimeSeparator>
									<h2>{startTime}</h2>
								</StartTimeSeparator>
								{employeeShifts.shifts.map(
									employee =>
										employee.startTime === startTime && (
											<EmployeeListItem key={employee.id} employee={employee} />
										)
								)}
							</div>
						))}
						{startTimes.length > 0 ? (
							startTimes.map(startTime => (
								<div key={startTime}>
									<StartTimeSeparator>
										<h2>{startTime}</h2>
									</StartTimeSeparator>
									{employeeShifts.shifts.map(
										employee =>
											employee.startTime === startTime && (
												<EmployeeListItem
													key={employee.id}
													employee={employee}
												/>
											)
									)}
								</div>
							))
						) : (
							<h1>
								No Employee Shifts... <br /> <small>update shift list</small>
							</h1>
						)}
					</EmployeeListDiv>
				</>
			) : (
				<h1>Loading Users...</h1>
			)}
		</EmployeeListDivWrapper>
	);
};

export default EmployeeList;
