import React from "react";
import {
	AtmosphereIcon,
	CloudIcon,
	RainIcon,
	SnowIcon,
	SunIcon,
	ThunderstormIcon
} from "../../styled/tv/Weather";

/**
 * @date 2020-03-31
 * @author MJ Kochuk
 * @module Component
 */

/**
 * Depending on the status ID provided for the weather, a certain component with the correct styling will be returned.
 * @constructor
 * @param props
 * @returns {*} The WeatherIcon component
 */
function WeatherIcon({ condition }) {
	if (condition === 800) {
		// CLear
		return <SunIcon className="fas fa-sun" />;
	}
	if (condition === 511) {
		// Freezing rain
		return <SnowIcon className="fas fa-icicles" />;
	}
	if (condition >= 200 && condition < 300) {
		// Thunderstorms
		return <ThunderstormIcon className="fas fa-bolt" />;
	}
	if (condition < 400 || (condition > 519 && condition < 600)) {
		// Drizzle
		return <RainIcon className="fas fa-cloud-showers-heavy" />;
	}
	if (condition >= 500 && condition <= 504) {
		// Rain
		return <SunIcon className="fas fa-cloud-sun-rain" />;
	}
	if (condition >= 600 && condition < 700) {
		return <SnowIcon className="fas fa-snowflake" />;
	}
	if (condition >= 700 && condition < 800) {
		return <AtmosphereIcon className="fas fa-smog" />;
	}
	if (condition >= 800 && condition < 900) {
		return <CloudIcon className="fas fa-cloud" />;
	}
}

export default WeatherIcon;
