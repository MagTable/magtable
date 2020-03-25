import React from "react";
import {
	GreyTempHolder,
	LaterDiv,
	LaterIcon,
	LaterTitle,
	SideBar,
	SunIcon,
	Temp,
	TempHolder,
	WeatherWording,
	WindArrow,
	WindIcon
} from "../../styled/tv/Weather";

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
			<WeatherWording>Mainly Sunny</WeatherWording>
			<SunIcon className="fas fa-sun"></SunIcon>
			<TempHolder>
				<WeatherWording>High</WeatherWording>
				<Temp>24°</Temp>
			</TempHolder>
			<TempHolder>
				<WeatherWording>Low</WeatherWording>
				<Temp>17°</Temp>
			</TempHolder>
			<GreyTempHolder>
				<WeatherWording>Feels Like</WeatherWording>
				<Temp>22°</Temp>
			</GreyTempHolder>
			<WindIcon className="fas fa-wind"></WindIcon>
			<WeatherWording>43 km/h</WeatherWording>
			<WindArrow className="fas fa-long-arrow-alt-up"></WindArrow>
			<LaterDiv>
				<LaterTitle>Later</LaterTitle>
				<LaterIcon className="far fa-snowflake"></LaterIcon>
				<WeatherWording>20%</WeatherWording>
				<WeatherWording>@ 2PM</WeatherWording>
			</LaterDiv>
		</SideBar>
	);
}

export default WeatherBar;
