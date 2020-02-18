import React from "react";
import {ListTitle, ListTitleText} from "../../styled/magtable/Titling";
import {TowerDiv, TowerMapDiv} from "../../styled/magtable/Maps";
import TowerPosition from "./TowerPosition";

/**
 * @date 2020-02-17
 * @author MJ Kochuk
 * @module Component
 */

/**
 *
 * @constructor
 * @returns {*} The TowerMap component
 */
function TowerMap({roles}) {
    return (
        <TowerDiv>
            <ListTitle>
                <ListTitleText>
                    Tower
                </ListTitleText>
            </ListTitle>
            <TowerMapDiv>
                {roles.map(role => (
                    <TowerPosition role={role}/>
                ))}
            </TowerMapDiv>
        </TowerDiv>


    )
}

export default TowerMap;