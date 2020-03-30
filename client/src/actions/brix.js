import {
	AXIOS_JSON_HEADER,
	ADD_BRIX_RECORD,
	GET_BRIX_RECORDS,
	FETCHING_BRIX_RECORDS,
	ADDING_BRIX_RECORD,
	GET_BRIX_CHART,
	GET_WEATHER,
	SET_DAILY_MIX_CHART_ROW
} from "./constants";
import axios from "axios";

// todo REMOVE CONSOLE LOGS!!!!!!!!!

/**
 * @date 2020-03-24
 * @author Arran Woodruff, Steven Wong, MJ Kochuk
 * @category Redux-Actions
 * @module Brix
 */

/**
 * Saves a brix record to an assignment's brixRecords list
 *
 * @method addBrixRecord
 * @param truckID id of truck the measurement is made for
 * @param brixRecord brixRecord to save to assignment
 * @returns API returns updated list of brix records for the assignment
 */
export const addBrixRecord = (truckID, brixRecord) => async dispatch => {
	try {
		dispatch({ type: ADDING_BRIX_RECORD });
		const res = await axios.post(
			`/brix/${truckID}`,
			{
				...brixRecord
			},
			AXIOS_JSON_HEADER
		);
		setTimeout(() => {
			dispatch({
				type: ADD_BRIX_RECORD,
				payload: { brixRecord: res.data, truckID }
			});
		}, 500);
	} catch (err) {
		console.log(err);
	}
};

/**
 * gets the last x number of brix records for a particular deice truck
 *
 * @method getBrixRecords
 * @param truckID id of truck to retrieve records for
 * @returns API returns a list of brix records for the requested truck
 */
export const getBrixRecords = truckID => async dispatch => {
	try {
		dispatch({
			type: FETCHING_BRIX_RECORDS,
			payload: { truckID }
		});

		const res = await axios.get(`/brix/${truckID}`);

		setTimeout(() => {
			dispatch({
				type: GET_BRIX_RECORDS,
				payload: { brixRecords: res.data, truckID }
			});
		}, 500);
	} catch (err) {
		console.error(err);
	}
};

/**
 * Gets the Brix Char from the API.
 *
 * @method getBrixChart
 * @return API returns the brix chart values
 */
export const getBrixChart = () => async dispatch => {
	try {
		const res = await axios.get("/brix/chart");

		dispatch({
			type: GET_BRIX_CHART,
			payload: res.data
		});
	} catch (err) {}
};

/**
 *
 * Gets the weather from an external API that is called through the backend.
 *
 * @method getWeather
 * @return API returns the weather data.
 */
export const getWeather = () => async dispatch => {
	try {
		const res = await axios.get("/weather");
		const weather = res.data;
		// const weather = sampleWeather;
		// const weather = null;

		let date;
		date = new Date(0);
		date.setUTCSeconds(weather.list[0].dt);

		let forecastLow;
		forecastLow = 1000; // higher than realistic
		weather.list.slice(0, 8).forEach(elem => {
			if (elem.main.temp < forecastLow)
				forecastLow = Math.floor(elem.main.temp);
		});
		forecastLow = Math.ceil(parseInt(forecastLow));

		let forecastHigh = -1000; // lower than realistic
		weather.list.slice(0, 8).forEach(elem => {
			if (elem.main.temp > forecastHigh)
				forecastHigh = Math.floor(elem.main.temp);
		});
		forecastHigh = Math.ceil(parseInt(forecastHigh));

		let currentTemperature = Math.floor(weather.list[0].main.temp);
		let feelsLike = weather.list[0].main.feels_like;
		let windSpeed = Math.round(weather.list[0].wind.speed * 3.6); // Wind speed in KM/H
		let windDir = weather.list[0].wind.deg;
		let description = weather.list[0].weather.description; // The description of the current weather, ie sunny

		let hourlyTemps = [
			{
				temp: weather.list[3].main.temp,
				conditionID: weather.list[3].weather[0].id
			},
			{
				temp: weather.list[6].main.temp,
				conditionID: weather.list[6].weather[0].id
			},
			{
				temp: weather.list[9].main.temp,
				conditionID: weather.list[9].weather[0].id
			},
			{
				temp: weather.list[12].main.temp,
				conditionID: weather.list[12].weather[0].id
			},
			{
				temp: weather.list[15].main.temp,
				conditionID: weather.list[15].weather[0].id
			}
		];

		dispatch({
			type: GET_WEATHER,
			payload: {
				date,
				forecastLow,
				forecastHigh,
				currentTemperature,
				feelsLike,
				windSpeed,
				windDir,
				hourlyTemps,
				description
			}
		});
	} catch (err) {}
};

//todo Arran pls update this
/**
 *
 * Sets the daily chart row.
 *
 * @method setDailyMixChartRow
 * @param chartRow
 * @return The daily mix chart row
 */
export const setDailyMixChartRow = chartRow => async dispatch => {
	try {
		dispatch({
			type: SET_DAILY_MIX_CHART_ROW,
			payload: chartRow
		});
	} catch (err) {}
};
