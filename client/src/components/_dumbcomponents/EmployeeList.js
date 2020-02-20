import { ListTitle, ListTitleText } from "../../styled/magtable/Titling";
import {
	EmployeeListDiv,
	EmployeeListDivWrapper
} from "../../styled/magtable/ListContent";
import React from "react";
import EmployeeListItem from "./EmployeeListItem";

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
	return (
		<EmployeeListDivWrapper>
			<ListTitle>
				<ListTitleText>Employees</ListTitleText>
			</ListTitle>

			<EmployeeListDiv>
				{employees.map(employee => (
					<EmployeeListItem key={employee.id} employee={employee} />
				))}
			</EmployeeListDiv>
		</EmployeeListDivWrapper>
	);
}

export default EmployeeList;
