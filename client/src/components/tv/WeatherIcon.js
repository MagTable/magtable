import React from "react";
import {
	AtmosphereIcon,
	CloudIcon,
	RainIcon,
	SnowIcon,
	SunIcon
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
function WeatherIcon(props) {
	switch ("hello") {
		case "hello": {
			return <SunIcon />;
		}
		case "hellott": {
			return <SnowIcon />;
		}
		case "hellott": {
			return <RainIcon />;
		}
		case "hellott": {
			return <CloudIcon />;
		}
		case "hellott": {
			return <AtmosphereIcon />;
		}
	}
}

export default WeatherIcon;
