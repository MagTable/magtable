import axios from "axios";
import {
	ADD_USER,
	DELETE_USER,
	GET_USERS,
	GET_ROLES,
	RESET_PASSWORD,
	AXIOS_JSON_HEADER
} from "./constants";
import { setAlert } from "./alert";

/**
 * Retrieves list of all user accounts
 * GET /user/all
 * Dispatch Type: GET_USERS
 * Dispatch Payload: res.data
 */
export const getUsers = () => async dispatch => {
	try {
		const res = await axios.get("/user/all");

		setTimeout(
			() =>
				dispatch({
					type: GET_USERS,
					payload: res.data
				}),
			500
		);
	} catch (err) {
		dispatch(setAlert(err.response?.data?.message, "danger"));
	}
};

/**
 * Retrieves list of all user roles
 * GET /user/roles
 * Dispatch Type: GET_ROLES
 * Dispatch Payload: res.data
 */
export const getRoles = () => async dispatch => {
	try {
		const res = await axios.get("/user/roles");

		dispatch({
			type: GET_ROLES,
			payload: res.data
		});
	} catch (err) {
		// no error necessary here
		// dispatch(setAlert(err.response?.data?.message, "danger"));
	}
};

/**
 * Adds user account to the database
 * POST /user/add
 * Dispatch Type: ADD_USER
 * Dispatch Payload: res.data
 */
export const addUser = user => async dispatch => {
	try {
		user.role = parseInt(user.role); // ensure user's role is a number (thanks java backend)

		const res = await axios.post("/user/add", user, AXIOS_JSON_HEADER);

		dispatch({
			type: ADD_USER,
			payload: res.data
		});

		dispatch(
			setAlert(`User "${user.username}" Was Added Successfully.`, "success")
		);
	} catch (err) {
		dispatch(setAlert(err.response?.data?.message, "danger"));
	}
};

/**
 * Removes a user account from the database
 * DELETE /user/${id}
 * Dispatch Type: DELETE_USER
 * Dispatch Payload: id
 */
export const deleteUser = id => async dispatch => {
	try {
		await axios.delete(`/user/delete/${id}`);

		dispatch({
			type: DELETE_USER,
			payload: id
		});

		dispatch(setAlert("User Deleted Successfully", "success"));
	} catch (err) {
		dispatch(setAlert(err.response?.data?.message, "danger"));
	}
};

/**
 * Retrieves list of all user accounts
 * PUT /user/reset/${id}
 * Dispatch Type: RESET_PASSWORD
 * Dispatch Payload: { id, user: res.data }
 */
export const resetPassword = id => async dispatch => {
	try {
		const res = await axios.put(`/user/reset/${id}`);

		dispatch({
			type: RESET_PASSWORD,
			payload: { id, user: res.data }
		});

		dispatch(setAlert("User's Password Successfully Reset.", "success"));
	} catch (err) {
		dispatch(setAlert(err.response?.data?.message, "danger"));
	}
};
