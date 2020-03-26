import { v4 as uuidv4 } from "uuid";

import { SET_ALERT, REMOVE_ALERT } from "./constants";

/**
 * @date 2020-03-24
 * @author Arran Woodruff, Steven Wong
 * @category Redux-Actions
 * @module Alert
 */

/**
 * The alerts sent out for the application are handled through this.
 *
 * @method setAlert
 * @param {object} msg The message to be sent out.
 * @param {string} alertType The type of alert being sent.
 * @returns The alert message.
 */
export const setAlert = (msg, alertType) => dispatch => {
	const id = uuidv4();
	// add alert to store
	dispatch({ type: SET_ALERT, payload: { id, msg, alertType } });
	// remove after 5 seconds
	setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 3500);
};

/**
 *
 * Alert is removed from the screen.
 *
 * @method removeAlert
 * @param {integer} id The alert id.
 * @returns Removes the alert.
 */
export const removeAlert = id => dispatch => {
	dispatch({ type: REMOVE_ALERT, payload: id });
};
