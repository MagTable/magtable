import React, { useState } from "react";
import logo from "../../res/Images/WhiteTextLogo.svg";
import {
	AeroLogo,
	NavBar as NavBarDiv,
	NavLink
} from "../../styled/common/Navigation";
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
	//todo @arran wrong file
	const weather = useSelector(state => state.brix.weather);
	const brixChart = useSelector(state => state.brix.brixChart);

	let weatherDate;
	let forecastLow;

	if (!weather.loading) {
		weatherDate = new Date(0);
		weatherDate.setUTCSeconds(weather.data.list[0].dt);

		forecastLow = 1000; // higher than realistic
		weather.data.list.slice(0, 8).forEach(elem => {
			if (elem.main.temp < forecastLow) forecastLow = elem.main.temp;
		});
		forecastLow = parseInt(forecastLow);

		let recommendedMix = -1;

		brixChart.forEach(record => {
			if (record.lout > forecastLow) {
				recommendedMix = record.recommendedMix;
			}
		});
	}

	return (
		<NavBarDiv>
			<Link to={"/"}>
				<AeroLogo src={logo} />
			</Link>

			{isAuthenticated && (
				<>
					{!weather.loading && (
						<>
							<NavLink>Updated: {weatherDate.toLocaleDateString()}</NavLink>
							<NavLink>Forecasted Low: {forecastLow}</NavLink>
						</>
					)}
					<MenuPane menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
				</>
			)}
		</NavBarDiv>
	);
}

export default NavBar;
