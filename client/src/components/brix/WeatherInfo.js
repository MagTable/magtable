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
} from "../../actions/brix";
import { DANGER, SUCCESS, WARNING } from "../../actions/constants";

/**
 * @date 3/24/2020
 * @author Arran Woodruff
 * @module Component
 */

function WeatherInfo() {
	const dispatch = useDispatch();

	const { weather, brixChart, dailyMix } = useSelector(state => state.brix);

	const dailyMixChartRow = brixChart
		.slice()
		.reverse()
		.find(row => row.recommendedMix === dailyMix);

	const recommendedChartRow = brixChart.find(
		row => row.lout < weather.forecastLow
	);

	const minimumChartRow = brixChart.find(
		row => row.lout < weather.currentTemperature
	);

	const recommendedMix = recommendedChartRow?.recommendedMix;
	const minimumMix = minimumChartRow?.recommendedMix;

	useEffect(() => {
		if (!dailyMix && recommendedChartRow) {
			dispatch(setDailyMix(recommendedMix));
		}
	}, [dailyMix, recommendedChartRow]);

	const getDailyMixColor = () => {
		if (dailyMix === recommendedMix) {
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
