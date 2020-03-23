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
	//todo @arran wrong file
	const weatherData = useSelector(state => state.brix.weather.data);
	const brixChart = useSelector(state => state.brix.brixChart);

	let weatherDate = new Date(0);
	weatherDate.setUTCSeconds(weatherData.list[0].dt);

	let forecastLow = 1000; // higher than realistic
	weatherData.list.slice(0, 8).forEach(elem => {
		if (elem.main.temp < forecastLow) forecastLow = elem.main.temp;
	});
	forecastLow = parseInt(forecastLow);

	let recommendedMix = -1;

	brixChart.forEach(record => {
		if (record.lout > forecastLow) {
			recommendedMix = record.recommendedMix;
		}
	});
	console.log(forecastLow, recommendedMix);

	return (
		<NavBarDiv>
			<Link to={"/"}>
				<AeroLogo src={logo} />
			</Link>
			//todo @arran wrong file
			<NavLink>Updated: {weatherDate.toLocaleDateString()}</NavLink>
			<NavLink>Forecast Low: {forecastLow}</NavLink>

			{isAuthenticated && (
				<MenuPane menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			)}
		</NavBarDiv>
	);
}

export default NavBar;
