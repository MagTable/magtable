import React from "react";
import { Link } from "react-router-dom";
import {
	MenuTip,
	MenuTipIcon,
	NavDiv,
	NavIcon,
	NavLink,
	NavPane
} from "../../styled/common/Navigation";
import { useSelector } from "react-redux";
import { SYSTEM_ADMINISTRATOR } from "../../actions/constants";
import {
	BrowserView,
	MobileView,
	isBrowser,
	isMobile
} from "react-device-detect";

/**
 * @date 2020-02-09
 * @author MJ Kochuk
 * @module Component
 */

/**
 * The menu used for navigating the site. The desktop version has a simple layout with links simply placed in the
 * header, while the mobile version has a folding menu to preserve screen real estate.
 * @constructor
 * @param props
 * @returns {*} The MenuPane component
 */
function MenuPane({ menuOpen, setMenuOpen }) {
	function openMenu() {
		if (menuOpen) {
			setMenuOpen(false);
		} else {
			setMenuOpen(true);
		}
	}

	//Todo make these links go to their respective pages.
	return (
		<div>
			<BrowserView>
				<NavDiv>
					<NavLink to={"/"}>Truck Assignment</NavLink>
					<NavLink to={"/user/all"}>Manage Users</NavLink>
					<NavLink to={"/logout"}>Log Out</NavLink>
				</NavDiv>
			</BrowserView>
			<MobileView>
				<NavDiv>
					<MenuTip onClick={() => openMenu()}>
						<MenuTipIcon
							open={menuOpen}
							className="fas fa-angle-down"
						/>
						Menu
					</MenuTip>
					<NavPane open={menuOpen}>
						<NavLink to={"/"}>
							<NavIcon className="fas fa-truck" />
							Truck Assignment
						</NavLink>
						<NavLink to={"/user/all"}>
							<NavIcon className="fas fa-users" />
							Manage Users
						</NavLink>
						<NavLink to={"/logout"}>
							<NavIcon className="fas fa-logout" />
							Log Out
						</NavLink>
					</NavPane>
				</NavDiv>
			</MobileView>
		</div>
	);
}

export default MenuPane;
