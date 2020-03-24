import React from "react";
import { NavDiv, NavLink } from "../../styled/common/Navigation";
import { useSelector } from "react-redux";
import { SYSTEM_ADMINISTRATOR } from "../../actions/constants";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * @date 2020-02-09
 * @author MJ Kochuk
 * @module Component
 */

/**
 * The menu used for navigating the site. The desktop version has a simple layout with links simply placed in the
 * header, while the mobile version has a folding menu to preserve screen real estate.
 * @constructor
 * @param menuOpen dictates whether or not the menu is in the open state
 * @param setMenuOpen changes the value of menuOpen
 * @returns {*} The MenuPane component
 */
function MenuPane({ menuOpen, setMenuOpen }) {
	// Used for mobile, commented until we're ready to work on mobile.
	// function toggleMenu() {
	// 	if (menuOpen) {
	// 		setMenuOpen(false);
	// 	} else {
	// 		setMenuOpen(true);
	// 	}
	// }

	const authUser = useSelector(state => state.auth.user);
	const { pathname } = useLocation();

	return (
		<NavDiv>
			<NavLink
				active={pathname === "/truck/all" ? 1 : undefined}
				to={"/truck/all"}
			>
				Manage Trucks
			</NavLink>
			<NavLink active={pathname === "/" ? 1 : undefined} to={"/"}>
				Truck Assignment
			</NavLink>
			{/* System Administrators Only */}
			{authUser?.role?.name === SYSTEM_ADMINISTRATOR && (
				<NavLink
					active={pathname === "/user/all" ? 1 : undefined}
					to={"/user/all"}
				>
					Manage Users
				</NavLink>
			)}
			<NavLink to={"/logout"}>Log Out</NavLink>
		</NavDiv>
	);
}

MenuPane.propTypes = {
	menuOpen: PropTypes.bool,
	setMenuOpen: PropTypes.func
};

export default MenuPane;
