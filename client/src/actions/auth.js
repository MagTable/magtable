import axios from "axios";
import {
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	LOGGING_IN,
	CLEAR_ERROR,
	AXIOS_JSON_HEADER,
	SYSTEM_ADMINISTRATOR,
	PERSONNEL_MANAGER,
	MECHANIC
} from "./constants";

import store from "../store";

import { setAlert } from "./alert";
import { getBrixChart, getWeather } from "./brix";
import { getMagTable, getParkingLocations } from "./magtable";

/**
 * @date 2020-03-24
 * @author Arran Woodruff, Steven Wong
 * @category Redux-Actions
 * @module Auth
 */

window.addEventListener("storage", e => {
	// whenever our token changes, log the user out.
	if (e.key === "token" && e.oldValue && !e.newValue) {
		store.dispatch(logout());
	}
});

/**
 * Gets the JWT's corresponding user object.
 *
 * @method loadUser
 * @returns The user that is logged in.
 */
export const loadUser = () => async dispatch => {
	// if there is a token in local storage, assign it to axios's common variables
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}

	try {
		const res = await axios.get("/authenticate");

		const user = res.data;

		dispatch({
			type: USER_LOADED,
			payload: user
		});

		const magtableRoles = [SYSTEM_ADMINISTRATOR, PERSONNEL_MANAGER, MECHANIC];

		if (magtableRoles.includes(user.role.name)) {
			dispatch(getMagTable());
			dispatch(getBrixChart());
			dispatch(getParkingLocations());
			dispatch(getWeather());
		}
	} catch (err) {
		dispatch({
			type: AUTH_ERROR
		});
	}
};

/**
 *
 * The login action of the application. Requires a username and password within the system in order to enter.
 *
 * @method login
 * @param {string} username The users username.
 * @param {string} password The users password.
 * @returns The loadUser action as long as the login passes validation.
 */
export const login = ({ username, password }) => async dispatch => {
	try {
		dispatch({
			type: LOGGING_IN
		});

		const res = await axios.post(
			"/authenticate",
			{ username, password },
			AXIOS_JSON_HEADER
		);

		// destructure jwt from response data
		const { jwt } = res.data;

		await setTimeout(() => {
			dispatch({
				type: LOGIN_SUCCESS,
				payload: jwt
			});

			dispatch(loadUser());
		}, 750);
	} catch (err) {
		if (err.response.status === 303) {
			dispatch(setAlert(err.response?.data?.message, "info"));
		} else {
			dispatch(setAlert(err.response?.data?.message, "danger"));
		}

		// send the login error to redux state to allow other components to see what the error was and react accordingly
		const { status, message } = err.response?.data;

		dispatch({
			type: LOGIN_FAIL,
			payload: { status, message, username, password }
		});
	}
};

/**
 *
 * This sets the users new password to whatever they choose to set.
 *
 * @method setUserPassword
 * @param username The users username.
 * @param password The temporary password of the user.
 * @param newPassword The new password that the user sets.
 * @returns The loadUser action as long as setting the new password is successful.
 */
export const setUserPassword = ({
	username,
	password,
	newPassword
}) => async dispatch => {
	try {
		dispatch({
			type: LOGGING_IN
		});

		const res = await axios.post(
			"/password/reset",
			{ username, password, newPassword },
			AXIOS_JSON_HEADER
		);

		// destructure jwt from response data
		const { jwt } = res.data;

		dispatch({
			type: LOGIN_SUCCESS,
			payload: jwt
		});

		dispatch(loadUser());
	} catch (err) {
		dispatch(setAlert(err.response?.data?.message, "danger"));
	}
};

/**
 *
 * Clears the authentication error.
 *
 * @method clearSAuthError
 * @returns Clears Authentication Errors
 */
export const clearAuthError = () => dispatch => {
	dispatch({
		type: CLEAR_ERROR
	});
};

/**
 * Logs the user out of the system.
 *
 * @method logout
 * @returns Logging out of the system.
 */
export const logout = () => dispatch => {
	dispatch({ type: LOGOUT });
};

/**
 * Set auth token for common axios parameters, this will be added to all requests
 *
 * @method setAuthToken
 * @param {string} token The auth token.
 */
const setAuthToken = token => {
	// set axios' common header attribute to the given token if it exists, otherwise delete the attribute
	if (token) {
		axios.defaults.headers.common["Authorization"] = "Bearer " + token;
	} else {
		delete axios.defaults.headers.common["Authorization"];
	}
};
