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
import { SampleWeather as Weather } from "../../res/test_data/magtable";

/**
 * @date 2020-03-25
 * @author MJ Kochuk
 * @category Components/TV
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
			<SunIcon className="fas fa-sun" />
			<TempHolder>
				<WeatherWording>High</WeatherWording>
				<Temp>{Math.round(Weather.list[0].main.temp_max)}°</Temp>
			</TempHolder>
			<TempHolder>
				<WeatherWording>Low</WeatherWording>
				<Temp>{Math.round(Weather.list[0].main.temp_min)}°</Temp>
			</TempHolder>
			<GreyTempHolder>
				<WeatherWording>Feels Like</WeatherWording>
				<Temp>{Math.round(Weather.list[0].main.feels_like)}°</Temp>
			</GreyTempHolder>
			<WindIcon className="fas fa-wind" />
			<WeatherWording>43 km/h</WeatherWording>
			<WindArrow className="fas fa-long-arrow-alt-up" />
			<LaterDiv>
				<LaterTitle>Later</LaterTitle>
				<LaterIcon className="far fa-snowflake" />
				<WeatherWording>20%</WeatherWording>
				<WeatherWording>@ 2PM</WeatherWording>
			</LaterDiv>
		</SideBar>
	);
}

export default WeatherBar;
