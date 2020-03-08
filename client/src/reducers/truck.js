import { ADD_TRUCK, EDIT_TRUCK, GET_TRUCKS } from "../actions/constants";

const initialState = {
	trucks: [],
	error: null,
	loading: false
};

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case ADD_TRUCK:
			return {
				...state,
				trucks: [...state.trucks, payload],
				loading: false
			};
		case EDIT_TRUCK:
			return {
				...state,
				trucks: state.trucks.filter(truck => truck.id !== payload),
				loading: false
			};
		case GET_TRUCKS:
			return {
				...state,
				trucks: payload, // set trucks list to payload
				loading: false
			};
		default:
			return state;
	}
}
