import axios from "axios";
import { setAlert } from "./alert";
import {
	ADD_TRUCK,
	AXIOS_JSON_HEADER,
	DELETE_TRUCK,
	EDIT_TRUCK
} from "./constants";

/**
 * @date 2020-03-24
 * @author Arran Woodruff, Steven Wong
 * @category Redux-Actions
 * @module Truck
 */

/**
 * Edit's the selected trucks information. This can be anything from the truck status to the notice information.
 *
 * @method editTruck
 * @param {object} truck The truck whose data is being edited.
 * @return API updates the truck within the database.
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
			setAlert(`Truck ${truck.id} Was Updated Successfully.`, "success")
		);
	} catch (err) {
		dispatch(setAlert(err.response?.data?.message, "danger"));
	}
};

/**
 *
 * Adds a truck to the database.
 *
 * @method addTruck
 * @param {object} truck The truck whose data is being added.
 * @return API updates and adds truck within the database.
 */
export const addTruck = truck => async dispatch => {
	try {
		const res = await axios.post(
			"/equipment/truck/add/",
			truck,
			AXIOS_JSON_HEADER
		);

		dispatch({
			type: ADD_TRUCK,
			payload: res.data
		});

		dispatch(setAlert(`Truck ${truck.id} Was Added Successfully.`, "success"));
	} catch (err) {
		dispatch(setAlert(err.response?.data?.message, "danger"));
	}
};

/**
 * The truck in which is being deactivated from the database.
 *
 * @method deleteTruck
 * @param {integer} id The Truck ID
 * @return API updates the truck to be deactivated.
 */
export const deleteTruck = id => async dispatch => {
	try {
		await axios.put(`/equipment/truck/deactivate/${id}`);

		dispatch({
			type: DELETE_TRUCK,
			payload: id
		});

		dispatch(setAlert(`Truck ${id} Was Deactivated Successfully.`, "success"));
	} catch (err) {
		dispatch(setAlert(err.response?.data?.message, "danger"));
	}
};
