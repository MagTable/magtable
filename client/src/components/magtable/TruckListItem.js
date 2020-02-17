import React from "react";
import {TruckInfoDiv, TruckListItemDiv, TruckNumberDiv} from "../../styled/magtable/Truck";

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
function TruckListItem(props) {
    return (
        <div>
            <TruckListItemDiv>
                <TruckNumberDiv>
                    1
                </TruckNumberDiv>
                <TruckInfoDiv>

                </TruckInfoDiv>
            </TruckListItemDiv>
        </div>

    )
}

export default TruckListItem;