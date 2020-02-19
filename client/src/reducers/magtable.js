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
	TOGGLE_BAY_LEAD
} from "../actions/constants";

/*
 * structure of objects in assignments array
 *
 * {
 * 	equipment: {
 * 		id: String,
 * 		label: String,
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

const initialAssignments = [
	{
		equipment: {
			id: 1,
			label: 24,
			notice: "Equipment Conditional Status Message",
			status: "CON"
		},
		employeeShifts: [],
		parkingLocation: null,
		brixRecords: []
	},
	{
		equipment: {
			id: 2,
			label: 26,
			notice: "",
			status: "GO"
		},
		employeeShifts: [],
		parkingLocation: null,
		brixRecords: [
			{
				nozzle: 24.5,
				t1Tank: 52.3,
				t4Tank: 32.4,
				litersPurged: 80,
				timeMeasured: new Date()
			}
		]
	},
	{
		equipment: {
			id: 3,
			label: 32,
			notice: "",
			status: "INOP"
		},
		employeeShifts: [],
		parkingLocation: null,
		brixRecords: []
	},
	{
		equipment: {
			id: 3,
			label: 36,
			notice: "",
			status: "OOS"
		},
		employeeShifts: [],
		parkingLocation: null,
		brixRecords: []
	},
	{
		equipment: {
			id: 3,
			label: 36,
			notice: "",
			status: "OOS"
		},
		employeeShifts: [],
		parkingLocation: null,
		brixRecords: []
	},
	{
		equipment: {
			id: 1000,
			position: "Tower Spotter",
			notice: null,
			status: null
		},
		employeeShifts: [],
		parkingLocation: null,
		brixRecords: []
	},
	{
		equipment: {
			id: 1001,
			position: "EDA-CTM",
			notice: null,
			status: null
		},
		employeeShifts: [],
		parkingLocation: null,
		brixRecords: []
	},
	{
		equipment: {
			id: 1002,
			position: "EDA-Ice Man",
			notice: null,
			status: null
		},
		employeeShifts: [],
		parkingLocation: null,
		brixRecords: []
	},
	{
		equipment: {
			id: 1003,
			position: "EDA-Ice House",
			notice: null,
			status: null
		},
		employeeShifts: [],
		parkingLocation: null,
		brixRecords: []
	},
	{
		equipment: {
			id: 1011,
			position: "WDA-CTM",
			notice: null,
			status: null
		},
		employeeShifts: [],
		parkingLocation: null,
		brixRecords: []
	},
	{
		equipment: {
			id: 1012,
			position: "WDA-Ice Man",
			notice: null,
			status: null
		},
		employeeShifts: [],
		parkingLocation: null,
		brixRecords: []
	},
	{
		equipment: {
			id: 1013,
			position: "WDA-Ice House",
			notice: null,
			status: null
		},
		employeeShifts: [],
		parkingLocation: null,
		brixRecords: []
	}
];

const initialEmployeeShifts = [
	{
		id: 1,
		name: "MJ Kochuk",
		startTime: 400,
		endTime: 1600,
		labels: ["gp", "ts"]
	},
	{
		id: 2,
		name: "Arran Woodruff",
		startTime: 400,
		endTime: 1600,
		labels: ["ojt"]
	},
	{
		id: 3,
		name: "Mustafa Al Khaldi",
		startTime: 400,
		endTime: 1600,
		labels: ["ts"]
	},
	{
		id: 4,
		name: "Steven Wong",
		startTime: 400,
		endTime: 1600,
		labels: ["bl"]
	},
	{
		id: 5,
		name: "Tom Allcock",
		startTime: 600,
		endTime: 1200,
		labels: ["bl"]
	},
	{
		id: 6,
		name: "David Ward",
		startTime: 600,
		endTime: 1200,
		labels: ["ojt", "gp"]
	},
	{
		id: 7,
		name: "MJ Kochuk",
		startTime: 600,
		endTime: 1200,
		labels: ["gp", "ts"]
	},
	{
		id: 8,
		name: "Arran Woodruff",
		startTime: 600,
		endTime: 1200,
		labels: ["ojt"]
	},
	{
		id: 9,
		name: "Mustafa Al Khaldi",
		startTime: 1430,
		endTime: 230,
		labels: ["ts"]
	},
	{
		id: 10,
		name: "Steven Wong",
		startTime: 1430,
		endTime: 230,
		labels: ["bl"]
	},
	{
		id: 11,
		name: "Tom Allcock",
		startTime: 1430,
		endTime: 230,
		labels: ["bl"]
	},
	{
		id: 12,
		name: "David Ward",
		startTime: 1430,
		endTime: 230,
		labels: ["ojt", "gp"]
	}
];

const initialDailyMessages = [
	"Make sure to ______",
	"Dont forget your _____",
	"Slippery ice at _____"
];

const initialDailyMix = 45;

const initialParkingLocations = [
	{ id: 1, apron: "WDA", code: "AW1" },
	{ id: 2, apron: "WDA", code: "AE1" },
	{ id: 3, apron: "WDA", code: "BW1" },
	{ id: 4, apron: "WDA", code: "BE1" },
	{ id: 5, apron: "WDA", code: "BW2" },
	{ id: 6, apron: "WDA", code: "BE2" },
	{ id: 7, apron: "WDA", code: "CE2" },
	{ id: 8, apron: "WDA", code: "CW2" },
	{ id: 9, apron: "WDA", code: "CE3" },
	{ id: 10, apron: "WDA", code: "CW3" },
	{ id: 11, apron: "WDA", code: "D4" },
	{ id: 12, apron: "EDA", code: "AE1" },
	{ id: 13, apron: "EDA", code: "AC1" },
	{ id: 14, apron: "EDA", code: "AW1" },
	{ id: 15, apron: "EDA", code: "BE1" },
	{ id: 16, apron: "EDA", code: "BC1" },
	{ id: 17, apron: "EDA", code: "BW1" },
	{ id: 18, apron: "EDA", code: "BE3" },
	{ id: 19, apron: "EDA", code: "BC3" },
	{ id: 20, apron: "EDA", code: "BW3" },
	{ id: 21, apron: "EDA", code: "CE3" },
	{ id: 22, apron: "EDA", code: "CC3" },
	{ id: 23, apron: "EDA", code: "CW3" },
	{ id: 24, apron: "EDA", code: "CE4" },
	{ id: 25, apron: "EDA", code: "CC4" },
	{ id: 26, apron: "EDA", code: "CW4" },
	{ id: 27, apron: "EDA", code: "DE4" },
	{ id: 28, apron: "EDA", code: "DC4" },
	{ id: 29, apron: "EDA", code: "DW4" },
	{ id: 30, apron: "EDA", code: "DE6" },
	{ id: 31, apron: "EDA", code: "DC6" },
	{ id: 32, apron: "EDA", code: "DW6" },
	{ id: 33, apron: "EDA", code: "EE6" },
	{ id: 34, apron: "EDA", code: "EC6" },
	{ id: 35, apron: "EDA", code: "EW6" },
	{ id: 36, apron: "EDA", code: "EE7" },
	{ id: 37, apron: "EDA", code: "EC7" },
	{ id: 38, apron: "EDA", code: "EW7" },
	{ id: 39, apron: "EDA", code: "FE7" },
	{ id: 40, apron: "EDA", code: "FC7" },
	{ id: 41, apron: "EDA", code: "FW7" },
	{ id: 42, apron: "EDA", code: "FE9" },
	{ id: 43, apron: "EDA", code: "FC9" },
	{ id: 44, apron: "EDA", code: "FW9" },
	{ id: 45, apron: "EDA", code: "GE9" },
	{ id: 46, apron: "EDA", code: "GC9" },
	{ id: 47, apron: "EDA", code: "GW9" }
];

const initialState = {
	assignments: initialAssignments,
	employeeShifts: initialEmployeeShifts,
	dailyMessages: initialDailyMessages,
	parkingLocations: initialParkingLocations,
	dailyMix: initialDailyMix,
	selectedApron: EAST_APRON,
	loading: false
};

// const initialState = {
// 	assignments: [],
// 	employeeShifts: [],
// 	dailyMessages: [],
// 	parkingLocations: [],
// 	dailyMix: null,
// 	selectedApron: EAST_APRON,
// 	loading: true
// };

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
		// case ADD_EQUIPMENT_EMPLOYEE: // if assignment exists already
		// 	return {
		// 		...state,
		// 		assignments: state.assignments.map(assignment =>
		// 			assignment.equipment.id === payload.equipmentID
		// 				? {
		// 						...assignment,
		// 						employeeShifts: [...assignment.employeeShifts, payload.shift]
		// 				  }
		// 				: assignment
		// 		)
		// 	};
		case SET_EQUIPMENT_EMPLOYEE: // if assignment needs to be created
			const modifiedAssignment = state.assignments.find(
				assignment => assignment.equipment.id === payload.equipmentID
			);

			modifiedAssignment.splice(payload.equipmentSlotID, 0, payload.shift);
			// assignment.employeeShifts[payload.equipmentSlotID] = payload.shift;

			return {
				...state,
				assignments: state.assignments.map(assignment =>
					assignment.equipment.id === payload.equipmentID
						? modifiedAssignment
						: assignment
				)
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
		default:
			return state;
	}
}
