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
import OverflowEmployee from "../_dumbcomponents/OverflowEmployee";

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
	const loading = useSelector(state => state.magtable.loading);
	const [open, setOpen] = useState(false);
	// employees are already sorted by time
	const startTimes = [];

	// used to determine if the app show employees who start before noon, but after midnight
	const [filterAM, setFilterAM] = useState(false);
	// used to determine if the app show employees who start before midnight, but after noon
	const [filterPM, setFilterPM] = useState(false);

	if (loading) return <h1>Loading Users...</h1>;

	employeeShifts.shifts.forEach(emp => {
		if (!startTimes.includes(emp.startTime)) {
			startTimes.push(emp.startTime); // add the start time if it's not already in the list
		}
	});

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

	// determine what filter is applied, then apply the filter and return corresponding boolean value
	function timeFilter(startTime) {
		const start = parseInt(startTime);
		if (filterAM) {
			console.log(filterPM);
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

	return (
		<EmployeeListDivWrapper>
			<ListTitle>
				<ListTitleText>Employees</ListTitleText>
				<IconButton
					faClassName={"fa-sync-alt"}
					color={"white"}
					hoverColor={"grey"}
					onClick={() => dispatch(refreshEmployeeShifts())}
				/>
				<OverflowEmployee
					open={open}
					setOpen={setOpen}
					refreshEmployees={refreshEmployees}
					showAMEmployees={showAMEmployees}
					showPMEmployees={showPMEmployees}
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
				{startTimes.length > 0 ? (
					startTimes.map(
						startTime =>
							timeFilter(startTime) && (
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
							)
					)
				) : (
					<h1>
						No Employee Shifts... <br /> <small>update shift list</small>
					</h1>
				)}
			</EmployeeListDiv>
		</EmployeeListDivWrapper>
	);
};

export default EmployeeList;

// {startTimes.map(
// 	startTime =>
// 		timeFilter(startTime) && (
// 			<div key={startTime}>
// 				<StartTimeSeparator>
// 					<h2>{startTime}</h2>
// 				</StartTimeSeparator>
// 				{employeeShifts.shifts.map(
// 					employee =>
// 						employee.startTime === startTime &&
// 						timeFilter(startTime) && (
// 							<EmployeeListItem key={employee.id} employee={employee} />
// 						)
// 				)}
// 			</div>
// 		)
// )}
