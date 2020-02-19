import {
	ADD_BRIX_RECORD,
	ADD_DAILY_MESSAGE,
	ADD_EMPLOYEE_SHIFT,
	ADD_EQUIPMENT_EMPLOYEE,
	EAST_APRON,
	GET_ASSIGNMENT_DATA,
	PUBLISH_TABLE,
	REMOVE_DAILY_MESSAGE,
	REMOVE_EQUIPMENT_EMPLOYEE,
	REMOVE_TRUCK_LOCATION,
	SET_DAILY_MIX,
	SET_EQUIPMENT_EMPLOYEE,
	SET_SELECTED_APRON,
	SET_TRUCK_LOCATION,
	TOGGLE_BAY_LEAD
} from "../actions/constants";

/*
 * structure of objects in assignments array
 *
 * {
 * 	equipment: {
 * 		id: String,
 * 		notice: String,
 * 		status: String,
 * 	}
 * 	employeeShifts: [
 * 		{
 * 			name: String,
 * 			shiftTime: String,
 * 			shiftPosition: String,
 * 			isGreen: boolean,
 * 			hasAvop: boolean,
 * 		}
 * 	]
 *	parkingLocation: String
 * 	brixRecords: [
 * 		{
 * 			nozzle: number,
 * 			t1Tank: number,
 * 			t4Tank: number,
 * 			litersPurged: number,
 *			timeMeasured: Date,
 * 		}
 * 	]
 * }
 */

const initialState = {
	assignments: [],
	employeeShifts: [],
	dailyMessages: [],
	parkingLocations: [],
	dailyMix: null,
	selectedApron: EAST_APRON,
	loading: true
};

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case REMOVE_TRUCK_LOCATION:
			return {
				...state,
				assignments: state.assignments.map(assignment =>
					assignment.equipment.id === payload.equipmentID
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
								parkingLocation: payload.parkingLocationID
						  }
						: assignment
				)
			};
		case REMOVE_EQUIPMENT_EMPLOYEE:
			return {
				...state,
				assignments: state.assignments.map(assignment =>
					assignment.equipment.id === payload.equipmentID
						? {
								...assignment,
								employeeShifts: assignment.employeeShifts.filter(
									shift => shift.id !== payload.shiftID
								)
						  }
						: assignment
				)
			};
		case ADD_EQUIPMENT_EMPLOYEE: // if assignment exists already
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
		case SET_EQUIPMENT_EMPLOYEE: // if assignment needs to be created
			return {
				...state,
				assignments: [
					...state.assignments,
					{
						equipment: payload.equipment,
						employeeShifts: [payload.shift],
						parkingLocation: null,
						brixRecords: []
					}
				]
			};
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
				assignments: payload.trucks.map(truck => ({
					equipment: truck,
					employeeShifts: [],
					parkingLocation: null,
					brixRecords: []
				})),
				employeeShifts: payload.employeeShifts,
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
