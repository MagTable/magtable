import React from "react";
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
	// employees are already sorted by time
	const startTimes = [];

	if (loading) return <h1>Loading Users...</h1>;

	employeeShifts.shifts.forEach(emp => {
		if (!startTimes.includes(emp.startTime)) {
			startTimes.push(emp.startTime); // add the start time if it's not already in the list
		}
	});

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
