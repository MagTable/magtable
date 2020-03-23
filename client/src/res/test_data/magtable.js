export const initialDailyMix = 45;

/*
 * @future developers, if you're looking for bugs,
 * this script and the DB table 'ParkingLocation' need to match up to a degree
 *
 * if they don't match, you'll get an error in /actions/magtable
 * */
export const ParkingZones = [
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
		left: "1",
		right: "2"
	},
	{
		id: 3,
		apron: "WDA",
		phonetic: "C",
		east: true,
		center: false,
		west: true,
		left: "2",
		right: "4",
		composite: 3
	},
	{
		id: 4,
		apron: "WDA",
		phonetic: "D",
		east: true,
		center: false,
		west: false,
		left: "4A",
		right: "4B",
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
		left: "1",
		right: "3",
		composite: 2
	},
	{
		id: 7,
		apron: "EDA",
		phonetic: "C",
		east: true,
		center: true,
		west: true,
		left: "3",
		right: "4"
	},
	{
		id: 8,
		apron: "EDA",
		phonetic: "D",
		east: true,
		center: true,
		west: true,
		left: "4",
		right: "6",
		composite: 5
	},
	{
		id: 9,
		apron: "EDA",
		phonetic: "E",
		east: true,
		center: true,
		west: true,
		left: "6",
		right: "7"
	},
	{
		id: 10,
		apron: "EDA",
		phonetic: "F",
		east: true,
		center: true,
		west: true,
		left: "7",
		right: "9"
	},
	{
		id: 11,
		apron: "EDA",
		phonetic: "G",
		east: true,
		center: true,
		west: true,
		left: "9",
		right: null
	}
];

export const sampleWeather = {
	cod: "200",
	message: 0,
	cnt: 40,
	list: [
		{
			dt: 1585105000,
			main: {
				temp: 2.35,
				feels_like: -3.77,
				temp_min: -0.15,
				temp_max: 2.35,
				pressure: 1001,
				sea_level: 1001,
				grnd_level: 879,
				humidity: 77,
				temp_kf: 2.5
			},
			weather: [
				{
					id: 802,
					main: "Clouds",
					description: "scattered clouds",
					icon: "03d"
				}
			],
			clouds: { all: 38 },
			wind: { speed: 5.65, deg: 349 },
			sys: { pod: "d" },
			dt_txt: "2020-03-24 00:00:00"
		},
		{
			dt: 1585018800,
			main: {
				temp: -0.6,
				feels_like: -7.36,
				temp_min: -2.48,
				temp_max: -0.6,
				pressure: 1006,
				sea_level: 1006,
				grnd_level: 882,
				humidity: 90,
				temp_kf: 1.88
			},
			weather: [
				{ id: 600, main: "Snow", description: "light snow", icon: "13n" }
			],
			clouds: { all: 100 },
			wind: { speed: 6.42, deg: 342 },
			snow: { "3h": 1.25 },
			sys: { pod: "n" },
			dt_txt: "2020-03-24 03:00:00"
		},
		{
			dt: 1585029600,
			main: {
				temp: -1.26,
				feels_like: -8.84,
				temp_min: -2.51,
				temp_max: -1.26,
				pressure: 1009,
				sea_level: 1009,
				grnd_level: 884,
				humidity: 80,
				temp_kf: 1.25
			},
			weather: [
				{ id: 600, main: "Snow", description: "light snow", icon: "13n" }
			],
			clouds: { all: 100 },
			wind: { speed: 7.21, deg: 339 },
			snow: { "3h": 0.75 },
			sys: { pod: "n" },
			dt_txt: "2020-03-24 06:00:00"
		},
		{
			dt: 1585040400,
			main: {
				temp: -3.64,
				feels_like: -11.16,
				temp_min: -4.27,
				temp_max: -3.64,
				pressure: 1013,
				sea_level: 1013,
				grnd_level: 887,
				humidity: 83,
				temp_kf: 0.63
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" }
			],
			clouds: { all: 100 },
			wind: { speed: 6.86, deg: 342 },
			sys: { pod: "n" },
			dt_txt: "2020-03-24 09:00:00"
		},
		{
			dt: 1585051200,
			main: {
				temp: -5.47,
				feels_like: -12.42,
				temp_min: -5.47,
				temp_max: -5.47,
				pressure: 1016,
				sea_level: 1016,
				grnd_level: 888,
				humidity: 80,
				temp_kf: 0
			},
			weather: [
				{ id: 600, main: "Snow", description: "light snow", icon: "13n" }
			],
			clouds: { all: 100 },
			wind: { speed: 5.75, deg: 348 },
			snow: { "3h": 0.19 },
			sys: { pod: "n" },
			dt_txt: "2020-03-24 12:00:00"
		},
		{
			dt: 1585062000,
			main: {
				temp: -6.53,
				feels_like: -12.82,
				temp_min: -6.53,
				temp_max: -6.53,
				pressure: 1018,
				sea_level: 1018,
				grnd_level: 890,
				humidity: 85,
				temp_kf: 0
			},
			weather: [
				{ id: 600, main: "Snow", description: "light snow", icon: "13d" }
			],
			clouds: { all: 100 },
			wind: { speed: 4.78, deg: 351 },
			snow: { "3h": 0.31 },
			sys: { pod: "d" },
			dt_txt: "2020-03-24 15:00:00"
		},
		{
			dt: 1585072800,
			main: {
				temp: -4.96,
				feels_like: -10.27,
				temp_min: -4.96,
				temp_max: -4.96,
				pressure: 1018,
				sea_level: 1018,
				grnd_level: 891,
				humidity: 75,
				temp_kf: 0
			},
			weather: [
				{ id: 600, main: "Snow", description: "light snow", icon: "13d" }
			],
			clouds: { all: 100 },
			wind: { speed: 3.37, deg: 12 },
			snow: { "3h": 0.31 },
			sys: { pod: "d" },
			dt_txt: "2020-03-24 18:00:00"
		},
		{
			dt: 1585083600,
			main: {
				temp: -4.19,
				feels_like: -9.59,
				temp_min: -4.19,
				temp_max: -4.19,
				pressure: 1017,
				sea_level: 1017,
				grnd_level: 890,
				humidity: 73,
				temp_kf: 0
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
			],
			clouds: { all: 100 },
			wind: { speed: 3.54, deg: 69 },
			sys: { pod: "d" },
			dt_txt: "2020-03-24 21:00:00"
		},
		{
			dt: 1585094400,
			main: {
				temp: -5.37,
				feels_like: -10.73,
				temp_min: -5.37,
				temp_max: -5.37,
				pressure: 1015,
				sea_level: 1015,
				grnd_level: 889,
				humidity: 81,
				temp_kf: 0
			},
			weather: [
				{ id: 600, main: "Snow", description: "light snow", icon: "13d" }
			],
			clouds: { all: 100 },
			wind: { speed: 3.51, deg: 107 },
			snow: { "3h": 0.13 },
			sys: { pod: "d" },
			dt_txt: "2020-03-25 00:00:00"
		},
		{
			dt: 1585105200,
			main: {
				temp: -6.95,
				feels_like: -12.78,
				temp_min: -6.95,
				temp_max: -6.95,
				pressure: 1017,
				sea_level: 1017,
				grnd_level: 890,
				humidity: 89,
				temp_kf: 0
			},
			weather: [
				{ id: 600, main: "Snow", description: "light snow", icon: "13n" }
			],
			clouds: { all: 100 },
			wind: { speed: 4.13, deg: 80 },
			snow: { "3h": 0.19 },
			sys: { pod: "n" },
			dt_txt: "2020-03-25 03:00:00"
		},
		{
			dt: 1585116000,
			main: {
				temp: -7.65,
				feels_like: -11.91,
				temp_min: -7.65,
				temp_max: -7.65,
				pressure: 1017,
				sea_level: 1017,
				grnd_level: 890,
				humidity: 90,
				temp_kf: 0
			},
			weather: [
				{ id: 600, main: "Snow", description: "light snow", icon: "13n" }
			],
			clouds: { all: 100 },
			wind: { speed: 1.83, deg: 100 },
			snow: { "3h": 0.44 },
			sys: { pod: "n" },
			dt_txt: "2020-03-25 06:00:00"
		},
		{
			dt: 1585126800,
			main: {
				temp: -7.35,
				feels_like: -11.13,
				temp_min: -7.35,
				temp_max: -7.35,
				pressure: 1018,
				sea_level: 1018,
				grnd_level: 889,
				humidity: 87,
				temp_kf: 0
			},
			weather: [
				{ id: 600, main: "Snow", description: "light snow", icon: "13n" }
			],
			clouds: { all: 100 },
			wind: { speed: 1.13, deg: 242 },
			snow: { "3h": 0.19 },
			sys: { pod: "n" },
			dt_txt: "2020-03-25 09:00:00"
		},
		{
			dt: 1585137600,
			main: {
				temp: -7.59,
				feels_like: -11.67,
				temp_min: -7.59,
				temp_max: -7.59,
				pressure: 1017,
				sea_level: 1017,
				grnd_level: 889,
				humidity: 89,
				temp_kf: 0
			},
			weather: [
				{ id: 600, main: "Snow", description: "light snow", icon: "13n" }
			],
			clouds: { all: 100 },
			wind: { speed: 1.57, deg: 228 },
			snow: { "3h": 0.19 },
			sys: { pod: "n" },
			dt_txt: "2020-03-25 12:00:00"
		},
		{
			dt: 1585148400,
			main: {
				temp: -7.01,
				feels_like: -11.17,
				temp_min: -7.01,
				temp_max: -7.01,
				pressure: 1017,
				sea_level: 1017,
				grnd_level: 888,
				humidity: 80,
				temp_kf: 0
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
			],
			clouds: { all: 98 },
			wind: { speed: 1.59, deg: 221 },
			sys: { pod: "d" },
			dt_txt: "2020-03-25 15:00:00"
		},
		{
			dt: 1585159200,
			main: {
				temp: -4.05,
				feels_like: -8.78,
				temp_min: -4.05,
				temp_max: -4.05,
				pressure: 1014,
				sea_level: 1014,
				grnd_level: 888,
				humidity: 68,
				temp_kf: 0
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
			],
			clouds: { all: 93 },
			wind: { speed: 2.5, deg: 195 },
			sys: { pod: "d" },
			dt_txt: "2020-03-25 18:00:00"
		},
		{
			dt: 1585170000,
			main: {
				temp: -1.84,
				feels_like: -6.66,
				temp_min: -1.84,
				temp_max: -1.84,
				pressure: 1013,
				sea_level: 1013,
				grnd_level: 887,
				humidity: 65,
				temp_kf: 0
			},
			weather: [
				{
					id: 802,
					main: "Clouds",
					description: "scattered clouds",
					icon: "03d"
				}
			],
			clouds: { all: 50 },
			wind: { speed: 2.81, deg: 170 },
			sys: { pod: "d" },
			dt_txt: "2020-03-25 21:00:00"
		},
		{
			dt: 1585180800,
			main: {
				temp: -2.22,
				feels_like: -7.89,
				temp_min: -2.22,
				temp_max: -2.22,
				pressure: 1011,
				sea_level: 1011,
				grnd_level: 885,
				humidity: 76,
				temp_kf: 0
			},
			weather: [
				{
					id: 802,
					main: "Clouds",
					description: "scattered clouds",
					icon: "03d"
				}
			],
			clouds: { all: 26 },
			wind: { speed: 4.25, deg: 175 },
			sys: { pod: "d" },
			dt_txt: "2020-03-26 00:00:00"
		},
		{
			dt: 1585191600,
			main: {
				temp: -3.67,
				feels_like: -7.51,
				temp_min: -3.67,
				temp_max: -3.67,
				pressure: 1013,
				sea_level: 1013,
				grnd_level: 886,
				humidity: 83,
				temp_kf: 0
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" }
			],
			clouds: { all: 94 },
			wind: { speed: 1.6, deg: 82 },
			sys: { pod: "n" },
			dt_txt: "2020-03-26 03:00:00"
		},
		{
			dt: 1585202400,
			main: {
				temp: -5.18,
				feels_like: -9.66,
				temp_min: -5.18,
				temp_max: -5.18,
				pressure: 1013,
				sea_level: 1013,
				grnd_level: 886,
				humidity: 88,
				temp_kf: 0
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" }
			],
			clouds: { all: 94 },
			wind: { speed: 2.41, deg: 177 },
			sys: { pod: "n" },
			dt_txt: "2020-03-26 06:00:00"
		},
		{
			dt: 1585213200,
			main: {
				temp: -6.25,
				feels_like: -10.58,
				temp_min: -6.25,
				temp_max: -6.25,
				pressure: 1012,
				sea_level: 1012,
				grnd_level: 883,
				humidity: 86,
				temp_kf: 0
			},
			weather: [
				{ id: 800, main: "Clear", description: "clear sky", icon: "01n" }
			],
			clouds: { all: 0 },
			wind: { speed: 2.02, deg: 226 },
			sys: { pod: "n" },
			dt_txt: "2020-03-26 09:00:00"
		},
		{
			dt: 1585224000,
			main: {
				temp: -6.83,
				feels_like: -11.69,
				temp_min: -6.83,
				temp_max: -6.83,
				pressure: 1011,
				sea_level: 1011,
				grnd_level: 881,
				humidity: 69,
				temp_kf: 0
			},
			weather: [
				{ id: 800, main: "Clear", description: "clear sky", icon: "01n" }
			],
			clouds: { all: 0 },
			wind: { speed: 2.42, deg: 240 },
			sys: { pod: "n" },
			dt_txt: "2020-03-26 12:00:00"
		},
		{
			dt: 1585234800,
			main: {
				temp: -5.45,
				feels_like: -10.56,
				temp_min: -5.45,
				temp_max: -5.45,
				pressure: 1008,
				sea_level: 1008,
				grnd_level: 880,
				humidity: 59,
				temp_kf: 0
			},
			weather: [
				{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }
			],
			clouds: { all: 0 },
			wind: { speed: 2.72, deg: 265 },
			sys: { pod: "d" },
			dt_txt: "2020-03-26 15:00:00"
		},
		{
			dt: 1585245600,
			main: {
				temp: 0.25,
				feels_like: -4.64,
				temp_min: 0.25,
				temp_max: 0.25,
				pressure: 1004,
				sea_level: 1004,
				grnd_level: 879,
				humidity: 53,
				temp_kf: 0
			},
			weather: [
				{ id: 801, main: "Clouds", description: "few clouds", icon: "02d" }
			],
			clouds: { all: 18 },
			wind: { speed: 2.83, deg: 266 },
			sys: { pod: "d" },
			dt_txt: "2020-03-26 18:00:00"
		},
		{
			dt: 1585256400,
			main: {
				temp: 4.85,
				feels_like: -0.72,
				temp_min: 4.85,
				temp_max: 4.85,
				pressure: 1002,
				sea_level: 1002,
				grnd_level: 878,
				humidity: 46,
				temp_kf: 0
			},
			weather: [
				{ id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
			],
			clouds: { all: 62 },
			wind: { speed: 4.11, deg: 291 },
			sys: { pod: "d" },
			dt_txt: "2020-03-26 21:00:00"
		},
		{
			dt: 1585267200,
			main: {
				temp: 4.44,
				feels_like: -1.23,
				temp_min: 4.44,
				temp_max: 4.44,
				pressure: 1004,
				sea_level: 1004,
				grnd_level: 880,
				humidity: 49,
				temp_kf: 0
			},
			weather: [
				{ id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
			],
			clouds: { all: 73 },
			wind: { speed: 4.32, deg: 295 },
			sys: { pod: "d" },
			dt_txt: "2020-03-27 00:00:00"
		},
		{
			dt: 1585278000,
			main: {
				temp: -0.12,
				feels_like: -5.32,
				temp_min: -0.12,
				temp_max: -0.12,
				pressure: 1009,
				sea_level: 1009,
				grnd_level: 883,
				humidity: 81,
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
			clouds: { all: 36 },
			wind: { speed: 4.02, deg: 342 },
			sys: { pod: "n" },
			dt_txt: "2020-03-27 03:00:00"
		},
		{
			dt: 1585288800,
			main: {
				temp: -1.93,
				feels_like: -5.81,
				temp_min: -1.93,
				temp_max: -1.93,
				pressure: 1013,
				sea_level: 1013,
				grnd_level: 886,
				humidity: 86,
				temp_kf: 0
			},
			weather: [
				{ id: 801, main: "Clouds", description: "few clouds", icon: "02n" }
			],
			clouds: { all: 21 },
			wind: { speed: 1.98, deg: 269 },
			sys: { pod: "n" },
			dt_txt: "2020-03-27 06:00:00"
		},
		{
			dt: 1585299600,
			main: {
				temp: -2.46,
				feels_like: -6.57,
				temp_min: -2.46,
				temp_max: -2.46,
				pressure: 1013,
				sea_level: 1013,
				grnd_level: 885,
				humidity: 87,
				temp_kf: 0
			},
			weather: [
				{ id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }
			],
			clouds: { all: 76 },
			wind: { speed: 2.25, deg: 186 },
			sys: { pod: "n" },
			dt_txt: "2020-03-27 09:00:00"
		},
		{
			dt: 1585310400,
			main: {
				temp: -3.9,
				feels_like: -8.48,
				temp_min: -3.9,
				temp_max: -3.9,
				pressure: 1012,
				sea_level: 1012,
				grnd_level: 884,
				humidity: 74,
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
			clouds: { all: 42 },
			wind: { speed: 2.42, deg: 182 },
			sys: { pod: "n" },
			dt_txt: "2020-03-27 12:00:00"
		},
		{
			dt: 1585321200,
			main: {
				temp: -2.75,
				feels_like: -7.3,
				temp_min: -2.75,
				temp_max: -2.75,
				pressure: 1010,
				sea_level: 1010,
				grnd_level: 883,
				humidity: 62,
				temp_kf: 0
			},
			weather: [
				{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }
			],
			clouds: { all: 6 },
			wind: { speed: 2.25, deg: 242 },
			sys: { pod: "d" },
			dt_txt: "2020-03-27 15:00:00"
		},
		{
			dt: 1585332000,
			main: {
				temp: 3.51,
				feels_like: -1.32,
				temp_min: 3.51,
				temp_max: 3.51,
				pressure: 1008,
				sea_level: 1008,
				grnd_level: 884,
				humidity: 51,
				temp_kf: 0
			},
			weather: [
				{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }
			],
			clouds: { all: 3 },
			wind: { speed: 3.07, deg: 263 },
			sys: { pod: "d" },
			dt_txt: "2020-03-27 18:00:00"
		},
		{
			dt: 1585342800,
			main: {
				temp: 7.31,
				feels_like: 2.72,
				temp_min: 7.31,
				temp_max: 7.31,
				pressure: 1008,
				sea_level: 1008,
				grnd_level: 884,
				humidity: 49,
				temp_kf: 0
			},
			weather: [
				{
					id: 802,
					main: "Clouds",
					description: "scattered clouds",
					icon: "03d"
				}
			],
			clouds: { all: 29 },
			wind: { speed: 3.21, deg: 280 },
			sys: { pod: "d" },
			dt_txt: "2020-03-27 21:00:00"
		},
		{
			dt: 1585353600,
			main: {
				temp: 5.95,
				feels_like: 2.31,
				temp_min: 5.95,
				temp_max: 5.95,
				pressure: 1008,
				sea_level: 1008,
				grnd_level: 884,
				humidity: 61,
				temp_kf: 0
			},
			weather: [
				{ id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
			],
			clouds: { all: 64 },
			wind: { speed: 2.16, deg: 254 },
			sys: { pod: "d" },
			dt_txt: "2020-03-28 00:00:00"
		},
		{
			dt: 1585364400,
			main: {
				temp: 1.32,
				feels_like: -2.23,
				temp_min: 1.32,
				temp_max: 1.32,
				pressure: 1010,
				sea_level: 1010,
				grnd_level: 885,
				humidity: 71,
				temp_kf: 0
			},
			weather: [
				{ id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }
			],
			clouds: { all: 58 },
			wind: { speed: 1.6, deg: 209 },
			sys: { pod: "n" },
			dt_txt: "2020-03-28 03:00:00"
		},
		{
			dt: 1585375200,
			main: {
				temp: 0.25,
				feels_like: -4.57,
				temp_min: 0.25,
				temp_max: 0.25,
				pressure: 1012,
				sea_level: 1012,
				grnd_level: 886,
				humidity: 69,
				temp_kf: 0
			},
			weather: [
				{ id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }
			],
			clouds: { all: 52 },
			wind: { speed: 3.2, deg: 248 },
			sys: { pod: "n" },
			dt_txt: "2020-03-28 06:00:00"
		},
		{
			dt: 1585386000,
			main: {
				temp: 0.56,
				feels_like: -5.06,
				temp_min: 0.56,
				temp_max: 0.56,
				pressure: 1012,
				sea_level: 1012,
				grnd_level: 885,
				humidity: 65,
				temp_kf: 0
			},
			weather: [
				{ id: 800, main: "Clear", description: "clear sky", icon: "01n" }
			],
			clouds: { all: 4 },
			wind: { speed: 4.26, deg: 259 },
			sys: { pod: "n" },
			dt_txt: "2020-03-28 09:00:00"
		},
		{
			dt: 1585396800,
			main: {
				temp: -0.85,
				feels_like: -5.55,
				temp_min: -0.85,
				temp_max: -0.85,
				pressure: 1013,
				sea_level: 1013,
				grnd_level: 886,
				humidity: 68,
				temp_kf: 0
			},
			weather: [
				{ id: 800, main: "Clear", description: "clear sky", icon: "01n" }
			],
			clouds: { all: 2 },
			wind: { speed: 2.84, deg: 266 },
			sys: { pod: "n" },
			dt_txt: "2020-03-28 12:00:00"
		},
		{
			dt: 1585407600,
			main: {
				temp: 0.87,
				feels_like: -3.89,
				temp_min: 0.87,
				temp_max: 0.87,
				pressure: 1013,
				sea_level: 1013,
				grnd_level: 887,
				humidity: 58,
				temp_kf: 0
			},
			weather: [
				{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }
			],
			clouds: { all: 2 },
			wind: { speed: 2.87, deg: 255 },
			sys: { pod: "d" },
			dt_txt: "2020-03-28 15:00:00"
		},
		{
			dt: 1585418400,
			main: {
				temp: 5.47,
				feels_like: 2.21,
				temp_min: 5.47,
				temp_max: 5.47,
				pressure: 1012,
				sea_level: 1012,
				grnd_level: 888,
				humidity: 46,
				temp_kf: 0
			},
			weather: [
				{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }
			],
			clouds: { all: 7 },
			wind: { speed: 0.89, deg: 217 },
			sys: { pod: "d" },
			dt_txt: "2020-03-28 18:00:00"
		},
		{
			dt: 1585429200,
			main: {
				temp: 7.26,
				feels_like: 3.09,
				temp_min: 7.26,
				temp_max: 7.26,
				pressure: 1009,
				sea_level: 1009,
				grnd_level: 887,
				humidity: 54,
				temp_kf: 0
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
			],
			clouds: { all: 94 },
			wind: { speed: 2.84, deg: 236 },
			sys: { pod: "d" },
			dt_txt: "2020-03-28 21:00:00"
		}
	],
	city: {
		id: 5913490,
		name: "Calgary",
		coord: { lat: 51.0501, lon: -114.0853 },
		country: "CA",
		timezone: -21600,
		sunrise: 1584970246,
		sunset: 1585014872
	}
};
