import {
	SET_DAILY_MIX,
	AXIOS_JSON_HEADER,
	ADD_BRIX_RECORD,
	GET_BRIX_RECORDS,
	FETCHING_BRIX_RECORDS,
	ADDING_BRIX_RECORD,
	GET_BRIX_CHART
} from "./constants";
import axios from "axios";
import { setAlert } from "./alert";

/**
 * Saves a brix record to an assignment's brixRecords list
 *
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
 * @param truckID id of truck to retrieve records for
 * @returns API returns a list of brix records for the requested truck
 */
export const getBrixRecords = truckID => async dispatch => {
	try {
		console.log(truckID);
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
 * Sets the daily mix to a given percentage
 *
 * @param dailyMix dailyMix to set
 */
// const setDailyMix = dailyMix => dispatch => {
// 	dispatch({
// 		type: SET_DAILY_MIX,
// 		payload: dailyMix
// 	});
// };