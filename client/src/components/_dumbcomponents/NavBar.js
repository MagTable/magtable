import React from "react";
import logo from '../../res/Images/aeromag-logo.png';
import {NavDiv, NavButton, NavBtnGroup, AeroLogo} from "../../styled/common/Navigation";

/**
 * @date 2020-02-05
 * @author MJ Kochuk
 * @module Component
 */

/**
 * The main navigation for the website.
 * @constructor
 * @param props See React Documentation
 * @returns {*} The NavBar component
 */
function NavBar(props) {
    return (
        <NavDiv>
            <AeroLogo src={logo}/>
            <NavBtnGroup>
                <NavButton>MagTable</NavButton>
                <NavButton>Quick View</NavButton>
                <NavButton>Login</NavButton>
            </NavBtnGroup>
        </NavDiv>

    )
}

export default NavBar;