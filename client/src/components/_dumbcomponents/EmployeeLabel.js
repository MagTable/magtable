import React from "react";
import {EmployeeLabelDiv} from "../../styled/magtable/ListContent";
import {IconButton as StyledIconButton} from "../../styled/common/IconButton";
import { BrowserView } from "react-device-detect";

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
function EmployeeLabel({label, toolTip}) {
    return (
                <EmployeeLabelDiv label={label}/>
    )
}

export default EmployeeLabel;