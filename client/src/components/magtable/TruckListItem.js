import React from "react";
import {
    TruckInfoDiv,
    TruckListItemDiv,
    TruckListItemEmployee, TruckListItemEmployeeList,
    TruckListItemLocation,
    TruckNumberDiv
} from "../../styled/magtable/ListContent";

/**
 * @date 2020-02-17
 * @author MJ Kochuk
 * @module Component
 */

/**
 *
 * @constructor
 * @param props
 * @returns {*} The TruckListItem component
 */
function TruckListItem({truck}) {
    let colorCode;

    // Sets the color for the TruckNumberDiv based on the status of the truck
    switch (truck.status) {
        case "GO":{
            colorCode = '--context-green'; // Operational
            break;
        }
        case "INOP":{
            colorCode = '--context-red'; // Inoperable
            break;
        }
        case "CON":{
            colorCode = '--context-blue'; // Conditional
            break;
        }
        case "OOS":{
            colorCode = '--context-grey'; // Out of service
            break;
        }
        default:{
            // If an unknown tuck status is provided.
        }
    }

    return (
        <div>
            <TruckListItemDiv>
                <TruckNumberDiv colorCode={colorCode}>
                    {truck.id}
                </TruckNumberDiv>
                <TruckInfoDiv>
                    <TruckListItemEmployeeList>
                        {truck.employees.map(employee =>(
                            <TruckListItemEmployee>
                                {employee}
                            </TruckListItemEmployee>
                        ))}
                    </TruckListItemEmployeeList>

                    <TruckListItemLocation>
                        {truck.location}
                    </TruckListItemLocation>
                </TruckInfoDiv>
            </TruckListItemDiv>
        </div>

    )
}

export default TruckListItem;