import {
	ADD_BRIX_RECORD,
	ADD_DAILY_MESSAGE,
	ADD_EMPLOYEE_SHIFT,
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
	TOGGLE_BAY_LEAD,
	REFRESH_EMPLOYEE_SHIFTS
} from "../actions/constants";

const initialState = {
	assignments: [],
	employeeShifts: [],
	dailyMessages: "",
	dailyMix: 40,
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
								parkingLocation: payload.parkingLocationID
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
								employeeShifts: assignment.employeeShifts.map(shift =>
									shift?.id === payload.shiftID ? null : shift
								)
						  }
						: assignment
				),
				employeeShifts: {
					...state.employeeShifts,
					shifts: state.employeeShifts.shifts.map(shift =>
						shift.id === payload.shiftID
							? { ...shift, assignedEquipment: null }
							: shift
					)
				}
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
								employeeShifts: assignment.employeeShifts.map((shift, i) =>
									i === payload.equipmentSlotID ? payload.shift : shift
								)
						  }
						: assignment
				),
				employeeShifts: {
					...state.employeeShifts,
					shifts: state.employeeShifts.shifts.map(shift =>
						shift.id === payload.shift.id
							? { ...shift, assignedEquipment: payload.equipmentID }
							: shift
					)
				}
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
					assignment.equipment.id === payload.equipmentID
						? {
								...assignment,
								brixRecords: payload // update list of brixRecords from API
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
				assignments: payload.equipment.map(elem => ({
					equipment: elem,
					employeeShifts: [null, null, null, null],
					parkingLocation: null,
					brixRecords: []
				})),
				employeeShifts: payload.employeeShifts,
				// dailyMessages: payload.dailyMessages,
				// dailyMix: payload.dailyMix,
				loading: false
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
		case REFRESH_EMPLOYEE_SHIFTS:
			return {
				...state,
				employeeShifts: payload.employeeShifts,
				loading: false
			};
		default:
			return state;
	}
}
