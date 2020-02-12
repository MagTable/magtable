import { combineReducers } from "redux";
import user from "./user";
import alert from "./alert";
import auth from "./auth";
import { LOGOUT } from "../actions/constants";

const appReducer = combineReducers({ user, alert, auth });

// this is explained by Dan Abramov here: https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store
const rootReducer = (state, action) => {
	if (action.type === LOGOUT) {
		state = undefined;
	}

	return appReducer(state, action);
};

export default rootReducer;
