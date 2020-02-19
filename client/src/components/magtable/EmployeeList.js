import React from "react";
import { useSelector } from "react-redux";
import {
	EmployeeListDiv,
	EmployeeListItem,
	EmployeeListItemTime
} from "../../styled/magtable/ListContent";

/**
 * @date 2/19/2020
 * @author Tom Allcock
 * @module Component
 */

/**
 * Handles rendering of the employee list in the assignment table.
 *
 * @constructor
 * @returns {*} The EmployeeList component
 */
const EmployeeList = () => {
	const employees = useSelector(state => state.magtable.employeeShifts); // get the employees
	const unsortedTimes = []; // to store the unsorted start times
	employees.forEach(emp => {
		unsortedTimes.push(emp.startTime); // store all the start times for the employees
	});

	const startTimes = [...new Set(unsortedTimes)]; // only takes in unique time values and put into a new array

	startTimes.sort(); // sort the array so that they are in order

	return (
		<EmployeeListDiv>
			{startTimes.map(startTime => (
				<div name="start time header" key={startTime}>
					<h2>{startTime}</h2>
					{employees.map(
						// for each start time, display relevant employees
						employee =>
							employee.startTime ===
							startTime(
								<EmployeeListItem key={employee.id} employee={employee} />
							)
					)}
				</div>
			))}
		</EmployeeListDiv>
	);
};

export default EmployeeList;
