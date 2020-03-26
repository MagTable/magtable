import { SET_ALERT, REMOVE_ALERT } from "../actions/constants";

/**
 * @date 2020-03-24
 * @author Arran Woodruff
 * @category Redux-Reducers
 * @module Alert
 */

const initialState = [];

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case SET_ALERT:
			// check if identical alert is already on display
			let exists = false;

			state.forEach(item => {
				exists = item.msg === payload.msg;
			});

			if (!exists) {
				return [...state, payload];
			} else {
				return state;
			}
		case REMOVE_ALERT:
			return state.filter(alert => alert.id !== payload); // remove alert with id of payload
		default:
			return state;
	}
}
