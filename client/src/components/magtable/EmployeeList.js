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
	const employees = useSelector(state => state.employee.employees); // get the employees
	const startTimes = useSelector(state => state.employee.startTimes); // get the unique start times

	return (
		<EmployeeListDiv>
			{startTimes.map(startTime => (
				<EmployeeListItemTime key={startTime}><!-- is this the right div? -->
					<h2>{startTime}</h2>
					{employees.map( // for each start time, display relevant employees
						employee =>
							employee.startTime ===
							startTime(
								<EmployeeListItem key={employee.id} employee={employee} />
							)
					)}
				</EmployeeListItemTime>
			))}
		</EmployeeListDiv>
	);
};

export default EmployeeList;
