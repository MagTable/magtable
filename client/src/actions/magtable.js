import {
	SET_EQUIPMENT_EMPLOYEE,
	REMOVE_EQUIPMENT_EMPLOYEE,
	SET_TRUCK_LOCATION,
	REMOVE_TRUCK_LOCATION,
	PUBLISH_TABLE,
	// SET_DAILY_MIX,
	// ADD_DAILY_MESSAGE,
	// REMOVE_DAILY_MESSAGE,
	// TOGGLE_BAY_LEAD,
	AXIOS_JSON_HEADER,
	SET_SELECTED_APRON,
	GET_ASSIGNMENT_DATA,
	ADD_EMPLOYEE_SHIFT,
	REFRESH_EMPLOYEE_SHIFTS,
	REFRESHING_EMPLOYEE_SHIFTS,
	TOGGLE_AM_PM,
	CLEAR_TABLE,
	GET_PARKING_LOCATIONS
} from "./constants";
import axios from "axios";
import { setAlert } from "./alert";
import { logout } from "./auth";
import store from "../store";

export const toggleAM = () => dispatch => {
	dispatch({
		type: TOGGLE_AM_PM
	});
};

/**
 * Removes parkingLocation for a particular truck
 *
 * @param equipmentID id of equipment to remove location data from
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
 * @param equipmentID equipmentID of equipment to set location
 * @param parkingLocation parkingLocation to give to equipment
 * @param position position of truck within location
 * @param bay bay to assign to truck
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
 * @param equipmentID id of equipment to remove employeeShift from
 * @param shiftID shiftID of shift to remove from equipment
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
 * @param equipmentID equipmentID of equipment assignment to modify
 * @param shift shift to add to assignment employeeShifts
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
 * @param magtable magtable to publish
 * @param publishedBy username of logged in user who called publish function
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

		dispatch({
			type: PUBLISH_TABLE,
			payload: res.data
		});

		dispatch(setAlert("Publish Successful", "success"));
	} catch (err) {
		dispatch(setAlert(err.response.data.message, "warning"));
		console.log(err);
	}
};

export const clearTable = () => dispatch => {
	dispatch({
		type: CLEAR_TABLE
	});
};

/**
 * Adds a daily message to the magtable
 *
 * @param message message to add to the magtable
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
 * @param messageID messageID of the messaged to remove
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

/**
 * Changes the selected apron
 *
 * @param apronCode apronCode to change to
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
 * @param shiftData
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
		console.log(err);
	}
};

/*
 * Toggles bay lead status of an assignment
 *
 * @param equipmentID equipmentID of assignment to toggle
 */
// const toggleBayLead = equipmentID => dispatch => {
// 	dispatch({
// 		type: TOGGLE_BAY_LEAD,
// 		payload: equipmentID
// 	});
// };

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
		console.log(err);
	}
};
