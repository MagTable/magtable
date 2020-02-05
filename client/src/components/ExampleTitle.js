import CoolTitleExample from "../styled/coolTitleExample";
import React from "react";

/**
 * Title - Test title for the main page that contains a link to a cool video. Should be replaced once development begins.
 * @param props See React documentation
 * @returns {*} The Title component
 * @constructor
 */
function Title(props) {
    return (
        <CoolTitleExample>
            <a href={'https://www.youtube.com/watch?v=aV8kMOXPoZE'}>LETS GET THIS DONE, BOYS</a>
        </CoolTitleExample>
    )
}

/**
 * x - This is an example of type checking.
 * @type {string}
 */
var x = "hello";

/**
 *
 * @type {{id: number, text: string}}
 */
const todo = {
    id: 1,
    text: 'Hello',
}

export default Title;