import {
	SET_EQUIPMENT_EMPLOYEE,
	REMOVE_EQUIPMENT_EMPLOYEE,
	SET_TRUCK_LOCATION,
	REMOVE_TRUCK_LOCATION,
	PUBLISH_TABLE,
	AXIOS_JSON_HEADER,
	SET_SELECTED_APRON,
	GET_ASSIGNMENT_DATA,
	ADD_EMPLOYEE_SHIFT,
	REFRESH_EMPLOYEE_SHIFTS,
	REFRESHING_EMPLOYEE_SHIFTS,
	TOGGLE_AM_PM,
	CLEAR_TABLE,
	GET_PARKING_LOCATIONS,
	SET_DAILY_MIX,
	INCREMENT_DAILY_MIX,
	DECREMENT_DAILY_MIX,
	FETCHING_MAGTABLE_HISTORY_LIST,
	GET_MAGTABLE_HISTORY_LIST,
	FETCHING_HISTORICAL_MAGTABLE,
	GET_HISTORICAL_MAGTABLE,
	CLEAR_ASSIGNMENT_SHIFTS,
	CLEAR_HISTORICAL_MAGTABLE
} from "./constants";
import axios from "axios";
import { setAlert } from "./alert";
import { logout } from "./auth";
import store from "../store";

/**
 * @date 2020-03-24
 * @author Arran Woodruff, Steven Wong
 * @category Redux-Actions
 * @module MagTable
 */

/**
 * Toggles whether it is AM or PM.
 *
 * @method toggleAM
 * @returns AM or PM.
 */
export const toggleAM = () => dispatch => {
	dispatch({
		type: TOGGLE_AM_PM
	});
};

/**
 * Removes parkingLocation for a particular truck
 *
 * @method removeTruckLocation
 * @param {integer} equipmentID id of equipment to remove location data from
 * @return Returns the equipmentID to be removed.
 */
export const removeTruckLocation = equipmentID => dispatch => {
	dispatch({
		type: REMOVE_TRUCK_LOCATION,
		payload: equipmentID
	});
};

/**
 * Sets the associated equipment's assignment parkingLocation
 *
 * @method setTruckLocation
 * @param {number} equipmentID EquipmentID of equipment to set location
 * @param {object} parkingLocation ParkingLocation to give to equipment
 * @param {string} position Position of truck within location
 * @param {integer} bay Bay to assign to truck
 * @return Sets the associated equipment assignments parkingLocation.
 */
export const setTruckLocation = (
	parkingLocation,
	position,
	equipmentID,
	bay
) => dispatch => {
	const state = store.getState();
	let parkingLocationID;

	if (!bay) {
		parkingLocationID = state.magtable.parkingLocations.find(
			location =>
				location.position === position &&
				location.bay === null &&
				location.apron === parkingLocation.apron &&
				location.zoneID === parkingLocation.id
		).id;
	} else {
		parkingLocationID = state.magtable.parkingLocations.find(
			location =>
				location.position === position &&
				location.bay === bay &&
				location.apron === parkingLocation.apron &&
				location.zoneID === parkingLocation.id
		).id;
	}

	dispatch({
		type: SET_TRUCK_LOCATION,
		payload: {
			equipmentID,
			parkingLocation: {
				id: parkingLocationID,
				apron: parkingLocation.apron,
				zoneID: parkingLocation.id,
				phonetic: parkingLocation.phonetic,
				position,
				bay
			}
		}
	});
};

/**
 * Removes an employeeShift from associated equipment's assignment
 *
 * @method removeEquipmentEmployee
 * @param {number} equipmentID id of equipment to remove employeeShift from
 * @param {number} shiftID shiftID of shift to remove from equipment
 * @return Removes the employeeShift from the associated equipment's assignment.
 */
export const removeEquipmentEmployee = (equipmentID, shiftID) => dispatch => {
	dispatch({
		type: REMOVE_EQUIPMENT_EMPLOYEE,
		payload: { equipmentID, shiftID }
	});
};

/**
 * Sets an employeeShift to a given equipment's employeeShift's index
 *
 * @method setEquipmentEmployee
 * @param {number} equipmentID equipmentID of equipment assignment to modify
 * @param {number} shift shift to add to assignment employeeShifts
 * @return Sets an employeeShift to a given equipment's employeeShift's index
 */
export const setEquipmentEmployee = (equipmentID, shift) => dispatch => {
	dispatch({
		type: SET_EQUIPMENT_EMPLOYEE,
		payload: { equipmentID, shift }
	});
};

/**
 * Sends the current state of the magtable to the API for persistence
 *
 * @method publishTable
 * @param {object} magtable MagTable to publish
 * @param {string} publishedBy Username of logged in user who called publish function
 * @returns API returns the saved state of the magtable
 */
export const publishTable = (magtable, publishedBy) => async dispatch => {
	try {
		const { assignments, dailyMix, forecastLow } = magtable;
		const data = { assignments, dailyMix, forecastLow, publishedBy };

		assignments.map(assignment => {
			const equipment = assignment.equipment;
			assignment.status = equipment.status;
			assignment.notice = equipment.notice;
			return assignment;
		});

		const res = await axios.post("/magtable", data, AXIOS_JSON_HEADER);

		dispatch({ type: PUBLISH_TABLE, payload: res.data });
		dispatch(setAlert("Publish Successful", "success"));
	} catch (err) {
		dispatch(setAlert(err.response.data.message, "warning"));
	}
};

export const updateTable = magtable => async dispatch => {
	dispatch({
		type: PUBLISH_TABLE,
		payload: magtable
	});
};

/**
 * Clears the MagTable of everything that is associated with it, from assignments to parking locations.
 *
 * @method clearTable
 * @return A MagTable cleared of everything.
 */
export const clearTable = () => dispatch => {
	try {
		dispatch({
			type: CLEAR_TABLE
		});

		dispatch(setAlert("Table Cleared Successful", "success"));
	} catch (err) {
		dispatch(setAlert(err.response.data.message, "warning"));
	}
};

export const clearAssignmentShifts = equipmentID => dispatch => {
	dispatch({
		type: CLEAR_ASSIGNMENT_SHIFTS,
		payload: equipmentID
	});
};

/**
 * Changes the selected apron
 *
 * @method setSelectedApron
 * @param {string} apronCode apronCode to change to
 * @return The apronCode to be changed to.
 */
export const setSelectedApron = apronCode => dispatch => {
	dispatch({
		type: SET_SELECTED_APRON,
		payload: apronCode
	});
};

/**
 * Gets the current state of the magtable from API
 *
 * @method getMagTable
 * @returns API returns the entire magtable object
 */
export const getMagTable = () => async dispatch => {
	try {
		const magtableRes = await axios.get("/magtable");
		const shiftRes = await axios.get("/shift/all");

		setTimeout(() => {
			dispatch({
				type: GET_ASSIGNMENT_DATA,
				payload: {
					employeeShifts: shiftRes.data,
					magtable: magtableRes.data
				}
			});
		}, 500);
	} catch (err) {
		if (err.response.status === 403) {
			dispatch(logout());
		}
		dispatch(setAlert("Session Expired", "warning"));

		console.log(err);
	}
};

/**
 * Gets the parkingLocations from the API
 *
 * @method getParkingLocations
 * @return API returns all the parkingLocations
 */
export const getParkingLocations = () => async dispatch => {
	try {
		const res = await axios.get("/magtable/parkingLocation/all");

		dispatch({
			type: GET_PARKING_LOCATIONS,
			payload: res.data
		});
	} catch (err) {}
};

/**
 * Adds a shift to the current employeeShifts list
 *
 * @method addEmployeeShift
 * @param {object} shiftData The shiftData from adding an employee to the employeeShifts list
 * @returns API returns the updated list of employee shifts
 */
export const addEmployeeShift = shiftData => async dispatch => {
	try {
		const res = await axios.post("/shift/add", shiftData, AXIOS_JSON_HEADER);

		dispatch({
			type: ADD_EMPLOYEE_SHIFT,
			payload: res.data
		});

		dispatch(
			setAlert(`Employee "${shiftData.name}" Added Successfully.`, "success")
		);
	} catch (err) {
		dispatch(setAlert(err.response.data.message, "warning"));
	}
};

/**
 * Refreshes the employee shifts.
 *
 * @method refreshEmployeeShifts
 * @return API returns a refreshed version of the employee shifts.
 */
export const refreshEmployeeShifts = () => async dispatch => {
	try {
		dispatch({
			type: REFRESHING_EMPLOYEE_SHIFTS
		});

		const res = await axios.get("/shift/update");

		setTimeout(() => {
			dispatch({
				type: REFRESH_EMPLOYEE_SHIFTS,
				payload: {
					employeeShifts: res.data
				}
			});
		}, 500);

		dispatch(setAlert("Shifts Updated!", "success"));
	} catch (err) {
		if (err.response.status === 403) {
			dispatch(logout());
			dispatch(setAlert("Session Expired", "warning"));
		}
	}
};

/**
 * Sets the daily mix to a given percentage
 *
 * @method setDailyMix
 * @param {integer} dailyMix dailyMix to set
 * @return Sets the daily mix for the day.
 */
export const setDailyMix = dailyMix => dispatch => {
	dispatch({
		type: SET_DAILY_MIX,
		payload: dailyMix
	});
};

/**
 *
 * Increments the daily mix.
 *
 * @method incrementDailyMix
 * @return Increments the daily mix volumes for the day.
 */
export const incrementDailyMix = () => dispatch => {
	dispatch({
		type: INCREMENT_DAILY_MIX
	});
};

/**
 *
 * Decrements the daily mix.
 *
 * @method decrementDailyMix
 * @return Decrements the daily mix volumes for the day.
 */
export const decrementDailyMix = () => dispatch => {
	dispatch({
		type: DECREMENT_DAILY_MIX
	});
};

/**
 * Fetches list of magtable records from the API that were published on a given date
 *
 * @param date date of related magtable records to fetch
 * @returns list of historical magtable records
 */
export const getMagtableHistoryList = date => async dispatch => {
	try {
		dispatch({
			type: FETCHING_MAGTABLE_HISTORY_LIST
		});

		const res = await axios.get(`/magtable/list/${date}`);

		setTimeout(() => {
			dispatch({
				type: GET_MAGTABLE_HISTORY_LIST,
				payload: res.data
			});
		}, 500);
	} catch (err) {
		console.error(err);
	}
};

/**
 * Fetches singular historical magtable record by ID
 *
 * @param id id of historical magtable record
 * @returns magtablerecord with given id
 */
export const getHistoricalMagtableRecord = id => async dispatch => {
	try {
		dispatch({ type: FETCHING_HISTORICAL_MAGTABLE });

		const res = await axios.get(`/magtable/${id}`);

		dispatch({
			type: GET_HISTORICAL_MAGTABLE,
			payload: res.data
		});
	} catch (err) {
		console.error(err);
	}
};

/**
 * Clears the current historical magtable
 * @returns nothing
 */
export const clearHistoricalMagtable = () => dispatch => {
	dispatch({
		type: CLEAR_HISTORICAL_MAGTABLE
	});
};

/**
 * Adds a daily message to the magtable
 *
 * @method addDailyMessage
 * @param {object} message message to add to the magtable
 * @returns API returns the updated list of daily messages
 */
// const addDailyMessage = message => async dispatch => {
// 	try {
// 		const res = await axios.put(
// 			"/magtable/message/",
// 			AXIOS_JSON_HEADER,
// 			message
// 		);
//
// 		dispatch({
// 			type: ADD_DAILY_MESSAGE,
// 			payload: res.data
// 		});
// 	} catch (err) {
// 		console.log(err);
// 	}
// };

/**
 * Removes a message from the daily message list
 *
 * @method removeDailyMessage
 * @param {integer} messageID messageID of the messaged to remove
 * @returns API returns the updated list of daily messages
 */
// const removeDailyMessage = messageID => async dispatch => {
// 	try {
// 		const res = await axios.delete(`/magtable/message/${messageID}`);
//
// 		dispatch({
// 			type: REMOVE_DAILY_MESSAGE,
// 			payload: res.data
// 		});
// 	} catch (err) {
// 		console.log(err);
// 	}
// };
