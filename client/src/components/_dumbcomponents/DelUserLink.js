import React from "react";
import {DelUserImg} from "../../styled/client/User";

/**
 * @date 2020-02-06
 * @author MJ Kochuk
 * @module Component
 */

/**
 *
 * @constructor
 * @param props
 * @returns {*} The DelUserLink component
 */
function DelUserLink(props) {
    return (
        <DelUserImg className="fas fa-trash-alt"/>
    )
}

export default DelUserLink;