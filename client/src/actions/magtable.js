import {
	SET_EQUIPMENT_EMPLOYEE,
	REMOVE_EQUIPMENT_EMPLOYEE,
	SET_TRUCK_LOCATION,
	REMOVE_TRUCK_LOCATION,
	PUBLISH_TABLE,
	ADD_BRIX_RECORD,
	SET_DAILY_MIX,
	ADD_DAILY_MESSAGE,
	AXIOS_JSON_HEADER,
	REMOVE_DAILY_MESSAGE,
	SET_SELECTED_APRON,
	GET_ASSIGNMENT_DATA,
	ADD_EMPLOYEE_SHIFT,
	TOGGLE_BAY_LEAD,
	REFRESH_EMPLOYEE_SHIFTS,
	REFRESHING_EMPLOYEE_SHIFTS
} from "./constants";
import axios from "axios";
import { setAlert } from "./alert";

// todo update all async actions with API calls

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
 * @param parkingLocationID parkingLocationID of location to give to equipment
 */
export const setTruckLocation = (
	equipmentID,
	parkingLocationID
) => dispatch => {
	dispatch({
		type: SET_TRUCK_LOCATION,
		payload: { equipmentID, parkingLocationID }
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
 * @param equipmentSlotID index of assignment employeeShift to set
 */
export const setEquipmentEmployee = (
	equipmentID,
	shift,
	equipmentSlotID
) => dispatch => {
	dispatch({
		type: SET_EQUIPMENT_EMPLOYEE,
		payload: { equipmentID, shift, equipmentSlotID }
	});
};

/**
 * Sends the current state of the magtable to the API for persistance
 *
 * @param magtable magtable to publish
 * @returns API returns the saved state of the magtable
 */
const publishTable = magtable => async dispatch => {
	try {
		const res = await axios.post(
			"/magtable/publish",
			AXIOS_JSON_HEADER,
			magtable
		);
		dispatch({
			type: PUBLISH_TABLE,
			payload: res.data
		});
	} catch (err) {
		console.log(err);
	}
};

/**
 * Saves a brix record to an assignment's brixRecords list
 *
 * @param equipmentID equipmentID of assignment to add brixRecord to
 * @param brixRecord brixRecord to save to assignment
 * @returns API returns updated list of brix records for the assignment
 */
const addBrixRecord = (equipmentID, brixRecord) => async dispatch => {
	try {
		const res = await axios.put("/magtable/brix", AXIOS_JSON_HEADER, {
			equipmentID,
			brixRecord
		});

		dispatch({
			type: ADD_BRIX_RECORD,
			payload: res.data
		});
	} catch (err) {
		console.log(err);
	}
};

/**
 * Sets the daily mix to a given percentage
 *
 * @param dailyMix dailyMix to set
 */
const setDailyMix = dailyMix => dispatch => {
	dispatch({
		type: SET_DAILY_MIX,
		payload: dailyMix
	});
};

/**
 * Adds a daily message to the magtable
 *
 * @param message message to add to the magtable
 * @returns API returns the updated list of daily messages
 */
const addDailyMessage = message => async dispatch => {
	try {
		const res = await axios.put(
			"/magtable/message/",
			AXIOS_JSON_HEADER,
			message
		);

		dispatch({
			type: ADD_DAILY_MESSAGE,
			payload: res.data
		});
	} catch (err) {
		console.log(err);
	}
};

/**
 * Removes a message from the daily message list
 *
 * @param messageID messageID of the messaged to remove
 * @returns API returns the updated list of daily messages
 */
const removeDailyMessage = messageID => async dispatch => {
	try {
		const res = await axios.delete(`/magtable/message/${messageID}`);

		dispatch({
			type: REMOVE_DAILY_MESSAGE,
			payload: res.data
		});
	} catch (err) {
		console.log(err);
	}
};

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
	// todo currently only equipment and shifts are returned here,
	//  will be updated once entire magtable is returned by api
	try {
		const shiftRes = await axios.get("/shift/all");
		const truckRes = await axios.get("/equipment/truck/all");
		const towerRes = await axios.get("/equipment/tower/all");

		dispatch({
			type: GET_ASSIGNMENT_DATA,
			payload: {
				employeeShifts: shiftRes.data,
				equipment: [...truckRes.data, ...towerRes.data]
			}
		});
	} catch (err) {
		console.log(err);
	}
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

/**
 * Toggles bay lead status of an assignment
 *
 * @param equipmentID equipmentID of assignment to toggle
 */
const toggleBayLead = equipmentID => dispatch => {
	dispatch({
		type: TOGGLE_BAY_LEAD,
		payload: equipmentID
	});
};

export const refreshEmployeeShifts = () => async dispatch => {
	try {
		dispatch({
			type: REFRESHING_EMPLOYEE_SHIFTS
		});

		const res = await axios.get("/shift/update");
		dispatch({
			type: REFRESH_EMPLOYEE_SHIFTS,
			payload: {
				employeeShifts: res.data
			}
		});
		dispatch(setAlert("Shifts Updated!", "success"));
	} catch (err) {
		console.log(err);
	}
};
