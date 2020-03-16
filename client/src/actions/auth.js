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
import { getMagTable } from "./magtable";
import { getBrixChart } from "./brix";

window.addEventListener("storage", e => {
	// whenever our token changes, log the user out.
	if (e.key === "token" && e.oldValue && !e.newValue) {
		store.dispatch(logout());
	}
});

// get the JWT's corresponding user object
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
		}
	} catch (err) {
		dispatch({
			type: AUTH_ERROR
		});
	}
};

// login user
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
		dispatch(setAlert(err.response?.data?.message, "danger"));

		// send the login error to redux state to allow other components to see what the error was and react accordingly
		const { status, message } = err.response?.data;

		dispatch({
			type: LOGIN_FAIL,
			payload: { status, message, username, password }
		});
	}
};

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

export const clearAuthError = () => dispatch => {
	dispatch({
		type: CLEAR_ERROR
	});
};

// logout / clear profile
export const logout = () => dispatch => {
	dispatch({ type: LOGOUT });
};

// set auth token for common axios parameters, this will be added to all requests
const setAuthToken = token => {
	// set axios' common header attribute to the given token if it exists, otherwise delete the attribute
	if (token) {
		axios.defaults.headers.common["Authorization"] = "Bearer " + token;
	} else {
		delete axios.defaults.headers.common["Authorization"];
	}
};
