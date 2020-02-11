import React from "react";
import { Link } from "react-router-dom";
import {
	MenuTip,
	MenuTipIcon,
	NavDiv,
	NavIcon,
	NavPane
} from "../../styled/common/Navigation";
import { useSelector } from "react-redux";
import { SYSTEM_ADMINISTRATOR } from "../../actions/constants";
/**
 * @date 2020-02-09
 * @author MJ Kochuk
 * @module Component
 */

/**
 * The menu used for navigating the site
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

	const roleName = useSelector(state => state.auth?.user?.role?.name);

	// Todo Get transition groups functional
	return (
		<NavDiv>
			<MenuTip onClick={() => openMenu()}>
				<MenuTipIcon open={menuOpen} className="fas fa-angle-down" />
				Menu
			</MenuTip>
			<NavPane open={menuOpen}>
				<Link to={"/"}>
					<NavIcon className="fas fa-home" />
					Home
				</Link>
				{roleName === SYSTEM_ADMINISTRATOR && (
					<Link to={"/user/all/"}>
						<NavIcon className="fas fa-users" />
						Manage Users
					</Link>
				)}
				<Link to="/logout">Logout</Link>
			</NavPane>
		</NavDiv>
	);
}

export default MenuPane;
