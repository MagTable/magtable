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

export const initialAssignments = [
	{
		equipment: {
			id: 24,
			notice: "Equipment Conditional Status Message",
			status: "CON"
		},
		employeeShifts: [null, null, null, null],
		parkingLocation: null,
		brixRecords: []
	},
	{
		equipment: {
			id: 26,
			notice: "",
			status: "GO"
		},
		employeeShifts: [null, null, null, null],
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
			id: 32,
			notice: "",
			status: "INOP"
		},
		employeeShifts: [null, null, null, null],
		parkingLocation: null,
		brixRecords: []
	},
	{
		equipment: {
			id: 34,
			notice: "",
			status: "OOS"
		},
		employeeShifts: [null, null, null, null],
		parkingLocation: null,
		brixRecords: []
	},
	{
		equipment: {
			id: 36,
			notice: "",
			status: "OOS"
		},
		employeeShifts: [null, null, null, null],
		parkingLocation: null,
		brixRecords: []
	},
	{
		equipment: {
			id: 1000,
			position: "Tower Spotter"
		},
		employeeShifts: [null, null, null, null],
		parkingLocation: null,
		brixRecords: []
	},
	{
		equipment: {
			id: 1001,
			position: "EDA-CTM"
		},
		employeeShifts: [null, null, null, null],
		parkingLocation: null,
		brixRecords: []
	},
	{
		equipment: {
			id: 1002,
			position: "EDA-Ice Man"
		},
		employeeShifts: [null, null, null, null],
		parkingLocation: null,
		brixRecords: []
	},
	{
		equipment: {
			id: 1003,
			position: "EDA-Ice House"
		},
		employeeShifts: [null, null, null, null],
		parkingLocation: null,
		brixRecords: []
	},
	{
		equipment: {
			id: 1011,
			position: "WDA-CTM"
		},
		employeeShifts: [null, null, null, null],
		parkingLocation: null,
		brixRecords: []
	},
	{
		equipment: {
			id: 1012,
			position: "WDA-Ice Man"
		},
		employeeShifts: [null, null, null, null],
		parkingLocation: null,
		brixRecords: []
	},
	{
		equipment: {
			id: 1013,
			position: "WDA-Ice House"
		},
		employeeShifts: [null, null, null, null],
		parkingLocation: null,
		brixRecords: []
	}
];

export const initialEmployeeShifts = [
	{
		id: 1,
		name: "MJ Kochuk",
		startTime: 400,
		endTime: 1600,
		description: "OJT",
		hasAvop: true,
		isGreen: false
	},
	{
		id: 2,
		name: "Arran Woodruff",
		startTime: 400,
		endTime: 1600,
		description: "Tower Spotter",
		hasAvop: false,
		isGreen: true
	},
	{
		id: 3,
		name: "Mustafa Al Khaldi",
		startTime: 400,
		endTime: 1600,
		description: "Icehouse",
		hasAvop: false,
		isGreen: true
	},
	{
		id: 4,
		name: "Steven Wong",
		startTime: 400,
		endTime: 1600,
		description: "OJT",
		hasAvop: false,
		isGreen: true
	},
	{
		id: 5,
		name: "Tom Allcock",
		startTime: 600,
		endTime: 1200,
		description: "Operations Supervisor",
		hasAvop: true,
		isGreen: false
	},
	{
		id: 6,
		name: "David Ward",
		startTime: 600,
		endTime: 1200,
		description: "Technician",
		hasAvop: false,
		isGreen: true
	},
	{
		id: 7,
		name: "MJ Kochuk",
		startTime: 600,
		endTime: 1200,
		description: "OJT-Tower",
		hasAvop: true,
		isGreen: false
	},
	{
		id: 8,
		name: "Arran Woodruff",
		startTime: 600,
		endTime: 1200,
		description: "Technician",
		hasAvop: false,
		isGreen: false
	},
	{
		id: 9,
		name: "Mustafa Al Khaldi",
		startTime: 1430,
		endTime: 230,
		description: "OJT-Tower",
		hasAvop: true,
		isGreen: true
	},
	{
		id: 10,
		name: "Steven Wong",
		startTime: 1430,
		endTime: 230,
		description: "Practical Trainer",
		hasAvop: true,
		isGreen: true
	},
	{
		id: 11,
		name: "Tom Allcock",
		startTime: 1430,
		endTime: 230,
		description: "Practical Trainer",
		hasAvop: true,
		isGreen: false
	},
	{
		id: 12,
		name: "David Ward",
		startTime: 1430,
		endTime: 230,
		description: "Iceman",
		hasAvop: true,
		isGreen: false
	}
];

export const initialDailyMessages = [
	"Make sure to ______",
	"Dont forget your _____",
	"Slippery ice at _____"
];

export const initialDailyMix = 45;

// {
// 	id: 2,
// 		apron: "EDA",
// 	parkingLocations: {
// default: "BE",
// 		additional: {
// 		left: "BE1",
// 			right: "BE3"
// 	}
// }
// },

export const initialParkingLocations = [
	{
		id: 1,
		apron: "WDA",
		phonetic: "A",
		east: true,
		center: false,
		west: true,
		left: null,
		right: 1
	},
	{
		id: 2,
		apron: "WDA",
		phonetic: "B",
		east: true,
		center: false,
		west: true,
		left: 1,
		right: 2
	},
	{
		id: 3,
		apron: "WDA",
		phonetic: "C",
		east: true,
		center: false,
		west: true,
		left: 2,
		right: 4,
		composite: 3
	},
	{
		id: 4,
		apron: "WDA",
		phonetic: "D",
		east: true,
		center: false,
		west: false,
		left: 4,
		double: true
	},
	{
		id: 5,
		apron: "EDA",
		phonetic: "A",
		east: true,
		center: true,
		west: true,
		left: null,
		right: 1
	},
	{
		id: 6,
		apron: "EDA",
		phonetic: "B",
		east: true,
		center: true,
		west: true,
		left: 1,
		right: 3,
		composite: 2
	},
	{
		id: 7,
		apron: "EDA",
		phonetic: "C",
		east: true,
		center: true,
		west: true,
		left: 3,
		right: 4
	},
	{
		id: 8,
		apron: "EDA",
		phonetic: "D",
		east: true,
		center: true,
		west: true,
		left: 4,
		right: 6,
		composite: 5
	},
	{
		id: 9,
		apron: "EDA",
		phonetic: "E",
		east: true,
		center: true,
		west: true,
		left: 6,
		right: 7
	},
	{
		id: 10,
		apron: "EDA",
		phonetic: "F",
		east: true,
		center: true,
		west: true,
		left: 7,
		right: 9
	},
	{
		id: 10,
		apron: "EDA",
		phonetic: "F",
		east: true,
		center: true,
		west: true,
		left: 9,
		right: null
	}
];
