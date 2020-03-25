import React from "react";
import { SideBar, SunIcon } from "../../styled/tv/Weather";

/**
 * @date 2020-03-25
 * @author MJ Kochuk

 * @module Component
 */

/**
 *
 * @constructor
 * @param props
 * @returns {*} The WeatherBar component
 */
function WeatherBar(props) {
	return (
		<SideBar>
			<h1>Thu</h1>
			<h1>03/25</h1>
			<h4>Mainly Sunny</h4>
			<SunIcon className="fas fa-sun"></SunIcon>
		</SideBar>
	);
}

export default WeatherBar;
