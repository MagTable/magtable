import { ListTitle, ListTitleText } from "../../styled/magtable/Titling";
import {
	EmployeeListDiv,
	EmployeeListDivWrapper
} from "../../styled/magtable/ListContent";
import EmployeeLabel from "./EmployeeLabel";
import EmployeeListItemContent from "./EmployeeListItemContent";
import EmployeeListItem from "./EmployeeListItem";
import React, { useState } from "react";

/**
 * @date 2020-02-18
 * @author MJ Kochuk
 * @module Component
 */

/**
 *
 * @constructor
 * @param props
 * @returns {*} The EmployeList component
 */
function EmployeeList({ employees }) {
	console.log(employees);
	return (
		<EmployeeListDivWrapper>
			<ListTitle>
				<ListTitleText>Employees</ListTitleText>
			</ListTitle>

			<EmployeeListDiv>
				{employees.map(employee => (
					<EmployeeListItem key={employee.name} employee={employee} />
				))}
			</EmployeeListDiv>
		</EmployeeListDivWrapper>
	);
}

export default EmployeeList;
