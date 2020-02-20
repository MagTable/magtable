import React from "react";
import {
	EmployeeLabelDiv,
	EmployeeListItemContentDiv,
	EmployeeListItemName,
	EmployeeListItemTime
} from "../../styled/magtable/ListContent";

/**
 * @date 2020-02-18
 * @author MJ Kochuk
 * @module Component
 */

/**
 *
 * @constructor
 * @param props
 * @returns {*} The EmployeeListItemContent component
 */
function EmployeeListItemContent({ employee }) {
	return (
		<EmployeeListItemContentDiv>
			<EmployeeListItemName key={employee.id}>
				{employee.name}
			</EmployeeListItemName>
			<EmployeeListItemTime>
				{employee.startTime} - {employee.endTime}
			</EmployeeListItemTime>
			<EmployeeListItemName>{employee.description}</EmployeeListItemName>
		</EmployeeListItemContentDiv>
	);
}

export default EmployeeListItemContent;
