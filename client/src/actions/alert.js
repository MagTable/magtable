import uuid from "uuid";

import { SET_ALERT, REMOVE_ALERT } from "./constants";

export const setAlert = (msg, alertType) => dispatch => {
  const id = uuid.v4();
  // add alert to store
  dispatch({ type: SET_ALERT, payload: { id, msg, alertType } });
  // remove after 5 seconds
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 5000);
};

export const removeAlert = id => dispatch => {
  dispatch({ type: REMOVE_ALERT, payload: id });
};
