import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	DailyMixButtons,
	WeatherDataWrapper
} from "../../styled/magtable/Brix";
import { NavDiv } from "../../styled/common/Navigation";
import {
	decrementDailyMix,
	incrementDailyMix,
	setDailyMix
} from "../../actions/brix";
import { DANGER, SUCCESS, WARNING } from "../../actions/constants";

function WeatherInfo() {
	const dispatch = useDispatch();

	const { weather, brixChart, dailyMix } = useSelector(state => state.brix);

	const recommendedChartRow = brixChart.filter(
		row => row.lout < weather.forecastLow
	)[0];

	const minimumChartRow = brixChart.filter(
		row => row.lout < weather.currentTemperature
	)[0];

	const recommendedMix = recommendedChartRow?.recommendedMix;
	const minimumMix = minimumChartRow?.recommendedMix;

	useEffect(() => {
		if (!dailyMix && recommendedChartRow) {
			dispatch(setDailyMix(recommendedMix));
			dispatch(setDailyMix(50));
		}
	}, [dailyMix, recommendedChartRow]);

	console.log(recommendedChartRow);

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
				<h3>Current: {weather.currentTemperature}</h3>
				<h3>Low: {weather.forecastLow}</h3>
				<h3>
					Mix: {recommendedChartRow ? dailyMix + "%" : "..."}
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
				</h3>
			</WeatherDataWrapper>
		</NavDiv>
	);
}

export default WeatherInfo;
