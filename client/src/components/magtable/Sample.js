import React from "react";

/*
    Date: 2020-02-05
    Author: MJ Kochuk
*/

/**
 * To check that code template is working.
 * @constructor
 * @param props See React Documentation
 * @returns {*} The Sample component
 * @module Component
 */
function Sample(props) {
    return (
        <p onClick={() => clicked(5)}>Hello</p>
    )
}

/**
 * Sends the ID somewhere important.
 * @param {number} id The identification number
 */
function clicked(id){

}

export default Sample;