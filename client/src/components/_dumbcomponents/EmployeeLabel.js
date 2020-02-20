import React from "react";
import { EmployeeLabelDiv } from "../../styled/magtable/ListContent";

/**
 * @date 2020-02-18
 * @author MJ Kochuk
 * @module Component
 */

// Todo get the tooltip working.

/**
 *
 * @constructor
 * @param props
 * @returns {*} The EmployeeLabel component
 */
function EmployeeLabel({ label }) {
	return <EmployeeLabelDiv label={label} />;
}

export default EmployeeLabel;
