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

function getNextWorst() {
	const warningWeather = [2, 3, 5, 6];

	for (let i = 0; i < 15; i++) {
		if (
			warningWeather.includes(
				Math.floor(Weather.list[i].weather[0].id / Math.pow(10, 2)) % 10
			)
		) {
			return Weather.list[i];
		}
	}
}

function getDate() {
	const date = new Date();
	// console.log("month - " + date.getMonth());
	// console.log("Day - " + date.getDay());
	console.log(date.getDate());
	const month = date.getMonth();
	const day = date.getDate();
	return ("0" + (month + 1)).slice(-2) + "/" + ("0" + day).slice(-2);
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
	getNextWorst();
	return (
		<SideBar>
			<h1>Thu</h1>
			<h1>{getDate()}</h1>
			<WeatherWording>{Weather.list[0].weather[0].description}</WeatherWording>
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
			<WeatherWording>
				{Math.round(Weather.list[0].wind.speed * 3.6)} km/h
			</WeatherWording>
			<WindArrow
				className="fas fa-long-arrow-alt-up"
				angle={Weather.list[0].wind.deg}
			/>
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
