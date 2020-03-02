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

export const initialParkingLocations = [
	{
		id: 1,
		apron: "EDA",
		code: "AE",
		parkingLocations: {}
	},
	{
		id: 2,
		apron: "EDA",
		code: "BE",
		parkingLocations: {
			left: "1",
			right: "2"
		}
	},
	{ id: 1, apron: "WDA", code: "AW1" },
	{ id: 2, apron: "WDA", code: "AE1" },
	{ id: 3, apron: "WDA", code: "BE" },
	{ id: 4, apron: "WDA", code: "BE1" },
	{ id: 5, apron: "WDA", code: "BE2" },
	{ id: 6, apron: "WDA", code: "BW" },
	{ id: 7, apron: "WDA", code: "BW1" },
	{ id: 8, apron: "WDA", code: "BW2" },
	{ id: 9, apron: "WDA", code: "CE" },
	{ id: 10, apron: "WDA", code: "CE2" },
	{ id: 11, apron: "WDA", code: "CE3" },
	{ id: 12, apron: "WDA", code: "CW" },
	{ id: 13, apron: "WDA", code: "CW2" },
	{ id: 14, apron: "WDA", code: "CW3" },
	{ id: 15, apron: "WDA", code: "D4" },
	{ id: 16, apron: "WDA", code: "D4" },
	{ id: 17, apron: "EDA", code: "AE1" },
	{ id: 18, apron: "EDA", code: "AC1" },
	{ id: 19, apron: "EDA", code: "AW1" },
	{ id: 20, apron: "EDA", code: "BE" },
	{ id: 21, apron: "EDA", code: "BE1" },
	{ id: 22, apron: "EDA", code: "BE3" },
	{ id: 23, apron: "EDA", code: "BC" },
	{ id: 24, apron: "EDA", code: "BC1" },
	{ id: 25, apron: "EDA", code: "BC3" },
	{ id: 26, apron: "EDA", code: "BW" },
	{ id: 27, apron: "EDA", code: "BW1" },
	{ id: 28, apron: "EDA", code: "BW3" },
	{ id: 29, apron: "EDA", code: "CE" },
	{ id: 30, apron: "EDA", code: "CE3" },
	{ id: 31, apron: "EDA", code: "CE4" },
	{ id: 32, apron: "EDA", code: "CC" },
	{ id: 33, apron: "EDA", code: "CC3" },
	{ id: 34, apron: "EDA", code: "CC4" },
	{ id: 35, apron: "EDA", code: "CW" },
	{ id: 36, apron: "EDA", code: "CW3" },
	{ id: 37, apron: "EDA", code: "CW4" },
	{ id: 38, apron: "EDA", code: "DE" },
	{ id: 39, apron: "EDA", code: "DE4" },
	{ id: 40, apron: "EDA", code: "DE6" },
	{ id: 41, apron: "EDA", code: "DC" },
	{ id: 42, apron: "EDA", code: "DC4" },
	{ id: 43, apron: "EDA", code: "DC6" },
	{ id: 44, apron: "EDA", code: "DW" },
	{ id: 45, apron: "EDA", code: "DW4" },
	{ id: 46, apron: "EDA", code: "DW6" },
	{ id: 47, apron: "EDA", code: "EE" },
	{ id: 48, apron: "EDA", code: "EE6" },
	{ id: 49, apron: "EDA", code: "EE7" },
	{ id: 50, apron: "EDA", code: "EC" },
	{ id: 51, apron: "EDA", code: "EC6" },
	{ id: 52, apron: "EDA", code: "EC7" },
	{ id: 53, apron: "EDA", code: "EW" },
	{ id: 54, apron: "EDA", code: "EW6" },
	{ id: 55, apron: "EDA", code: "EW7" },
	{ id: 56, apron: "EDA", code: "FE" },
	{ id: 57, apron: "EDA", code: "FE7" },
	{ id: 58, apron: "EDA", code: "FE9" },
	{ id: 59, apron: "EDA", code: "FC" },
	{ id: 60, apron: "EDA", code: "FC7" },
	{ id: 61, apron: "EDA", code: "FC9" },
	{ id: 62, apron: "EDA", code: "FW" },
	{ id: 63, apron: "EDA", code: "FW7" },
	{ id: 64, apron: "EDA", code: "FW9" },
	{ id: 65, apron: "EDA", code: "GE9" },
	{ id: 66, apron: "EDA", code: "GC9" },
	{ id: 67, apron: "EDA", code: "GW9" }
];