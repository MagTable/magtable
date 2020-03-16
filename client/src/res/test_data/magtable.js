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
		right: "4", // todo - not do this
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
		id: 11,
		apron: "EDA",
		phonetic: "G",
		east: true,
		center: true,
		west: true,
		left: 9,
		right: null
	}
];

export const sampleWeather = {
	cod: "200",
	message: 0,
	cnt: 40,
	list: [
		{
			dt: 1584316800,
			main: {
				temp: -8.78,
				feels_like: -12.71,
				temp_min: -9.76,
				temp_max: -8.78,
				pressure: 1031,
				sea_level: 1031,
				grnd_level: 901,
				humidity: 82,
				temp_kf: 0.98
			},
			weather: [
				{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }
			],
			clouds: { all: 0 },
			wind: { speed: 1.11, deg: 181 },
			sys: { pod: "d" },
			dt_txt: "2020-03-16 00:00:00"
		},
		{
			dt: 1584327600,
			main: {
				temp: -13.69,
				feels_like: -18.31,
				temp_min: -14.43,
				temp_max: -13.69,
				pressure: 1034,
				sea_level: 1034,
				grnd_level: 902,
				humidity: 85,
				temp_kf: 0.74
			},
			weather: [
				{ id: 800, main: "Clear", description: "clear sky", icon: "01n" }
			],
			clouds: { all: 3 },
			wind: { speed: 1.74, deg: 282 },
			sys: { pod: "n" },
			dt_txt: "2020-03-16 03:00:00"
		},
		{
			dt: 1584338400,
			main: {
				temp: -11.08,
				feels_like: -16.01,
				temp_min: -11.57,
				temp_max: -11.08,
				pressure: 1033,
				sea_level: 1033,
				grnd_level: 902,
				humidity: 87,
				temp_kf: 0.49
			},
			weather: [
				{
					id: 802,
					main: "Clouds",
					description: "scattered clouds",
					icon: "03n"
				}
			],
			clouds: { all: 48 },
			wind: { speed: 2.4, deg: 275 },
			sys: { pod: "n" },
			dt_txt: "2020-03-16 06:00:00"
		},
		{
			dt: 1584349200,
			main: {
				temp: -8.38,
				feels_like: -12.77,
				temp_min: -8.63,
				temp_max: -8.38,
				pressure: 1031,
				sea_level: 1031,
				grnd_level: 900,
				humidity: 88,
				temp_kf: 0.25
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" }
			],
			clouds: { all: 100 },
			wind: { speed: 1.91, deg: 273 },
			sys: { pod: "n" },
			dt_txt: "2020-03-16 09:00:00"
		},
		{
			dt: 1584360000,
			main: {
				temp: -10.05,
				feels_like: -14.58,
				temp_min: -10.05,
				temp_max: -10.05,
				pressure: 1031,
				sea_level: 1031,
				grnd_level: 900,
				humidity: 84,
				temp_kf: 0
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" }
			],
			clouds: { all: 98 },
			wind: { speed: 1.89, deg: 258 },
			sys: { pod: "n" },
			dt_txt: "2020-03-16 12:00:00"
		},
		{
			dt: 1584370800,
			main: {
				temp: -8.76,
				feels_like: -13.56,
				temp_min: -8.76,
				temp_max: -8.76,
				pressure: 1031,
				sea_level: 1031,
				grnd_level: 900,
				humidity: 82,
				temp_kf: 0
			},
			weather: [
				{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }
			],
			clouds: { all: 0 },
			wind: { speed: 2.36, deg: 280 },
			sys: { pod: "d" },
			dt_txt: "2020-03-16 15:00:00"
		},
		{
			dt: 1584381600,
			main: {
				temp: -1.46,
				feels_like: -5.43,
				temp_min: -1.46,
				temp_max: -1.46,
				pressure: 1027,
				sea_level: 1027,
				grnd_level: 900,
				humidity: 78,
				temp_kf: 0
			},
			weather: [
				{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }
			],
			clouds: { all: 0 },
			wind: { speed: 1.98, deg: 268 },
			sys: { pod: "d" },
			dt_txt: "2020-03-16 18:00:00"
		},
		{
			dt: 1584392400,
			main: {
				temp: -0.34,
				feels_like: -3.84,
				temp_min: -0.34,
				temp_max: -0.34,
				pressure: 1025,
				sea_level: 1025,
				grnd_level: 899,
				humidity: 94,
				temp_kf: 0
			},
			weather: [
				{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }
			],
			clouds: { all: 0 },
			wind: { speed: 1.92, deg: 155 },
			sys: { pod: "d" },
			dt_txt: "2020-03-16 21:00:00"
		},
		{
			dt: 1584403200,
			main: {
				temp: -1.13,
				feels_like: -5.65,
				temp_min: -1.13,
				temp_max: -1.13,
				pressure: 1022,
				sea_level: 1022,
				grnd_level: 896,
				humidity: 85,
				temp_kf: 0
			},
			weather: [
				{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }
			],
			clouds: { all: 0 },
			wind: { speed: 2.99, deg: 153 },
			sys: { pod: "d" },
			dt_txt: "2020-03-17 00:00:00"
		},
		{
			dt: 1584414000,
			main: {
				temp: -7.24,
				feels_like: -12.15,
				temp_min: -7.24,
				temp_max: -7.24,
				pressure: 1022,
				sea_level: 1022,
				grnd_level: 894,
				humidity: 77,
				temp_kf: 0
			},
			weather: [
				{ id: 801, main: "Clouds", description: "few clouds", icon: "02n" }
			],
			clouds: { all: 18 },
			wind: { speed: 2.59, deg: 173 },
			sys: { pod: "n" },
			dt_txt: "2020-03-17 03:00:00"
		},
		{
			dt: 1584424800,
			main: {
				temp: -9.18,
				feels_like: -13.41,
				temp_min: -9.18,
				temp_max: -9.18,
				pressure: 1020,
				sea_level: 1020,
				grnd_level: 891,
				humidity: 85,
				temp_kf: 0
			},
			weather: [
				{
					id: 802,
					main: "Clouds",
					description: "scattered clouds",
					icon: "03n"
				}
			],
			clouds: { all: 40 },
			wind: { speed: 1.55, deg: 208 },
			sys: { pod: "n" },
			dt_txt: "2020-03-17 06:00:00"
		},
		{
			dt: 1584435600,
			main: {
				temp: -6.72,
				feels_like: -11.19,
				temp_min: -6.72,
				temp_max: -6.72,
				pressure: 1018,
				sea_level: 1018,
				grnd_level: 889,
				humidity: 78,
				temp_kf: 0
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" }
			],
			clouds: { all: 100 },
			wind: { speed: 2.03, deg: 277 },
			sys: { pod: "n" },
			dt_txt: "2020-03-17 09:00:00"
		},
		{
			dt: 1584446400,
			main: {
				temp: -4.75,
				feels_like: -10.48,
				temp_min: -4.75,
				temp_max: -4.75,
				pressure: 1018,
				sea_level: 1018,
				grnd_level: 890,
				humidity: 77,
				temp_kf: 0
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" }
			],
			clouds: { all: 100 },
			wind: { speed: 4.03, deg: 316 },
			sys: { pod: "n" },
			dt_txt: "2020-03-17 12:00:00"
		},
		{
			dt: 1584457200,
			main: {
				temp: -3.15,
				feels_like: -9.26,
				temp_min: -3.15,
				temp_max: -3.15,
				pressure: 1019,
				sea_level: 1019,
				grnd_level: 892,
				humidity: 85,
				temp_kf: 0
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
			],
			clouds: { all: 100 },
			wind: { speed: 4.95, deg: 334 },
			sys: { pod: "d" },
			dt_txt: "2020-03-17 15:00:00"
		},
		{
			dt: 1584468000,
			main: {
				temp: -2.65,
				feels_like: -10.31,
				temp_min: -2.65,
				temp_max: -2.65,
				pressure: 1020,
				sea_level: 1020,
				grnd_level: 894,
				humidity: 86,
				temp_kf: 0
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
			],
			clouds: { all: 100 },
			wind: { speed: 7.27, deg: 347 },
			sys: { pod: "d" },
			dt_txt: "2020-03-17 18:00:00"
		},
		{
			dt: 1584478800,
			main: {
				temp: -2.05,
				feels_like: -8.51,
				temp_min: -2.05,
				temp_max: -2.05,
				pressure: 1021,
				sea_level: 1021,
				grnd_level: 895,
				humidity: 84,
				temp_kf: 0
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
			],
			clouds: { all: 100 },
			wind: { speed: 5.59, deg: 355 },
			sys: { pod: "d" },
			dt_txt: "2020-03-17 21:00:00"
		},
		{
			dt: 1584489600,
			main: {
				temp: -3.71,
				feels_like: -9.2,
				temp_min: -3.71,
				temp_max: -3.71,
				pressure: 1022,
				sea_level: 1022,
				grnd_level: 895,
				humidity: 89,
				temp_kf: 0
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
			],
			clouds: { all: 98 },
			wind: { speed: 4.07, deg: 20 },
			sys: { pod: "d" },
			dt_txt: "2020-03-18 00:00:00"
		},
		{
			dt: 1584500400,
			main: {
				temp: -10.03,
				feels_like: -14.37,
				temp_min: -10.03,
				temp_max: -10.03,
				pressure: 1025,
				sea_level: 1025,
				grnd_level: 896,
				humidity: 97,
				temp_kf: 0
			},
			weather: [
				{ id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }
			],
			clouds: { all: 78 },
			wind: { speed: 1.79, deg: 25 },
			sys: { pod: "n" },
			dt_txt: "2020-03-18 03:00:00"
		},
		{
			dt: 1584511200,
			main: {
				temp: -11.73,
				feels_like: -15.46,
				temp_min: -11.73,
				temp_max: -11.73,
				pressure: 1026,
				sea_level: 1026,
				grnd_level: 895,
				humidity: 97,
				temp_kf: 0
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" }
			],
			clouds: { all: 89 },
			wind: { speed: 0.76, deg: 59 },
			sys: { pod: "n" },
			dt_txt: "2020-03-18 06:00:00"
		},
		{
			dt: 1584522000,
			main: {
				temp: -13.65,
				feels_like: -17.53,
				temp_min: -13.65,
				temp_max: -13.65,
				pressure: 1024,
				sea_level: 1024,
				grnd_level: 893,
				humidity: 98,
				temp_kf: 0
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" }
			],
			clouds: { all: 99 },
			wind: { speed: 0.82, deg: 144 },
			sys: { pod: "n" },
			dt_txt: "2020-03-18 09:00:00"
		},
		{
			dt: 1584532800,
			main: {
				temp: -14.25,
				feels_like: -18.63,
				temp_min: -14.25,
				temp_max: -14.25,
				pressure: 1023,
				sea_level: 1023,
				grnd_level: 892,
				humidity: 98,
				temp_kf: 0
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" }
			],
			clouds: { all: 99 },
			wind: { speed: 1.48, deg: 173 },
			sys: { pod: "n" },
			dt_txt: "2020-03-18 12:00:00"
		},
		{
			dt: 1584543600,
			main: {
				temp: -13.57,
				feels_like: -18,
				temp_min: -13.57,
				temp_max: -13.57,
				pressure: 1022,
				sea_level: 1022,
				grnd_level: 891,
				humidity: 97,
				temp_kf: 0
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
			],
			clouds: { all: 99 },
			wind: { speed: 1.59, deg: 143 },
			sys: { pod: "d" },
			dt_txt: "2020-03-18 15:00:00"
		},
		{
			dt: 1584554400,
			main: {
				temp: -8.66,
				feels_like: -13.32,
				temp_min: -8.66,
				temp_max: -8.66,
				pressure: 1018,
				sea_level: 1018,
				grnd_level: 891,
				humidity: 90,
				temp_kf: 0
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
			],
			clouds: { all: 100 },
			wind: { speed: 2.29, deg: 161 },
			sys: { pod: "d" },
			dt_txt: "2020-03-18 18:00:00"
		},
		{
			dt: 1584565200,
			main: {
				temp: -5.55,
				feels_like: -10,
				temp_min: -5.55,
				temp_max: -5.55,
				pressure: 1016,
				sea_level: 1016,
				grnd_level: 890,
				humidity: 88,
				temp_kf: 0
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
			],
			clouds: { all: 99 },
			wind: { speed: 2.32, deg: 154 },
			sys: { pod: "d" },
			dt_txt: "2020-03-18 21:00:00"
		},
		{
			dt: 1584576000,
			main: {
				temp: -4.53,
				feels_like: -8.13,
				temp_min: -4.53,
				temp_max: -4.53,
				pressure: 1017,
				sea_level: 1017,
				grnd_level: 890,
				humidity: 89,
				temp_kf: 0
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
			],
			clouds: { all: 98 },
			wind: { speed: 1.26, deg: 140 },
			sys: { pod: "d" },
			dt_txt: "2020-03-19 00:00:00"
		},
		{
			dt: 1584586800,
			main: {
				temp: -8.65,
				feels_like: -12.65,
				temp_min: -8.65,
				temp_max: -8.65,
				pressure: 1021,
				sea_level: 1021,
				grnd_level: 893,
				humidity: 93,
				temp_kf: 0
			},
			weather: [
				{ id: 801, main: "Clouds", description: "few clouds", icon: "02n" }
			],
			clouds: { all: 18 },
			wind: { speed: 1.4, deg: 305 },
			sys: { pod: "n" },
			dt_txt: "2020-03-19 03:00:00"
		},
		{
			dt: 1584597600,
			main: {
				temp: -8.65,
				feels_like: -13.46,
				temp_min: -8.65,
				temp_max: -8.65,
				pressure: 1024,
				sea_level: 1024,
				grnd_level: 895,
				humidity: 93,
				temp_kf: 0
			},
			weather: [
				{ id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }
			],
			clouds: { all: 59 },
			wind: { speed: 2.55, deg: 321 },
			sys: { pod: "n" },
			dt_txt: "2020-03-19 06:00:00"
		},
		{
			dt: 1584608400,
			main: {
				temp: -9.54,
				feels_like: -14.59,
				temp_min: -9.54,
				temp_max: -9.54,
				pressure: 1026,
				sea_level: 1026,
				grnd_level: 896,
				humidity: 92,
				temp_kf: 0
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" }
			],
			clouds: { all: 99 },
			wind: { speed: 2.79, deg: 329 },
			sys: { pod: "n" },
			dt_txt: "2020-03-19 09:00:00"
		},
		{
			dt: 1584619200,
			main: {
				temp: -11.19,
				feels_like: -15.81,
				temp_min: -11.19,
				temp_max: -11.19,
				pressure: 1029,
				sea_level: 1029,
				grnd_level: 898,
				humidity: 95,
				temp_kf: 0
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" }
			],
			clouds: { all: 96 },
			wind: { speed: 2.05, deg: 359 },
			sys: { pod: "n" },
			dt_txt: "2020-03-19 12:00:00"
		},
		{
			dt: 1584630000,
			main: {
				temp: -11.15,
				feels_like: -15.37,
				temp_min: -11.15,
				temp_max: -11.15,
				pressure: 1031,
				sea_level: 1031,
				grnd_level: 900,
				humidity: 95,
				temp_kf: 0
			},
			weather: [
				{ id: 600, main: "Snow", description: "light snow", icon: "13d" }
			],
			clouds: { all: 100 },
			wind: { speed: 1.49, deg: 54 },
			snow: { "3h": 0.13 },
			sys: { pod: "d" },
			dt_txt: "2020-03-19 15:00:00"
		},
		{
			dt: 1584640800,
			main: {
				temp: -8.65,
				feels_like: -13.3,
				temp_min: -8.65,
				temp_max: -8.65,
				pressure: 1031,
				sea_level: 1031,
				grnd_level: 900,
				humidity: 90,
				temp_kf: 0
			},
			weather: [
				{ id: 600, main: "Snow", description: "light snow", icon: "13d" }
			],
			clouds: { all: 100 },
			wind: { speed: 2.28, deg: 77 },
			snow: { "3h": 0.13 },
			sys: { pod: "d" },
			dt_txt: "2020-03-19 18:00:00"
		},
		{
			dt: 1584651600,
			main: {
				temp: -7.46,
				feels_like: -12.94,
				temp_min: -7.46,
				temp_max: -7.46,
				pressure: 1031,
				sea_level: 1031,
				grnd_level: 901,
				humidity: 90,
				temp_kf: 0
			},
			weather: [
				{ id: 600, main: "Snow", description: "light snow", icon: "13d" }
			],
			clouds: { all: 100 },
			wind: { speed: 3.59, deg: 104 },
			snow: { "3h": 0.13 },
			sys: { pod: "d" },
			dt_txt: "2020-03-19 21:00:00"
		},
		{
			dt: 1584662400,
			main: {
				temp: -8.65,
				feels_like: -14.83,
				temp_min: -8.65,
				temp_max: -8.65,
				pressure: 1030,
				sea_level: 1030,
				grnd_level: 901,
				humidity: 92,
				temp_kf: 0
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
			],
			clouds: { all: 100 },
			wind: { speed: 4.49, deg: 123 },
			sys: { pod: "d" },
			dt_txt: "2020-03-20 00:00:00"
		},
		{
			dt: 1584673200,
			main: {
				temp: -10.25,
				feels_like: -16.33,
				temp_min: -10.25,
				temp_max: -10.25,
				pressure: 1032,
				sea_level: 1032,
				grnd_level: 901,
				humidity: 94,
				temp_kf: 0
			},
			weather: [
				{ id: 600, main: "Snow", description: "light snow", icon: "13n" }
			],
			clouds: { all: 100 },
			wind: { speed: 4.22, deg: 139 },
			snow: { "3h": 0.19 },
			sys: { pod: "n" },
			dt_txt: "2020-03-20 03:00:00"
		},
		{
			dt: 1584684000,
			main: {
				temp: -11.85,
				feels_like: -18.3,
				temp_min: -11.85,
				temp_max: -11.85,
				pressure: 1031,
				sea_level: 1031,
				grnd_level: 900,
				humidity: 95,
				temp_kf: 0
			},
			weather: [
				{ id: 600, main: "Snow", description: "light snow", icon: "13n" }
			],
			clouds: { all: 100 },
			wind: { speed: 4.61, deg: 146 },
			snow: { "3h": 0.12 },
			sys: { pod: "n" },
			dt_txt: "2020-03-20 06:00:00"
		},
		{
			dt: 1584694800,
			main: {
				temp: -11.8,
				feels_like: -18.95,
				temp_min: -11.8,
				temp_max: -11.8,
				pressure: 1029,
				sea_level: 1029,
				grnd_level: 897,
				humidity: 94,
				temp_kf: 0
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" }
			],
			clouds: { all: 100 },
			wind: { speed: 5.6, deg: 149 },
			sys: { pod: "n" },
			dt_txt: "2020-03-20 09:00:00"
		},
		{
			dt: 1584705600,
			main: {
				temp: -12.72,
				feels_like: -18.91,
				temp_min: -12.72,
				temp_max: -12.72,
				pressure: 1027,
				sea_level: 1027,
				grnd_level: 896,
				humidity: 96,
				temp_kf: 0
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" }
			],
			clouds: { all: 100 },
			wind: { speed: 4.17, deg: 148 },
			sys: { pod: "n" },
			dt_txt: "2020-03-20 12:00:00"
		},
		{
			dt: 1584716400,
			main: {
				temp: -13.14,
				feels_like: -19.03,
				temp_min: -13.14,
				temp_max: -13.14,
				pressure: 1026,
				sea_level: 1026,
				grnd_level: 894,
				humidity: 96,
				temp_kf: 0
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
			],
			clouds: { all: 100 },
			wind: { speed: 3.7, deg: 162 },
			sys: { pod: "d" },
			dt_txt: "2020-03-20 15:00:00"
		},
		{
			dt: 1584727200,
			main: {
				temp: -9.75,
				feels_like: -15.19,
				temp_min: -9.75,
				temp_max: -9.75,
				pressure: 1022,
				sea_level: 1022,
				grnd_level: 893,
				humidity: 93,
				temp_kf: 0
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
			],
			clouds: { all: 100 },
			wind: { speed: 3.34, deg: 155 },
			sys: { pod: "d" },
			dt_txt: "2020-03-20 18:00:00"
		},
		{
			dt: 1584738000,
			main: {
				temp: -5.95,
				feels_like: -11.05,
				temp_min: -5.95,
				temp_max: -5.95,
				pressure: 1019,
				sea_level: 1019,
				grnd_level: 892,
				humidity: 89,
				temp_kf: 0
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
			],
			clouds: { all: 90 },
			wind: { speed: 3.21, deg: 156 },
			sys: { pod: "d" },
			dt_txt: "2020-03-20 21:00:00"
		}
	],
	city: {
		id: 5913490,
		name: "Calgary",
		coord: { lat: 51.0501, lon: -114.0853 },
		country: "CA",
		population: 1019942,
		timezone: -21600,
		sunrise: 1584280133,
		sunset: 1584322881
	}
};
