import {
	AUTH_ERROR,
	CLEAR_ERROR,
	LOGGING_IN,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGOUT,
	USER_LOADED
} from "../actions/constants";

/**
 * @date 2020-03-24
 * @author Arran Woodruff
 * @category Redux-Reducers
 * @module Auth
 */

const initialState = {
	token: localStorage.getItem("token"),
	isAuthenticated: null,
	loading: true,
	user: null
};

export default function(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: payload
			};
		case LOGIN_SUCCESS:
			localStorage.setItem("token", payload);
			return {
				...state,
				token: payload,
				isAuthenticated: true
			};
		case LOGGING_IN:
			return {
				...state,
				loading: true
			};
		case LOGIN_FAIL:
			localStorage.removeItem("token");
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				user: { username: payload.username, password: payload.password },
				error: payload
			};
		case AUTH_ERROR:
		case LOGOUT:
			localStorage.removeItem("token");
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				user: null
			};
		case CLEAR_ERROR:
			return {
				...state,
				error: null
			};
		default:
			return state;
	}
}
