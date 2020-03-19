import axios from "axios";
import { setAlert } from "./alert";
import {
	ADD_TRUCK,
	AXIOS_JSON_HEADER,
	DELETE_TRUCK,
	EDIT_TRUCK
} from "./constants";

/**
 *
 * Edit's the selected trucks information. This can be anything from the truck status to the notice information.
 *
 * PUT /truck/edit
 * Dispatch Type: EDIT_TRUCK
 * Dispatch Payload: res.data
 */
export const editTruck = truck => async dispatch => {
	try {
		const res = await axios.put(
			"/equipment/truck/edit/",
			truck,
			AXIOS_JSON_HEADER
		);

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
			setAlert(`Truck "${truck.id}" Was Added Successfully.`, "success")
		);
	} catch (err) {
		dispatch(setAlert(err.response?.data?.message, "danger"));
	}
};

export const deleteTruck = id => async dispatch => {
	try {
		await axios.delete(`/equipment/truck/delete/${id}`);

		dispatch({
			type: DELETE_TRUCK,
			payload: id
		});

		dispatch(setAlert(`Truck "${id}" Was Deleted Successfully.`, "success"));
	} catch (err) {
		dispatch(setAlert(err.response?.data?.message, "danger"));
	}
};
