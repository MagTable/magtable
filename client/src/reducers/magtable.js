import {
	ADD_BRIX_RECORD,
	ADD_DAILY_MESSAGE,
	ADD_EMPLOYEE_SHIFT,
	EAST_APRON,
	GET_ASSIGNMENT_DATA,
	PUBLISH_TABLE,
	REMOVE_DAILY_MESSAGE,
	SET_DAILY_MIX,
	SET_EQUIPMENT_EMPLOYEE,
	SET_SELECTED_APRON,
	TOGGLE_BAY_LEAD
} from "../actions/constants";

/*
 * structure of objects in assignments array
 *
 * {
 * 	publishedBy: String
 * 	equipment: number
 * 	employeeShifts: object
 *	parkingLocation: String
 * 	brixRecords: array
 * }
 */

const initialState = {
	assignments: [],
	employeeShifts: [],
	trucks: [],
	dailyMessages: [],
	dailyMix: null,
	selectedApron: EAST_APRON,
	loading: true
};

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case SET_EQUIPMENT_EMPLOYEE:
			const existingAssignment = state.assignments.find(
				assignment => assignment.equipmentID === payload.equipmentID
			);

			if (existingAssignment) {
				return {
					...state,
					assignments: state.assignments.map(assignment =>
						assignment.equipmentID === payload.equipmentID
							? {
									...assignment,
									employeeShifts: [...assignment.employeeShifts, payload.shift]
							  }
							: assignment
					)
				};
			} else {
				return {
					...state,
					assignments: [
						...state.assignments,
						{
							equipmentID: payload.equipmentID,
							employeeShifts: [payload.shift]
						}
					]
				};
			}
		case PUBLISH_TABLE:
			return {
				...state,
				assignments: payload // server will echo the given assignments to verify changes were made properly
			};
		case ADD_BRIX_RECORD:
			return {
				...state,
				assignments: state.assignments.map(assignment =>
					assignment.equipment.id === payload.truckID
						? {
								...assignment,
								brixRecords: [...assignment.brixRecords, payload.brixRecord]
						  }
						: assignment
				)
			};
		case SET_DAILY_MIX:
			return {
				...state,
				dailyMix: payload
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
				assignments: payload.assignments,
				employeeShifts: payload.employeeShifts,
				trucks: payload.trucks,
				dailyMessages: payload.dailyMessages,
				dailyMix: payload.dailyMix,
				loading: false
			};
		case ADD_EMPLOYEE_SHIFT:
			return {
				...state,
				employeeShifts: [...state.employeeShifts, payload]
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
		default:
			return state;
	}
}
