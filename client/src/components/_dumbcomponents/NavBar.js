import React, { useState } from "react";
import logo from "../../res/Images/aeromag-logo.png";
import { AeroLogo, HeaderDiv } from "../../styled/common/Navigation";
import MenuPane from "./MenuPane";
import { Link } from "react-router-dom";

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
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<HeaderDiv>
			<Link to={"/"}>
				<AeroLogo src={logo} />
			</Link>
			<MenuPane menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
		</HeaderDiv>
	);
}

export default NavBar;
