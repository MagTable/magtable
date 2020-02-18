import { SET_ALERT, REMOVE_ALERT } from "../actions/constants";

const initialState = {
	shifts: [],
	assignments: [],
	dailyMessages: [],
	dailyMix: null
};

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
	}
}
