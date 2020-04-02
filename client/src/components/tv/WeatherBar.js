import React from "react";
import {
	DescriptionWording,
	GreyTempHolder,
	TimePeriodDiv,
	LaterHourHead,
	LaterHourWrapper,
	TimePeriodTitle,
	SideBar,
	Temp,
	TempHolder,
	WeatherWording,
	WindArrow,
	WindArrowWrap,
	WindIcon
} from "../../styled/tv/Weather";
import { useSelector } from "react-redux";
import WeatherIcon from "./WeatherIcon";
import CardinalDirection from "./CardinalDirection";

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
 * @author MJ Kochuk, Arran Woodruff
 * @category Components/TV
 * @constructor
 * @param props
 * @returns {*} The WeatherBar component
 */
function WeatherBar(props) {
	const { weather } = useSelector(state => state.brix);

	return weather.loading ? (
		"..."
	) : (
		<SideBar>
			<div id={"weather_date"}>
				<h1>{getDay()}</h1>
				<h1>{getDate()}</h1>
			</div>
			<div id={"weather_current"}>
				<TimePeriodTitle>
					<span>Now</span>
				</TimePeriodTitle>
				<DescriptionWording>{weather.description}</DescriptionWording>
				<WeatherIcon condition={weather.conditionID} />
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
				<WindArrowWrap>
					<WindArrow
						className="fas fa-location-arrow"
						angle={weather.windDir - 45}
					/>
				</WindArrowWrap>
				<CardinalDirection direction={weather.windDir} />
			</div>
			<TimePeriodDiv id={"weather_later"}>
				<TimePeriodTitle>
					<span>Later</span>
				</TimePeriodTitle>
				{weather.hourlyTemps.map(hour => (
					<LaterHourWrapper key={hour.time}>
						<LaterHourHead>{hour.time}</LaterHourHead>
						<WeatherWording>{hour.temp}°</WeatherWording>
						<DescriptionWording>{hour.description}</DescriptionWording>
						<WeatherIcon condition={hour.conditionID} />
					</LaterHourWrapper>
				))}
			</TimePeriodDiv>
		</SideBar>
	);
}

export default WeatherBar;
