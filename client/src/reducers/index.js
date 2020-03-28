import { combineReducers } from "redux";
import user from "./user";
import alert from "./alert";
import auth from "./auth";
import magtable from "./magtable";
import brix from "./brix";
import { LOGOUT } from "../actions/constants";

/**
 * @date 2020-03-24
 * @author Arran Woodruff
 * @category Redux-Reducers
 * @module Index
 */

const appReducer = combineReducers({
	user,
	alert,
	auth,
	magtable,
	brix
});

// this is explained by Dan Abramov here: https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store
const rootReducer = (state, action) => {
	if (action.type === LOGOUT) {
		state = undefined;
	}

	return appReducer(state, action);
};

export default rootReducer;
