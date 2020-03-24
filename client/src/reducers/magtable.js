import {
	ADD_DAILY_MESSAGE,
	ADD_EMPLOYEE_SHIFT,
	EAST_APRON,
	GET_ASSIGNMENT_DATA,
	PUBLISH_TABLE,
	REMOVE_DAILY_MESSAGE,
	REMOVE_EQUIPMENT_EMPLOYEE,
	REMOVE_TRUCK_LOCATION,
	SET_EQUIPMENT_EMPLOYEE,
	SET_SELECTED_APRON,
	SET_TRUCK_LOCATION,
	TOGGLE_BAY_LEAD,
	REFRESH_EMPLOYEE_SHIFTS,
	REFRESHING_EMPLOYEE_SHIFTS,
	CLEAR_TABLE,
	GET_PARKING_LOCATIONS,
	TOGGLE_AM_PM,
	ADD_TRUCK,
	EDIT_TRUCK,
	DELETE_TRUCK
} from "../actions/constants";
import { ParkingZones } from "../res/test_data/magtable";

/**
 * @date 2020-03-24
 * @author Arran Woodruff
 * @module Redux
 */

const initialState = {
	assignments: [],
	employeeShifts: {
		scheduleDate: null,
		lastUpdated: null,
		shifts: []
	},
	dailyMessages: "",
	selectedApron: EAST_APRON,
	loading: true,
	shiftsLoading: true,
	showAM: true,
	parkingZones: ParkingZones,
	parkingLocations: []
};

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case REMOVE_TRUCK_LOCATION:
			return {
				...state,
				assignments: state.assignments.map(assignment =>
					assignment.equipment.id === payload // equipmentID
						? {
								...assignment,
								parkingLocation: null
						  }
						: assignment
				)
			};
		case SET_TRUCK_LOCATION:
			return {
				...state,
				assignments: state.assignments.map(assignment =>
					assignment.equipment.id === payload.equipmentID
						? {
								...assignment,
								parkingLocation: payload.parkingLocation
						  }
						: assignment
				)
			};
		case REMOVE_EQUIPMENT_EMPLOYEE:
			// loops through assignments to find the match for given payload.equipmentID
			// when the right assignment is found, its employeeShifts are filtered
			// and the employeeShift with a matching payload.shiftID is removed
			return {
				...state,
				assignments: state.assignments.map(assignment =>
					assignment.equipment.id === payload.equipmentID
						? {
								...assignment,
								employeeShifts: assignment.employeeShifts.filter(
									shift => shift?.id !== payload.shiftID
								)
						  }
						: assignment
				)
			};
		case SET_EQUIPMENT_EMPLOYEE: // if assignment needs to be created
			// replaces the modified assignment in the assignments list
			// sets assigned equipment for the associated shift object
			return {
				...state,
				assignments: state.assignments.map(assignment =>
					assignment.equipment.id === payload.equipmentID
						? {
								...assignment,
								employeeShifts: [...assignment.employeeShifts, payload.shift]
						  }
						: assignment
				)
			};
		case CLEAR_TABLE:
			return {
				...state,
				assignments: state.assignments.map(assignment => ({
					...assignment,
					employeeShifts: [],
					parkingLocation: null
				}))
			};
		case PUBLISH_TABLE:
			return {
				...state,
				assignments: payload.assignments
				// server will echo the given assignments to verify changes were made properly
			};
		case REMOVE_DAILY_MESSAGE: // API request for these actions will probably just return all daily messages after addition or deletion
		case ADD_DAILY_MESSAGE:
			return {
				...state,
				dailyMessages: payload
			};
		case SET_SELECTED_APRON:
			return {
				...state,
				selectedApron: payload
			};
		case GET_ASSIGNMENT_DATA:
			return {
				...state,
				employeeShifts: payload.employeeShifts,
				assignments: payload.magtable.assignments,
				timePublished: payload.magtable.timePublished,
				dailyMix: payload.magtable.dailyMix,
				loading: false,
				shiftsLoading: false
			};
		case GET_PARKING_LOCATIONS:
			return {
				...state,
				parkingLocations: payload
			};
		case ADD_EMPLOYEE_SHIFT:
			return {
				...state,
				employeeShifts: payload
			};
		case TOGGLE_BAY_LEAD:
			// toggles the isBayLead attribute of the specified truck according to payload (id)
			return {
				...state,
				trucks: state.trucks.map(truck =>
					truck.id === payload
						? { ...truck, isBayLead: !truck.isBayLead }
						: truck
				)
			};
		case REFRESHING_EMPLOYEE_SHIFTS:
			return {
				...state,
				shiftsLoading: true
			};
		case REFRESH_EMPLOYEE_SHIFTS:
			return {
				...state,
				employeeShifts: payload.employeeShifts,
				shiftsLoading: false
			};
		case TOGGLE_AM_PM:
			return {
				...state,
				showAM: !state.showAM
			};
		case ADD_TRUCK:
			return {
				...state,
				assignments: [
					...state.assignments,
					{
						equipment: payload,
						employeeShifts: [],
						parkingLocation: null,
						brixRecords: []
					}
				].sort((a, b) => a.equipment.id - b.equipment.id),
				loading: false
			};
		case EDIT_TRUCK:
			return {
				...state,
				assignments: state.assignments.map(truck =>
					truck.equipment.id === payload.id
						? {
								...truck,
								equipment: payload
						  }
						: truck
				),
				loading: false
			};
		case DELETE_TRUCK:
			return {
				...state,
				assignments: state.assignments.filter(
					truck => truck.equipment.id !== payload
				),
				loading: false
			};
		default:
			return state;
	}
}
