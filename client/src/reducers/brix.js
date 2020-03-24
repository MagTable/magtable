import {
	ADD_BRIX_RECORD,
	ADDING_BRIX_RECORD,
	DECREMENT_DAILY_MIX,
	FETCHING_BRIX_RECORDS,
	GET_BRIX_CHART,
	GET_BRIX_RECORDS,
	GET_WEATHER,
	INCREMENT_DAILY_MIX,
	SET_DAILY_MIX
} from "../actions/constants";

/**
 * @date 3/24/2020
 * @author Arran Woodruff
 * @module Component
 */

const initialState = {
	selectedBrixRecords: [],
	selectedTruckID: null,
	loading: true,
	addingBrixRecord: false,
	brixChart: [],
	dailyMix: null,
	weather: {
		date: null,
		forecastLow: null,
		currentTemperature: null,
		loading: true
	}
};

const MIX_STEP = 5;
const MIX_MAX = 75;
const MIX_MIN = 15;

/**
 * @date 2020-03-24
 * @author Arran Woodruff
 * @module Redux
 */

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_WEATHER:
			const { date, forecastLow, currentTemperature } = payload;

			return {
				...state,
				weather: {
					date,
					forecastLow,
					currentTemperature,
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
				loading: true
			};
		case GET_BRIX_RECORDS:
			return {
				...state,
				selectedBrixRecords: payload.brixRecords,
				selectedTruckID: payload.truckID,
				loading: false
			};
		case SET_DAILY_MIX:
			return {
				...state,
				dailyMix: payload
			};
		case INCREMENT_DAILY_MIX:
			if (state.dailyMix + MIX_STEP > MIX_MAX) return state;

			return {
				...state,
				dailyMix: state.dailyMix + MIX_STEP
			};
		case DECREMENT_DAILY_MIX:
			if (state.dailyMix - MIX_STEP < MIX_MIN) return state;

			return {
				...state,
				dailyMix: state.dailyMix - MIX_STEP
			};
		default:
			return state;
	}
}
