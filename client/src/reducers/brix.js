import { sampleWeather } from "../res/test_data/magtable";
import {
	ADD_BRIX_RECORD,
	ADDING_BRIX_RECORD,
	FETCHING_BRIX_RECORDS,
	GET_BRIX_CHART,
	GET_BRIX_RECORDS,
	GET_WEATHER,
	SET_DAILY_MIX,
	GET_BRIX_CSV
} from "../actions/constants";

const initialState = {
	selectedBrixRecords: [],
	selectedTruckID: null,
	loading: true,
	addingBrixRecord: false,
	brixChart: [],
	weather: {
		data: null,
		loading: true
	},
	brixCSV: null,
};

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_WEATHER:
			return {
				...state,
				weather: {
					data: sampleWeather,
					loading: false
				}
			};
		case GET_BRIX_CHART:
			return {
				...state,
				brixChart: payload
			};
		case GET_BRIX_CSV:
			return {
				...state,
				brixCSV: payload
			}
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
		default:
			return state;
	}
}
