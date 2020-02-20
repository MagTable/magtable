import React from "react";
import { useSelector } from "react-redux";
import {
	EmployeeListDiv,
	EmployeeListDivWrapper
} from "../../styled/magtable/ListContent";
import { ListTitle, ListTitleText } from "../../styled/magtable/Titling";
import EmployeeListItem from "../_dumbcomponents/EmployeeListItem";
import { useDrag } from "react-dnd";
import { setEquipmentEmployee } from "../../actions/magtable";
import { SET_EQUIPMENT_EMPLOYEE } from "../../actions/constants";

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
	// employees are already sorted by time
	const startTimes = [];

	employees.forEach(emp => {
		if (!startTimes.includes(emp.startTime)) {
			startTimes.push(emp.startTime); // add the start time if it's not already in the list
		}
	});

	return (
		<EmployeeListDivWrapper>
			<ListTitle>
				<ListTitleText>Employees</ListTitleText>
			</ListTitle>

			<EmployeeListDiv>
				{startTimes.map(startTime => (
					<div key={startTime}>
						<h2>{startTime}</h2>
						{employees.map(
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
