import React from "react";
import { useSelector } from "react-redux";
import {
	EmployeeListDiv,
	EmployeeListDivWrapper,
	StartTimeSeparator
} from "../../styled/magtable/ListContent";
import {
	ListSubtitle,
	ListTitle,
	ListTitleText
} from "../../styled/magtable/Titling";
import EmployeeListItem from "./EmployeeListItem";
import IconButton from "../common/IconButton";

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
	const employeeShifts = useSelector(state => state.magtable.employeeShifts); // get the employees
	const loading = useSelector(state => state.magtable.loading);
	// employees are already sorted by time
	const startTimes = [];

	if (loading) return <h1>Loading Users...</h1>;

	if (employeeShifts.shifts.length === 0)
		return (
			<h1>
				No Users... <small>update shift list</small>
			</h1>
		);

	employeeShifts.shifts.forEach(emp => {
		if (!startTimes.includes(emp.startTime)) {
			startTimes.push(emp.startTime); // add the start time if it's not already in the list
		}
	});

	return (
		<EmployeeListDivWrapper>
			<ListTitle>
				<ListTitleText>Employees</ListTitleText>
				<ListSubtitle>
					{employeeShifts.scheduleDate} Last Updated:
					{/* NEW LINE */}
					{employeeShifts.lastUpdated}
				</ListSubtitle>
				<IconButton
					faClassName={"fa-sync-alt"}
					color={"white"}
					hoverColor={"grey"}
				/>
			</ListTitle>

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
			</EmployeeListDiv>
		</EmployeeListDivWrapper>
	);
};

export default EmployeeList;
