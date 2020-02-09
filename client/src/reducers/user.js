import {
	ADD_USER,
	USER_ERROR,
	GET_USERS,
	GET_USER,
	DELETE_USER,
	EDIT_USER,
	GET_LEVELS,
	RESET_PASSWORD,
} from '../actions/constants';

const initialState = {
	users: [],
	user: null,
	loading: true,
	error: null,
	levels: [],
};

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case ADD_USER:
			return {
				...state,
				users: [...state.users, payload], // insert payload into users array
				loading: false,
			};
		case GET_USERS:
			return {
				...state,
				users: payload, // set users list to payload
				loading: false,
			};
		case GET_USER:
			return {
				...state,
				user: payload, // set the current user to payload
				loading: false,
			};
		case GET_LEVELS:
			return {
				...state,
				levels: payload, // set the list of level descriptions to payload
				loading: false,
			};
		case DELETE_USER:
			return {
				...state,
				users: state.users.filter(user => user.id !== payload), // remove user from state with same id as payload
				loading: false,
			};
		case EDIT_USER:
			return {
				...state,
				users: state.users.filter(user => user.id !== payload),
				loading: false,
			};
		case USER_ERROR:
			return {
				...state,
				error: payload, // update error state with payload
				loading: false,
			};
		case RESET_PASSWORD:
			let users = state.users.map(user => {
				if (user.id === payload.id) {
					return { ...user, ...payload };
				}
				return user;
			});

			return {
				...state,
				users,
				loading: false,
			};
		default:
			return state;
	}
}
