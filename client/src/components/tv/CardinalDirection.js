import React from "react";
import { WeatherWording } from "../../styled/tv/Weather";

/**
 * @date 2020-03-31
 * @author MJ Kochuk
 * @module Component
 */

/**
 * Determines the cardinal direction based on a value in degrees. North is 0.
 * @constructor
 * @param props
 * @returns {*} The CardinalDirection component
 */
function CardinalDirection({ direction }) {
	if (direction >= 337.5 || direction < 22.5) {
		return <WeatherWording>North</WeatherWording>;
	}
	if (direction >= 22.5 && direction < 67.5) {
		return <WeatherWording>Northeast</WeatherWording>;
	}
	if (direction >= 67.5 && direction < 112.5) {
		return <WeatherWording>East</WeatherWording>;
	}
	if (direction >= 112.5 && direction < 157.5) {
		return <WeatherWording>Southeast</WeatherWording>;
	}
	if (direction >= 157.5 && direction < 202.5) {
		return <WeatherWording>South</WeatherWording>;
	}
	if (direction >= 202.5 && direction < 247.5) {
		return <WeatherWording>Southwest</WeatherWording>;
	}
	if (direction >= 247.5 && direction < 292.5) {
		return <WeatherWording>West</WeatherWording>;
	}
	if (direction >= 292.5) {
		return <WeatherWording>Northwest</WeatherWording>;
	}
}

export default CardinalDirection;
