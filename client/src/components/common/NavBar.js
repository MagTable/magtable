import React, { useState } from "react";
import logo from "../../res/Images/NoTextLogo.svg";
import { AeroLogo, NavBar as NavBarDiv } from "../../styled/common/Navigation";
import MenuPane from "./MenuPane";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

/**
 * @date 2020-02-05
 * @author MJ Kochuk
 * @module Component
 */

/**
 * The main navigation for the website.
 * @constructor
 * @returns {*} The NavBar component
 */
function NavBar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
	return (
		<NavBarDiv>
			<Link to={"/"}>
				<AeroLogo src={logo} />
			</Link>
			{isAuthenticated && (
				<MenuPane menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			)}
		</NavBarDiv>
	);
}

export default NavBar;
