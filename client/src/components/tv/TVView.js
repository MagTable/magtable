import React from "react";
import WeatherBar from "./WeatherBar";
import ViewList from "./ViewList";
import { TVWrap } from "../../styled/tv/ViewList";

/**
 * @date 2020-03-25
 * @author MJ Kochuk
 * @category Components/TV
 * @constructor
 * @param props
 * @returns {*} The TVView component
 */
function TVView(props) {
	return (
		<TVWrap>
			<ViewList />
			<WeatherBar />
		</TVWrap>
	);
}

export default TVView;
