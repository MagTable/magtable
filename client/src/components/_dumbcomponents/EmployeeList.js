import React from "react";
import {ListTitle, ListTitleText} from "../../styled/magtable/Titling";
import {EmployeeListDiv, EmployeeListDivWrapper, EmployeeListItem} from "../../styled/magtable/ListContent";
import EmployeeLabel from "./EmployeeLabel";
import EmployeeListItemContent from "./EmployeeListItemContent";

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
function EmployeeList({employees}) {
    console.log(employees);
    return (
        <EmployeeListDivWrapper>
            <ListTitle>
                <ListTitleText>
                    Employees
                </ListTitleText>
            </ListTitle>

            <EmployeeListDiv>
                {employees.map(employee => (
                    <EmployeeListItem key={employee.name}>
                        <EmployeeListItemContent employee={employee}/>
                        {employee.labels.map(label => (
                            //Todo pass in the right tooltip message for each label type.
                            <EmployeeLabel label={label} toolTip={'Example'}/>
                        ))}
                    </EmployeeListItem>
                ))}
            </EmployeeListDiv>
        </EmployeeListDivWrapper>

    )
}

export default EmployeeList;