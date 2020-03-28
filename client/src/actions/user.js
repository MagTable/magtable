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
 * @date 2020-03-24
 * @author Arran Woodruff, Steven Wong
 * @category Redux-Actions
 * @module User
 */

/**
 * Retrieves list of all user accounts
 * GET /user/all
 * Dispatch Type: GET_USERS
 * Dispatch Payload: res.data
 *
 * @method getUsers
 * @return API returns all the users from the database.
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
 *
 * @method getRoles
 * @return API returns a list of roles.
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
	}
};

/**
 * Adds user account to the database
 * POST /user/add
 * Dispatch Type: ADD_USER
 * Dispatch Payload: res.data
 *
 * @method addUser
 * @param {object} user The user being added to the system.
 * @return API adds a user to the system and returns updated Users.
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
 *
 * @method deleteUser
 * @param {integer} id The id of the user we are deleting from the system.
 * @return API returns an updated list of users after deleting the specific user.
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
 *
 * @method resetPassword
 * @param {integer} id The id of the user who is having their password reset.
 * @return API returns a list of users with the specific user whose id has been reset with the temporary password.
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
