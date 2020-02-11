import axios from 'axios';
import {
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	LOGGING_IN
} from './constants';

import { setAlert } from './alert';
import store from '../store';
import setAuthToken from "./setAuthToken";

window.addEventListener('storage', e => {
	if (e.key === 'token' && e.oldValue && !e.newValue) {
		store.dispatch(logout());
	}
});

// load user
export const loadUser = () => async dispatch => {
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}

	try {
		const res = await axios.get('/authenticate');

		dispatch({
			type: USER_LOADED,
			payload: res.data // contains the user
		});

		// TODO dispatch(getRoles());
	} catch (err) {
		dispatch({
			type: AUTH_ERROR
		});
	}
};

// login user
export const login = (username, password) => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'Application/json'
		}
	};
	try {
		dispatch({
			type: LOGGING_IN
		});

		const res = await axios.post(
			'/authenticate',
			{ username, password },
			config
		);

		const jwt = res.data.jwt;

		dispatch({
			type: LOGIN_SUCCESS,
			payload: jwt
		});

		// dispatch(loadUser());
	} catch (err) {
		console.log(err);
		// TODO setAlert based on form of returned error
		dispatch({
			type: LOGIN_FAIL
		});
	}
};

// logout / clear profile
export const logout = () => dispatch => {
	dispatch({ type: LOGOUT });
};
