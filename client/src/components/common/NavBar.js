import React, { useState } from "react";
import logo from "../../res/Images/YYC Logo2.svg";
import {
	AeroLogo,
	NavBar as NavBarDiv,
	NavDiv
} from "../../styled/common/Navigation";
import MenuPane from "./MenuPane";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import WeatherInfo from "../brix/WeatherInfo";

/**
 * The main navigation for the website.
 * @date 2020-02-05
 * @author MJ Kochuk, Arran Woodruff
 * @name NavBar
 * @category Component/Common
 * @constructor
 * @returns {*} The NavBar component
 */
function NavBar({ wsConnected }) {
	const [menuOpen, setMenuOpen] = useState(false);
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

	return (
		<NavBarDiv>
			<NavDiv>
				<Link to={"/"}>
					<AeroLogo connected={wsConnected} src={logo} />
				</Link>
			</NavDiv>

			{isAuthenticated && (
				<>
					<WeatherInfo />
					<MenuPane menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
				</>
			)}
		</NavBarDiv>
	);
}

export default NavBar;
