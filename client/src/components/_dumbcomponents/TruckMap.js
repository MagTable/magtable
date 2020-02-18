import React from "react";
import {ListTitle, ListTitleText} from "../../styled/magtable/Titling";
import {TruckMapDiv} from "../../styled/magtable/Maps";

/**
 * @date 2020-02-17
 * @author MJ Kochuk
 * @module Component
 */

/**
 *
 * @constructor
 * @param props
 * @returns {*} The TruckMap component
 */
function TruckMap(props) {

    return (
        <TruckMapDiv>
            <ListTitle>
                <ListTitleText>
                    Parking Locations
                </ListTitleText>
            </ListTitle>
        </TruckMapDiv>
    )
}

export default TruckMap;