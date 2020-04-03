import {
	ADD_BRIX_RECORD,
	ADDING_BRIX_RECORD,
	FETCHING_BRIX_RECORDS,
	GET_BRIX_CHART,
	GET_BRIX_RECORDS,
	GET_WEATHER,
	SET_DAILY_MIX_CHART_ROW
} from "../actions/constants";

const initialState = {
	selectedBrixRecords: [],
	selectedTruckID: null,
	loading: true,
	addingBrixRecord: false,
	brixChart: [],
	dailyMixChartRow: null,
	weather: {
		date: null,
		forecastLow: null,
		currentTemperature: null,
		loading: true
	},
	brixCSV: null
};

/**
 * @date 2020-03-24
 * @author Arran Woodruff
 * @category Redux-Reducers
 * @module Brix
 */

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_WEATHER:
			const {
				date,
				forecastLow,
				forecastHigh,
				currentTemperature,
				feelsLike,
				windSpeed,
				windDir,
				hourlyTemps,
				description,
				conditionID
			} = payload;

			return {
				...state,
				weather: {
					date,
					forecastLow,
					forecastHigh,
					currentTemperature,
					feelsLike,
					windSpeed,
					windDir,
					hourlyTemps,
					description,
					conditionID,
					loading: false
				}
			};
		case GET_BRIX_CHART:
			return {
				...state,
				brixChart: payload
			};
		case ADD_BRIX_RECORD:
			return {
				...state,
				selectedBrixRecords: [payload.brixRecord, ...state.selectedBrixRecords],
				selectedTruckID: payload.truckID,
				addingBrixRecord: false
			};
		case ADDING_BRIX_RECORD:
			return {
				...state,
				addingBrixRecord: true
			};
		case FETCHING_BRIX_RECORDS:
			return {
				...state,
				selectedBrixRecords: [],
				selectedTruckID: payload.truckID,
				selectedTruckPrimary: payload.primary,
				loading: true
			};
		case GET_BRIX_RECORDS:
			return {
				...state,
				selectedBrixRecords: payload.brixRecords,
				selectedTruckID: payload.truckID,
				selectedTruckPrimary: payload.primary,
				loading: false
			};
		case SET_DAILY_MIX_CHART_ROW:
			return {
				...state,
				dailyMixChartRow: payload
			};
		default:
			return state;
	}
}
