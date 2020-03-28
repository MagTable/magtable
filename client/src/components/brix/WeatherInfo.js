import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	DailyMixButtons,
	WeatherDataItem,
	WeatherDataWrapper
} from "../../styled/magtable/Brix";
import { NavDiv } from "../../styled/common/Navigation";
import {
	decrementDailyMix,
	incrementDailyMix,
	setDailyMix
} from "../../actions/magtable";
import { DANGER, SUCCESS, WARNING } from "../../actions/constants";
import { setDailyMixChartRow } from "../../actions/brix";

/**
 *
 * Consumes weather data including current temperature, forecast low
 *
 * @date 3/24/2020
 * @author Arran Woodruff
 * @name WeatherInfo
 * @category Component/Brix
 * @returns {*} The WeatherInfo component
 * @constructor
 */
function WeatherInfo() {
	const dispatch = useDispatch();

	const { weather, brixChart } = useSelector(state => state.brix);
	const dailyMix = useSelector(state => state.magtable.dailyMix);

	// reverse the chart and find the first record with a recommended mix equal to our daily mix
	// this object contains the rest of the chart data for a given daily mix
	const dailyMixChartRow = brixChart
		.slice()
		.reverse()
		.find(row => row.recommendedMix === dailyMix);

	// the first chart record with a LOUT lower than the current forecast row is recommended
	const recommendedChartRow = brixChart.find(
		row => row.lout < weather.forecastLow
	);

	// the first chart record with a LOUT lower than the current OAT is the minimum
	const minimumChartRow = brixChart.find(
		row => row.lout < weather.currentTemperature
	);

	const recommendedMix = recommendedChartRow?.recommendedMix;
	const minimumMix = minimumChartRow?.recommendedMix;

	useEffect(() => {
		// if the daily mix hasn't been set, default to the recommended
		if (!dailyMix && recommendedChartRow) {
			dispatch(setDailyMix(recommendedMix));
		}
		// update the currently selected chart row
		if (dailyMixChartRow) {
			dispatch(setDailyMixChartRow(dailyMixChartRow));
		}
	}, [dailyMix, recommendedChartRow]);

	const getDailyMixColor = () => {
		// if something went wrong with the weather pull, default to danger
		// as we can't recommend anything without data
		if (!weather.forecastLow) {
			return DANGER;
		} else if (dailyMix === recommendedMix) {
			return null;
		} else if (dailyMix > recommendedMix) {
			return SUCCESS;
		} else if (dailyMix < minimumMix) {
			return DANGER;
		} else if (dailyMix < recommendedMix) {
			return WARNING;
		}
	};

	return (
		<NavDiv>
			<WeatherDataWrapper status={getDailyMixColor()}>
				<WeatherDataItem>
					Current: {weather.currentTemperature}°
				</WeatherDataItem>
				<WeatherDataItem>Low: {weather.forecastLow}°</WeatherDataItem>
				<WeatherDataItem large>
					Mix: {recommendedChartRow ? dailyMix + "%" : "..."}
				</WeatherDataItem>
				<WeatherDataItem>
					LOUT: {dailyMixChartRow ? dailyMixChartRow.lout + "°" : "..."}
				</WeatherDataItem>
				<WeatherDataItem>
					Brix: {dailyMixChartRow ? dailyMixChartRow.brix.toFixed(1) : "..."}
				</WeatherDataItem>
				<DailyMixButtons>
					<i
						onClick={() => dispatch(incrementDailyMix())}
						className="fas fa-caret-up"
					/>
					<i
						onClick={() => dispatch(decrementDailyMix())}
						className="fas fa-caret-down"
					/>
				</DailyMixButtons>
			</WeatherDataWrapper>
		</NavDiv>
	);
}

export default WeatherInfo;
