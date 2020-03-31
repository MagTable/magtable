import React from "react";
import {
	GreyTempHolder,
	LaterDiv,
	LaterIcon,
	LaterTitle,
	NowTitle,
	SideBar,
	SunIcon,
	Temp,
	TempHolder,
	WeatherWording,
	WindArrow,
	WindIcon
} from "../../styled/tv/Weather";
import { useSelector } from "react-redux";
import { useWindowSize } from "../common/MenuPane";

function getDate() {
	const date = new Date();
	const month = date.getMonth();
	const day = date.getDate();
	return ("0" + (month + 1)).slice(-2) + "/" + ("0" + day).slice(-2);
}

/**
 *
 * Function to translate the information to the current day in string.
 *
 * @date 2020-03-30
 * @author Steven Wong
 * @Category Components/TV
 * @return {string} Current Day Shortened to 3 Letters
 */
function getDay() {
	const date = new Date();
	const currentDay = date.toLocaleDateString("en-CA", { weekday: "long" });
	return currentDay.substr(0, 3);
}

/**
 * @date 2020-03-25
 * @author MJ Kochuk
 * @category Components/TV
 * @constructor
 * @param props
 * @returns {*} The WeatherBar component
 */
function WeatherBar(props) {
	const { weather } = useSelector(state => state.brix);

	return (
		<SideBar>
			<h1>{getDay()}</h1>
			<h1>{getDate()}</h1>
			<LaterDiv>
				<NowTitle>Now</NowTitle>
			</LaterDiv>
			<WeatherWording>{weather.description}</WeatherWording>
			<SunIcon className="fas fa-sun" />
			<TempHolder>
				<WeatherWording>High</WeatherWording>
				<Temp>{weather.forecastHigh}°</Temp>
			</TempHolder>
			<TempHolder>
				<WeatherWording>Low</WeatherWording>
				<Temp>{weather.forecastLow}°</Temp>
			</TempHolder>
			<GreyTempHolder>
				<WeatherWording>Feels Like</WeatherWording>
				<Temp>{weather.feelsLike}°</Temp>
			</GreyTempHolder>
			<WindIcon className="fas fa-wind" />
			<WeatherWording>{weather.windSpeed} km/h</WeatherWording>
			<WindArrow className="fas fa-long-arrow-alt-up" angle={weather.windDir} />
			<LaterDiv>
				<LaterTitle>Later</LaterTitle>

				<WeatherWording>{weather.hourlyTemps[0].temp}</WeatherWording>
				<WeatherWording>+3 hrs</WeatherWording>

				<WeatherWording>{weather.hourlyTemps[1].temp}</WeatherWording>
				<WeatherWording>+6 hrs</WeatherWording>

				<WeatherWording>{weather.hourlyTemps[2].temp}</WeatherWording>
				<WeatherWording>+9 hrs</WeatherWording>

				<WeatherWording>{weather.hourlyTemps[3].temp}</WeatherWording>
				<WeatherWording>+12 hrs</WeatherWording>

				<WeatherWording>{weather.hourlyTemps[4].temp}</WeatherWording>
				<WeatherWording>+15 hrs</WeatherWording>
			</LaterDiv>
			<LaterDiv></LaterDiv>
		</SideBar>
	);
}

export default WeatherBar;
