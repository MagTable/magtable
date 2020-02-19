import React from "react";
import EmployeeListItemContent from "./EmployeeListItemContent";
import EmployeeLabel from "./EmployeeLabel";
import { EmployeeListItemDiv } from "../../styled/magtable/ListContent";

/**
 * @date 2020-02-19
 * @author MJ Kochuk
 * @module Component
 */

/**
 *
 * @constructor
 * @param props
 * @returns {*} The EmployeeListItem component
 */
function EmployeeListItem({ employee }) {
	return (
		<EmployeeListItemDiv key={employee.name} employee={employee}>
			<EmployeeListItemContent employee={employee} />
			{employee.labels.map(label => (
				//Todo pass in the right tooltip message for each label type.
				<EmployeeLabel label={label} toolTip={"Example"} />
			))}
		</EmployeeListItemDiv>
	);
}

export default EmployeeListItem;
