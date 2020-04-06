import React, { useEffect, useState } from "react";
import {
	MenuTip,
	MenuTipIcon,
	NavDiv,
	NavIcon,
	NavLink,
	NavPane
} from "../../styled/common/Navigation";
import { BrowserView } from "react-device-detect";
import { useSelector } from "react-redux";
import { MECHANIC, SYSTEM_ADMINISTRATOR } from "../../actions/constants";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * @date 2020-02-09
 * @author MJ Kochuk, Steven Wong
 * @name useWindowSize
 * @category Component/Common
 * @constructor
 */

// Sourced from https://usehooks.com/useWindowSize/ | Author: Gabe Ragland
export function useWindowSize() {
	const isClient = typeof window === "object";

	function getSize() {
		return {
			width: isClient ? window.innerWidth : undefined,
			height: isClient ? window.innerHeight : undefined
		};
	}

	const [windowSize, setWindowSize] = useState(getSize);

	useEffect(() => {
		if (!isClient) {
			return false;
		}

		function handleResize() {
			setWindowSize(getSize());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}); // Empty array ensures that effect is only run on mount and unmount

	return windowSize;
}

/**
 * The menu used for navigating the site. The desktop version has a simple layout with links simply placed in the
 * header, while the mobile version has a folding menu to preserve screen real estate.
 * @name MenuPane
 * @category Component/Common
 * @constructor
 * @param menuOpen dictates whether or not the menu is in the open state
 * @param setMenuOpen changes the value of menuOpen
 * @returns {*} The MenuPane component
 */
function MenuPane({ menuOpen, setMenuOpen }) {
	// Used for mobile, commented until we're ready to work on mobile.
	function toggleMenu() {
		if (menuOpen) {
			setMenuOpen(false);
		} else {
			setMenuOpen(true);
		}
	}

	const size = new useWindowSize();

	const authUser = useSelector(state => state.auth.user);
	const { pathname } = useLocation();
	if (size.width < 1720) {
		return (
			<div>
				<BrowserView>
					<NavDiv>
						<MenuTip onClick={() => toggleMenu()}>
							<MenuTipIcon open={menuOpen} className="fas fa-bars fa-lg" />
						</MenuTip>
						<NavPane onClick={() => toggleMenu()} open={menuOpen}>
							<NavLink
								active={pathname === "/truck/tv" ? 1 : undefined}
								to={"/truck/tv"}
							>
								TV
								<NavIcon className="fas fa-tv" />
							</NavLink>
							{authUser?.role?.name !== MECHANIC && (
								<NavLink active={pathname === "/" ? 1 : undefined} to={"/"}>
									Truck Assignment
									<NavIcon className="fas fa-tasks" />
								</NavLink>
							)}
							<NavLink
								active={pathname === "/truck/all" ? 1 : undefined}
								to={"/truck/all"}
							>
								Manage Trucks
								<NavIcon className="fas fa-truck" />
							</NavLink>
							{/* System Administrators Only */}
							{authUser?.role?.name === SYSTEM_ADMINISTRATOR && (
								<NavLink
									active={pathname === "/user/all" ? 1 : undefined}
									to={"/user/all"}
								>
									Manage Users
									<NavIcon className="fas fa-users" />
								</NavLink>
							)}
							<NavLink to={"/logout"}>
								Log Out
								<NavIcon className="fas fa-sign-out-alt" />
							</NavLink>
						</NavPane>
					</NavDiv>
				</BrowserView>
			</div>
		);
	} else {
		return (
			<BrowserView>
				<NavDiv>
					<NavLink
						active={pathname === "/truck/tv" ? 1 : undefined}
						to={"/truck/tv"}
					>
						TV
						<NavIcon className="fas fa-tv" />
					</NavLink>
					{authUser?.role?.name !== MECHANIC && (
						<NavLink active={pathname === "/" ? 1 : undefined} to={"/"}>
							Truck Assignment
							<NavIcon className="fas fa-tasks" />
						</NavLink>
					)}
					<NavLink
						active={pathname === "/truck/all" ? 1 : undefined}
						to={"/truck/all"}
					>
						Manage Trucks
						<NavIcon className="fas fa-truck" />
					</NavLink>
					{/* System Administrators Only */}
					{authUser?.role?.name === SYSTEM_ADMINISTRATOR && (
						<NavLink
							active={pathname === "/user/all" ? 1 : undefined}
							to={"/user/all"}
						>
							Manage Users
							<NavIcon className="fas fa-users" />
						</NavLink>
					)}
					<NavLink to={"/logout"}>
						Log Out
						<NavIcon className="fas fa-sign-out-alt" />
					</NavLink>
				</NavDiv>
			</BrowserView>
		);
	}
}

MenuPane.propTypes = {
	menuOpen: PropTypes.bool,
	setMenuOpen: PropTypes.func
};

export default MenuPane;
