import axios from "axios";
import { setAlert } from "./alert";
import {
	ADD_TRUCK,
	AXIOS_JSON_HEADER,
	EDIT_TRUCK,
	GET_TRUCKS
} from "./constants";

/**
 *
 * Edit's the selected trucks information. This can be anything from the truck status to the notice information.
 *
 * POST /truck/edit
 * Dispatch Type: EDIT_TRUCK
 * Dispatch Payload: res.data
 */
export const editTruck = truck => async dispatch => {
	try {
		const res = await axios.post(
			"/equipment/truck/edit/",
			truck,
			AXIOS_JSON_HEADER
		);

		//todo check payload to make sure it is what we want.
		dispatch({
			type: EDIT_TRUCK,
			payload: res.data
		});

		dispatch(
			setAlert(`Truck "${truck.id}" Was Updated Successfully.`, "success")
		);
	} catch (err) {
		dispatch(setAlert(err.response?.data?.message, "danger"));
	}
};

/**
 *
 * Add truck to the database.
 *
 * POST /truck/edit
 * Dispatch Type: ADD_TRUCK
 * Dispatch Payload: res.data
 */
export const addTruck = truck => async dispatch => {
	try {
		const res = await axios.post(
			"/equipment/truck/add/",
			truck,
			AXIOS_JSON_HEADER
		);

		//todo check payload to make sure it is what we want.
		dispatch({
			type: ADD_TRUCK,
			payload: res.data
		});

		dispatch(
			setAlert(`Truck "${truck.id}" Was Updated Successfully.`, "success")
		);
	} catch (err) {
		console.log(err);
		dispatch(setAlert(err.response?.data?.message, "danger"));
	}
};

export const getTrucks = () => async dispatch => {
	try {
		const res = await axios.get("/equipment/truck/all");

		dispatch({
			type: GET_TRUCKS,
			payload: res.data
		});
	} catch (err) {
		dispatch(setAlert(err.response?.data?.message, "danger"));
	}
};
