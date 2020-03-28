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

export const SampleWeather = {
	cod: "200",
	message: 0,
	cnt: 40,
	list: [
		{
			dt: 1585072800,
			main: {
				temp: -2.67,
				feels_like: -7.07,
				temp_min: -4.45,
				temp_max: -2.67,
				pressure: 1017,
				sea_level: 1017,
				grnd_level: 890,
				humidity: 75,
				temp_kf: 1.78
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
			],
			clouds: { all: 100 },
			wind: { speed: 2.35, deg: 16 },
			sys: { pod: "d" },
			dt_txt: "2020-03-24 18:00:00"
		},
		{
			dt: 1585083600,
			main: {
				temp: -2.61,
				feels_like: -7.84,
				temp_min: -3.95,
				temp_max: -2.61,
				pressure: 1016,
				sea_level: 1016,
				grnd_level: 890,
				humidity: 79,
				temp_kf: 1.34
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
			],
			clouds: { all: 100 },
			wind: { speed: 3.63, deg: 76 },
			sys: { pod: "d" },
			dt_txt: "2020-03-24 21:00:00"
		},
		{
			dt: 1585094400,
			main: {
				temp: -4.27,
				feels_like: -9.33,
				temp_min: -5.16,
				temp_max: -4.27,
				pressure: 1014,
				sea_level: 1014,
				grnd_level: 888,
				humidity: 86,
				temp_kf: 0.89
			},
			weather: [
				{ id: 600, main: "Snow", description: "light snow", icon: "13d" }
			],
			clouds: { all: 100 },
			wind: { speed: 3.32, deg: 112 },
			snow: { "3h": 0.13 },
			sys: { pod: "d" },
			dt_txt: "2020-03-25 00:00:00"
		},
		{
			dt: 1585105200,
			main: {
				temp: -6.31,
				feels_like: -11.53,
				temp_min: -6.76,
				temp_max: -6.31,
				pressure: 1017,
				sea_level: 1017,
				grnd_level: 889,
				humidity: 92,
				temp_kf: 0.45
			},
			weather: [
				{ id: 600, main: "Snow", description: "light snow", icon: "13n" }
			],
			clouds: { all: 100 },
			wind: { speed: 3.4, deg: 94 },
			snow: { "3h": 0.13 },
			sys: { pod: "n" },
			dt_txt: "2020-03-25 03:00:00"
		},
		{
			dt: 1585116000,
			main: {
				temp: -7.35,
				feels_like: -12.05,
				temp_min: -7.35,
				temp_max: -7.35,
				pressure: 1017,
				sea_level: 1017,
				grnd_level: 889,
				humidity: 93,
				temp_kf: 0
			},
			weather: [
				{ id: 600, main: "Snow", description: "light snow", icon: "13n" }
			],
			clouds: { all: 100 },
			wind: { speed: 2.54, deg: 94 },
			snow: { "3h": 0.5 },
			sys: { pod: "n" },
			dt_txt: "2020-03-25 06:00:00"
		},
		{
			dt: 1585126800,
			main: {
				temp: -7.85,
				feels_like: -11.52,
				temp_min: -7.85,
				temp_max: -7.85,
				pressure: 1017,
				sea_level: 1017,
				grnd_level: 889,
				humidity: 92,
				temp_kf: 0
			},
			weather: [
				{ id: 600, main: "Snow", description: "light snow", icon: "13n" }
			],
			clouds: { all: 100 },
			wind: { speed: 0.99, deg: 173 },
			snow: { "3h": 0.25 },
			sys: { pod: "n" },
			dt_txt: "2020-03-25 09:00:00"
		},
		{
			dt: 1585137600,
			main: {
				temp: -8.05,
				feels_like: -11.67,
				temp_min: -8.05,
				temp_max: -8.05,
				pressure: 1017,
				sea_level: 1017,
				grnd_level: 889,
				humidity: 93,
				temp_kf: 0
			},
			weather: [
				{ id: 600, main: "Snow", description: "light snow", icon: "13n" }
			],
			clouds: { all: 98 },
			wind: { speed: 0.92, deg: 269 },
			snow: { "3h": 0.13 },
			sys: { pod: "n" },
			dt_txt: "2020-03-25 12:00:00"
		},
		{
			dt: 1585148400,
			main: {
				temp: -7.45,
				feels_like: -11.81,
				temp_min: -7.45,
				temp_max: -7.45,
				pressure: 1017,
				sea_level: 1017,
				grnd_level: 889,
				humidity: 82,
				temp_kf: 0
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
			],
			clouds: { all: 93 },
			wind: { speed: 1.87, deg: 277 },
			sys: { pod: "d" },
			dt_txt: "2020-03-25 15:00:00"
		},
		{
			dt: 1585159200,
			main: {
				temp: -3.82,
				feels_like: -7.11,
				temp_min: -3.82,
				temp_max: -3.82,
				pressure: 1015,
				sea_level: 1015,
				grnd_level: 888,
				humidity: 70,
				temp_kf: 0
			},
			weather: [
				{ id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
			],
			clouds: { all: 83 },
			wind: { speed: 0.51, deg: 301 },
			sys: { pod: "d" },
			dt_txt: "2020-03-25 18:00:00"
		},
		{
			dt: 1585170000,
			main: {
				temp: -2.64,
				feels_like: -6.98,
				temp_min: -2.64,
				temp_max: -2.64,
				pressure: 1013,
				sea_level: 1013,
				grnd_level: 888,
				humidity: 68,
				temp_kf: 0
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
			],
			clouds: { all: 97 },
			wind: { speed: 2.1, deg: 119 },
			sys: { pod: "d" },
			dt_txt: "2020-03-25 21:00:00"
		},
		{
			dt: 1585180800,
			main: {
				temp: -3.01,
				feels_like: -8.17,
				temp_min: -3.01,
				temp_max: -3.01,
				pressure: 1012,
				sea_level: 1012,
				grnd_level: 886,
				humidity: 77,
				temp_kf: 0
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
			],
			clouds: { all: 99 },
			wind: { speed: 3.44, deg: 173 },
			sys: { pod: "d" },
			dt_txt: "2020-03-26 00:00:00"
		},
		{
			dt: 1585191600,
			main: {
				temp: -5.58,
				feels_like: -9.5,
				temp_min: -5.58,
				temp_max: -5.58,
				pressure: 1014,
				sea_level: 1014,
				grnd_level: 886,
				humidity: 91,
				temp_kf: 0
			},
			weather: [
				{ id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }
			],
			clouds: { all: 78 },
			wind: { speed: 1.62, deg: 175 },
			sys: { pod: "n" },
			dt_txt: "2020-03-26 03:00:00"
		},
		{
			dt: 1585202400,
			main: {
				temp: -6.85,
				feels_like: -11.42,
				temp_min: -6.85,
				temp_max: -6.85,
				pressure: 1014,
				sea_level: 1014,
				grnd_level: 886,
				humidity: 89,
				temp_kf: 0
			},
			weather: [
				{ id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }
			],
			clouds: { all: 55 },
			wind: { speed: 2.35, deg: 189 },
			sys: { pod: "n" },
			dt_txt: "2020-03-26 06:00:00"
		},
		{
			dt: 1585213200,
			main: {
				temp: -7.47,
				feels_like: -12.05,
				temp_min: -7.47,
				temp_max: -7.47,
				pressure: 1013,
				sea_level: 1013,
				grnd_level: 884,
				humidity: 84,
				temp_kf: 0
			},
			weather: [
				{ id: 800, main: "Clear", description: "clear sky", icon: "01n" }
			],
			clouds: { all: 0 },
			wind: { speed: 2.21, deg: 227 },
			sys: { pod: "n" },
			dt_txt: "2020-03-26 09:00:00"
		},
		{
			dt: 1585224000,
			main: {
				temp: -7.27,
				feels_like: -12.21,
				temp_min: -7.27,
				temp_max: -7.27,
				pressure: 1011,
				sea_level: 1011,
				grnd_level: 882,
				humidity: 70,
				temp_kf: 0
			},
			weather: [
				{ id: 800, main: "Clear", description: "clear sky", icon: "01n" }
			],
			clouds: { all: 0 },
			wind: { speed: 2.51, deg: 254 },
			sys: { pod: "n" },
			dt_txt: "2020-03-26 12:00:00"
		},
		{
			dt: 1585234800,
			main: {
				temp: -5.63,
				feels_like: -10.54,
				temp_min: -5.63,
				temp_max: -5.63,
				pressure: 1010,
				sea_level: 1010,
				grnd_level: 881,
				humidity: 63,
				temp_kf: 0
			},
			weather: [
				{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }
			],
			clouds: { all: 0 },
			wind: { speed: 2.49, deg: 266 },
			sys: { pod: "d" },
			dt_txt: "2020-03-26 15:00:00"
		},
		{
			dt: 1585245600,
			main: {
				temp: 0.05,
				feels_like: -4.28,
				temp_min: 0.05,
				temp_max: 0.05,
				pressure: 1005,
				sea_level: 1005,
				grnd_level: 880,
				humidity: 54,
				temp_kf: 0
			},
			weather: [
				{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }
			],
			clouds: { all: 0 },
			wind: { speed: 2.03, deg: 254 },
			sys: { pod: "d" },
			dt_txt: "2020-03-26 18:00:00"
		},
		{
			dt: 1585256400,
			main: {
				temp: 3.38,
				feels_like: -0.63,
				temp_min: 3.38,
				temp_max: 3.38,
				pressure: 1002,
				sea_level: 1002,
				grnd_level: 879,
				humidity: 63,
				temp_kf: 0
			},
			weather: [
				{ id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
			],
			clouds: { all: 67 },
			wind: { speed: 2.32, deg: 249 },
			sys: { pod: "d" },
			dt_txt: "2020-03-26 21:00:00"
		},
		{
			dt: 1585267200,
			main: {
				temp: 3.98,
				feels_like: -1.09,
				temp_min: 3.98,
				temp_max: 3.98,
				pressure: 1003,
				sea_level: 1003,
				grnd_level: 879,
				humidity: 55,
				temp_kf: 0
			},
			weather: [
				{ id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
			],
			clouds: { all: 83 },
			wind: { speed: 3.63, deg: 290 },
			sys: { pod: "d" },
			dt_txt: "2020-03-27 00:00:00"
		},
		{
			dt: 1585278000,
			main: {
				temp: -0.06,
				feels_like: -4.59,
				temp_min: -0.06,
				temp_max: -0.06,
				pressure: 1008,
				sea_level: 1008,
				grnd_level: 882,
				humidity: 70,
				temp_kf: 0
			},
			weather: [
				{ id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }
			],
			clouds: { all: 68 },
			wind: { speed: 2.76, deg: 350 },
			sys: { pod: "n" },
			dt_txt: "2020-03-27 03:00:00"
		},
		{
			dt: 1585288800,
			main: {
				temp: -1.01,
				feels_like: -4.95,
				temp_min: -1.01,
				temp_max: -1.01,
				pressure: 1012,
				sea_level: 1012,
				grnd_level: 885,
				humidity: 83,
				temp_kf: 0
			},
			weather: [
				{ id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }
			],
			clouds: { all: 78 },
			wind: { speed: 2.13, deg: 262 },
			sys: { pod: "n" },
			dt_txt: "2020-03-27 06:00:00"
		},
		{
			dt: 1585299600,
			main: {
				temp: -2.17,
				feels_like: -5.94,
				temp_min: -2.17,
				temp_max: -2.17,
				pressure: 1012,
				sea_level: 1012,
				grnd_level: 885,
				humidity: 84,
				temp_kf: 0
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" }
			],
			clouds: { all: 87 },
			wind: { speed: 1.73, deg: 220 },
			sys: { pod: "n" },
			dt_txt: "2020-03-27 09:00:00"
		},
		{
			dt: 1585310400,
			main: {
				temp: -3.65,
				feels_like: -8.27,
				temp_min: -3.65,
				temp_max: -3.65,
				pressure: 1011,
				sea_level: 1011,
				grnd_level: 884,
				humidity: 74,
				temp_kf: 0
			},
			weather: [
				{ id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }
			],
			clouds: { all: 71 },
			wind: { speed: 2.51, deg: 185 },
			sys: { pod: "n" },
			dt_txt: "2020-03-27 12:00:00"
		},
		{
			dt: 1585321200,
			main: {
				temp: -3.45,
				feels_like: -7.78,
				temp_min: -3.45,
				temp_max: -3.45,
				pressure: 1009,
				sea_level: 1009,
				grnd_level: 882,
				humidity: 67,
				temp_kf: 0
			},
			weather: [
				{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }
			],
			clouds: { all: 0 },
			wind: { speed: 1.97, deg: 209 },
			sys: { pod: "d" },
			dt_txt: "2020-03-27 15:00:00"
		},
		{
			dt: 1585332000,
			main: {
				temp: 2.11,
				feels_like: -2.22,
				temp_min: 2.11,
				temp_max: 2.11,
				pressure: 1006,
				sea_level: 1006,
				grnd_level: 882,
				humidity: 55,
				temp_kf: 0
			},
			weather: [
				{ id: 801, main: "Clouds", description: "few clouds", icon: "02d" }
			],
			clouds: { all: 17 },
			wind: { speed: 2.32, deg: 243 },
			sys: { pod: "d" },
			dt_txt: "2020-03-27 18:00:00"
		},
		{
			dt: 1585342800,
			main: {
				temp: 6.01,
				feels_like: 1.83,
				temp_min: 6.01,
				temp_max: 6.01,
				pressure: 1005,
				sea_level: 1005,
				grnd_level: 882,
				humidity: 54,
				temp_kf: 0
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
			],
			clouds: { all: 100 },
			wind: { speed: 2.63, deg: 250 },
			sys: { pod: "d" },
			dt_txt: "2020-03-27 21:00:00"
		},
		{
			dt: 1585353600,
			main: {
				temp: 5.94,
				feels_like: 3.02,
				temp_min: 5.94,
				temp_max: 5.94,
				pressure: 1005,
				sea_level: 1005,
				grnd_level: 882,
				humidity: 65,
				temp_kf: 0
			},
			weather: [
				{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
			],
			clouds: { all: 89 },
			wind: { speed: 1.31, deg: 217 },
			sys: { pod: "d" },
			dt_txt: "2020-03-28 00:00:00"
		},
		{
			dt: 1585364400,
			main: {
				temp: 0.96,
				feels_like: -2.22,
				temp_min: 0.96,
				temp_max: 0.96,
				pressure: 1007,
				sea_level: 1007,
				grnd_level: 883,
				humidity: 76,
				temp_kf: 0
			},
			weather: [
				{ id: 800, main: "Clear", description: "clear sky", icon: "01n" }
			],
			clouds: { all: 9 },
			wind: { speed: 1.18, deg: 294 },
			sys: { pod: "n" },
			dt_txt: "2020-03-28 03:00:00"
		},
		{
			dt: 1585375200,
			main: {
				temp: -0.15,
				feels_like: -4.27,
				temp_min: -0.15,
				temp_max: -0.15,
				pressure: 1010,
				sea_level: 1010,
				grnd_level: 884,
				humidity: 70,
				temp_kf: 0
			},
			weather: [
				{ id: 800, main: "Clear", description: "clear sky", icon: "01n" }
			],
			clouds: { all: 8 },
			wind: { speed: 2.16, deg: 267 },
			sys: { pod: "n" },
			dt_txt: "2020-03-28 06:00:00"
		},
		{
			dt: 1585386000,
			main: {
				temp: -0.65,
				feels_like: -5,
				temp_min: -0.65,
				temp_max: -0.65,
				pressure: 1010,
				sea_level: 1010,
				grnd_level: 884,
				humidity: 70,
				temp_kf: 0
			},
			weather: [
				{ id: 800, main: "Clear", description: "clear sky", icon: "01n" }
			],
			clouds: { all: 2 },
			wind: { speed: 2.42, deg: 263 },
			sys: { pod: "n" },
			dt_txt: "2020-03-28 09:00:00"
		},
		{
			dt: 1585396800,
			main: {
				temp: -0.79,
				feels_like: -5.1,
				temp_min: -0.79,
				temp_max: -0.79,
				pressure: 1011,
				sea_level: 1011,
				grnd_level: 884,
				humidity: 69,
				temp_kf: 0
			},
			weather: [
				{ id: 801, main: "Clouds", description: "few clouds", icon: "02n" }
			],
			clouds: { all: 12 },
			wind: { speed: 2.32, deg: 264 },
			sys: { pod: "n" },
			dt_txt: "2020-03-28 12:00:00"
		},
		{
			dt: 1585407600,
			main: {
				temp: 0.81,
				feels_like: -3.2,
				temp_min: 0.81,
				temp_max: 0.81,
				pressure: 1011,
				sea_level: 1011,
				grnd_level: 885,
				humidity: 63,
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
			clouds: { all: 31 },
			wind: { speed: 1.93, deg: 257 },
			sys: { pod: "d" },
			dt_txt: "2020-03-28 15:00:00"
		},
		{
			dt: 1585418400,
			main: {
				temp: 5.41,
				feels_like: 2.64,
				temp_min: 5.41,
				temp_max: 5.41,
				pressure: 1009,
				sea_level: 1009,
				grnd_level: 885,
				humidity: 49,
				temp_kf: 0
			},
			weather: [
				{ id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
			],
			clouds: { all: 63 },
			wind: { speed: 0.32, deg: 7 },
			sys: { pod: "d" },
			dt_txt: "2020-03-28 18:00:00"
		},
		{
			dt: 1585429200,
			main: {
				temp: 6.51,
				feels_like: 2.29,
				temp_min: 6.51,
				temp_max: 6.51,
				pressure: 1007,
				sea_level: 1007,
				grnd_level: 884,
				humidity: 54,
				temp_kf: 0
			},
			weather: [
				{ id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
			],
			clouds: { all: 57 },
			wind: { speed: 2.77, deg: 132 },
			sys: { pod: "d" },
			dt_txt: "2020-03-28 21:00:00"
		},
		{
			dt: 1585440000,
			main: {
				temp: 6.48,
				feels_like: 2.88,
				temp_min: 6.48,
				temp_max: 6.48,
				pressure: 1006,
				sea_level: 1006,
				grnd_level: 883,
				humidity: 66,
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
			clouds: { all: 42 },
			wind: { speed: 2.43, deg: 160 },
			sys: { pod: "d" },
			dt_txt: "2020-03-29 00:00:00"
		},
		{
			dt: 1585450800,
			main: {
				temp: 3.28,
				feels_like: -1.12,
				temp_min: 3.28,
				temp_max: 3.28,
				pressure: 1006,
				sea_level: 1006,
				grnd_level: 882,
				humidity: 66,
				temp_kf: 0
			},
			weather: [
				{ id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }
			],
			clouds: { all: 59 },
			wind: { speed: 2.97, deg: 213 },
			sys: { pod: "n" },
			dt_txt: "2020-03-29 03:00:00"
		},
		{
			dt: 1585461600,
			main: {
				temp: 1.91,
				feels_like: -2.53,
				temp_min: 1.91,
				temp_max: 1.91,
				pressure: 1007,
				sea_level: 1007,
				grnd_level: 882,
				humidity: 73,
				temp_kf: 0
			},
			weather: [
				{ id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }
			],
			clouds: { all: 62 },
			wind: { speed: 3.04, deg: 207 },
			sys: { pod: "n" },
			dt_txt: "2020-03-29 06:00:00"
		},
		{
			dt: 1585472400,
			main: {
				temp: 0.75,
				feels_like: -2.74,
				temp_min: 0.75,
				temp_max: 0.75,
				pressure: 1006,
				sea_level: 1006,
				grnd_level: 881,
				humidity: 77,
				temp_kf: 0
			},
			weather: [
				{ id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }
			],
			clouds: { all: 75 },
			wind: { speed: 1.61, deg: 226 },
			sys: { pod: "n" },
			dt_txt: "2020-03-29 09:00:00"
		},
		{
			dt: 1585483200,
			main: {
				temp: 0.55,
				feels_like: -3.63,
				temp_min: 0.55,
				temp_max: 0.55,
				pressure: 1006,
				sea_level: 1006,
				grnd_level: 881,
				humidity: 71,
				temp_kf: 0
			},
			weather: [
				{ id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }
			],
			clouds: { all: 64 },
			wind: { speed: 2.38, deg: 237 },
			sys: { pod: "n" },
			dt_txt: "2020-03-29 12:00:00"
		},
		{
			dt: 1585494000,
			main: {
				temp: 2.28,
				feels_like: -2.39,
				temp_min: 2.28,
				temp_max: 2.28,
				pressure: 1005,
				sea_level: 1005,
				grnd_level: 881,
				humidity: 61,
				temp_kf: 0
			},
			weather: [
				{ id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
			],
			clouds: { all: 73 },
			wind: { speed: 3.03, deg: 245 },
			sys: { pod: "d" },
			dt_txt: "2020-03-29 15:00:00"
		}
	],
	city: {
		id: 5913490,
		name: "Calgary",
		coord: { lat: 51.0501, lon: -114.0853 },
		country: "CA",
		timezone: -21600,
		sunrise: 1585056510,
		sunset: 1585101370
	}
};
