import React, {useState} from 'react';
import logo from '../../res/Images/aeromag-logo.png';
import {
	NavDiv,
	NavButton,
	NavBtnGroup,
	AeroLogo, HeaderDiv,
} from '../../styled/common/Navigation';
import MenuPane from "./MenuPane";

/**
 * @date 2020-02-05
 * @author MJ Kochuk
 * @module Component
 */

// const [menuOpen, setMenuOpen] = useState(false);

/**
 * The main navigation for the website.
 * @constructor
 * @param props See React Documentation
 * @returns {*} The NavBar component
 */
function NavBar(props) {
	return (
		<HeaderDiv>
			<AeroLogo src={logo}/>
			<MenuPane/>
			{/*<NavBtnGroup>*/}
			{/*	<NavButton>MagTable</NavButton>*/}
			{/*	<NavButton>Quick View</NavButton>*/}
			{/*	<NavButton>Login</NavButton>*/}
			{/*</NavBtnGroup>*/}
		</HeaderDiv>
	);
}

export default NavBar;
