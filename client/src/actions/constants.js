/**
 * @category Redux-Actions
 * @module Constants
 */

/**
 * System Administrator Role mapped from API
 * @const {string} SYSTEM_ADMINISTRATOR
 */
export const SYSTEM_ADMINISTRATOR = "System Administrator";

/**
 * Personnel Manager Role mapped from API
 * @const {string} PERSONNEL_MANAGER
 */
export const PERSONNEL_MANAGER = "Personnel Manager";

/**
 * Mechanic Role mapped from API
 * @const {string} MECHANIC
 */
export const MECHANIC = "Mechanic";

// Employee Shift Descriptions
/**
 * Operations Manager Role
 * @const {string} OPERATIONS_MANAGER
 */
export const OPERATIONS_MANAGER = "Operations Manager";

/**
 * Operations Supervisor Role
 * @const {string} OPERATIONS_SUPERVISOR
 */
export const OPERATIONS_SUPERVISOR = "Operations Supervisor";

/**
 * CTM Role
 * @const {string} CTM
 */
export const CTM = "CTM";

/**
 * Tower Spotter Role
 * @const {string} TOWER_SPOTTER
 */
export const TOWER_SPOTTER = "Tower Spotter";

/**
 * Iceman Role
 * @const {string} ICEMAN
 */
export const ICEMAN = "Iceman";

/**
 * Icehouse Role
 * @const {string} ICEHOUSE
 */
export const ICEHOUSE = "Icehouse";

/**
 * Bay Lead Role
 * @const {string} BAY_LEAD
 */
export const BAY_LEAD = "Bay Lead";

/**
 * Practical Trainer Role
 * @const {string} PRACTICAL_TRAINER
 */
export const PRACTICAL_TRAINER = "Practical Trainer";

/**
 * Technician Role
 * @const {string} TECHNICIAN
 */
export const TECHNICIAN = "Technician";

/**
 * On-Job-Training(OJT) Role
 * @const {string} OJT
 */
export const OJT = "OJT";

/**
 * On-Job-Training(OJT) Tower
 * @const {string} OJT_TOWER
 */
export const OJT_TOWER = "OJT-Tower";

/**
 * Tower Trainer Role
 * @const {string} TOWER_TRAINER
 */
export const TOWER_TRAINER = "Tower Trainer";
/**
 * Trainer Role
 * @const {string} TRAINER
 */
export const TRAINER = "Trainer";

/**
 * All the trainer positions. This includes Trainer, Tower Trainer and Practical Trainer Roles
 * @const {TRAINER_POSITIONS[]} TRAINER_POSITIONS
 */
export const TRAINER_POSITIONS = [TRAINER, TOWER_TRAINER, PRACTICAL_TRAINER];

/**
 * All the management positions. This includes Operations Manager, Operations Supervisor Roles.
 * @const {MANAGEMENT_POSITIONS[]} MANAGEMENT_POSITIONS
 */
export const MANAGEMENT_POSITIONS = [OPERATIONS_MANAGER, OPERATIONS_SUPERVISOR];

/**
 * All the technician positions. This includes OJT, Bay Lead, Practical Trainer, Technician and Trainer Roles.
 * @const {TECHNICIAN_POSITIONS[]} TECHNICIAN_POSITIONS
 */
export const TECHNICIAN_POSITIONS = [
	OJT,
	BAY_LEAD,
	PRACTICAL_TRAINER,
	TECHNICIAN,
	TRAINER
];

/**
 * All the tower positions. This includes CTM, Tower Spotter, Iceman, Icehouse, OJT Tower, Tower Trainer Roles.
 * @const {TOWER_POSITIONS[]} TOWER_POSITIONS
 */
export const TOWER_POSITIONS = [
	CTM,
	TOWER_SPOTTER,
	ICEMAN,
	ICEHOUSE,
	OJT_TOWER,
	TOWER_TRAINER
];

/**
 * All positions within the system. This includes Operations Manager, Operations Supervisor, CTM, Tower Spotter, Iceman, Icehouse, OJT Tower, Tower Trainer, OJT, Bay Lead, Practical Trainer, Technician, Trainer and Mechanic.
 * @const {ALL_POSITIONS[]} ALL_POSITIONS
 */
export const ALL_POSITIONS = [
	OPERATIONS_MANAGER,
	OPERATIONS_SUPERVISOR,
	TOWER_TRAINER,
	CTM,
	TOWER_SPOTTER,
	ICEMAN,
	ICEHOUSE,
	OJT_TOWER,
	TRAINER,
	PRACTICAL_TRAINER,
	BAY_LEAD,
	TECHNICIAN,
	OJT,
	MECHANIC
];

/**
 * Truck Status Go
 * @const {sting} GO
 */
export const GO = "GO";

/**
 * Truck Status Conditional
 * @const {sting} CON
 */
export const CON = "CON";

/**
 * Truck Status Out-of-Service
 * @const {sting} OOS
 */
export const OOS = "OOS";

/**
 * Truck Status Inoperable
 * @const {sting} INOP
 */
export const INOP = "INOP";

/**
 * Service Vehicle Type
 * @const {sting} SERVICE_VEHICLE
 */
export const SERVICE_VEHICLE = "SVV";

/**
 * De-Ice Truck Type
 * @const {sting} DEICE_TRUCK
 */
export const DEICE_TRUCK = "ICE";

/**
 * All possible truck statuses.
 * @const {TRUCK_STATUSES[]} TRUCK_STATUSES
 */
export const TRUCK_STATUSES = [GO, CON, OOS, INOP];

/**
 * De-Ice Trucks related information such as id being ICE.
 * @const {object} truck
 */
export const ICE = { id: "ICE", value: "Deice Vehicle" };

/**
 * Service Vehicles related information such as id being SVV.
 * @const {object} truck
 */
export const SVV = { id: "SVV", value: "Service Vehicle" };

/**
 * Holds all types of vehicles such as De-Ice and Service Vehicles
 * @const {VEHICLE_TYPES[]} VEHICLE_TYPES
 */
export const VEHICLE_TYPES = [ICE, SVV];

/**
 * UI Alert Danger Type
 * @const {string} DANGER
 */
export const DANGER = "DANGER";

/**
 * UI Alert WARNING Type
 * @const {string} WARNING
 */
export const WARNING = "WARNING";

/**
 * UI Alert SUCCESS Type
 * @const {string} SUCCESS
 */
export const SUCCESS = "SUCCESS";

/**
 * East Apron
 * @const {string} EAST_APRON
 */
export const EAST_APRON = "EDA";

/**
 * West Apron
 * @const {string} WEST_APRON
 */
export const WEST_APRON = "WDA";

/**
 * West Parking Bay
 * @const {string} WEST
 */
export const WEST = "W";

/**
 * East Parking Bay
 * @const {string} EAST
 */
export const EAST = "E";

/**
 * Center Parking Bay
 * @const {string} CENTER
 */
export const CENTER = "C";
// export const LEFT = "left";
// export const RIGHT = "right";

/**
 * AM Setting
 * @const {string} AM
 */
export const AM = "AM";

/**
 * PM Setting
 * @const {string} PM
 */
export const PM = "PM";

/**
 * Sets Alerts
 * @const {string} SET_ALERT
 */
export const SET_ALERT = "SET_ALERT";

/**
 * Removes Alerts
 * @const {string} REMOVE_ALERT
 */
export const REMOVE_ALERT = "REMOVE_ALERT";

/**
 * Add User
 * @const {string} ADD_USER
 */
export const ADD_USER = "ADD_USER";

/**
 * User Error
 * @const {string} USER_ERROR
 */
export const USER_ERROR = "USER_ERROR";

/**
 * Get Users
 * @const {string} GET_USERS
 */
export const GET_USERS = "GET_USERS";

/**
 * Get User
 * @const {string} GET_USER
 */
export const GET_USER = "GET_USER";

/**
 * Delete User
 * @const {string} DELETE_USER
 */
export const DELETE_USER = "DELETE_USER";

/**
 * Edit User
 * @const {string} EDIT_USER
 */
export const EDIT_USER = "EDIT_USER";

/**
 * Gets Roles
 * @const {string} GET_ROLES
 */
export const GET_ROLES = "GET_ROLES";

/**
 * Resets Password
 * @const {string} RESET_PASSWORD
 */
export const RESET_PASSWORD = "RESET_PASSWORD";

/**
 * User Loaded
 * @const {string} USER_LOADED
 */
export const USER_LOADED = "USER_LOADED";

/**
 * Authentication Error
 * @const {string} AUTH_ERROR
 */
export const AUTH_ERROR = "AUTH_ERROR";

/**
 * Login Success
 * @const {string} LOGIN_SUCCESS
 */
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

/**
 * Login Fail
 * @const {string} LOGIN_FAIL
 */
export const LOGIN_FAIL = "LOGIN_FAIL";

/**
 * Logout
 * @const {string} LOGOUT
 */
export const LOGOUT = "LOGOUT";

/**
 * Logging In
 * @const {string} LOGGING_IN
 */
export const LOGGING_IN = "LOGGING_IN";

/**
 * Clear Error
 * @const {string} CLEAR_ERROR
 */
export const CLEAR_ERROR = "CLEAR_ERROR";

/* Assignment Table.js */

/**
 * Set Equipment Employee
 * @const {string} SET_EQUIPMENT_EMPLOYEE
 */
export const SET_EQUIPMENT_EMPLOYEE = "SET_EQUIPMENT_EMPLOYEE";
// export const ADD_EQUIPMENT_EMPLOYEE = "ADD_EQUIPMENT_EMPLOYEE";

/**
 * Remove Equipment Employee
 * @const {string} REMOVE_EQUIPMENT_EMPLOYEE
 */
export const REMOVE_EQUIPMENT_EMPLOYEE = "REMOVE_EQUIPMENT_EMPLOYEE";

/**
 * Sets Truck Location
 * @const {string} SET_TRUCK_LOCATION
 */
export const SET_TRUCK_LOCATION = "SET_TRUCK_LOCATION";

/**
 * Remove Truck Location
 * @const {string} REMOVE_TRUCK_LOCATION
 */
export const REMOVE_TRUCK_LOCATION = "REMOVE_TRUCK_LOCATION";

/**
 * Toggles Bay Lead Status
 * @const {string} TOGGLE_BAY_LEAD
 */
export const TOGGLE_BAY_LEAD = "TOGGLE_BAY_LEAD";

/**
 * Toggles selected Apron
 * @const {string} SET_SELECTED_APRON
 */
export const SET_SELECTED_APRON = "SET_SELECTED_APRON";

/**
 * Toggles AM or PM
 * @const {string} TOGGLE_AM_PM
 */
export const TOGGLE_AM_PM = "TOGGLE_AM_PM";

/**
 * Adds Employee Shift
 * @const {string} ADD_EMPLOYEE_SHIFT
 */
export const ADD_EMPLOYEE_SHIFT = "ADD_EMPLOYEE_SHIFT";

/**
 * Get assignment data
 * @const {string} GET_ASSIGNMENT_DATA
 */
export const GET_ASSIGNMENT_DATA = "GET_ASSIGNMENT_DATA"; // server will periodically update shift list on it's own, this would force a refresh

/**
 * Refreshing employee shifts
 * @const {string} REFRESHING_EMPLOYEE_SHIFTS
 */
export const REFRESHING_EMPLOYEE_SHIFTS = "REFRESHING_EMPLOYEE_SHIFTS";

/**
 * Refresh employee shifts
 * @const {string} REFRESH_EMPLOYEE_SHIFTS
 */
export const REFRESH_EMPLOYEE_SHIFTS = "REFRESH_EMPLOYEE_SHIFTS";

/**
 * Adds a daily message
 * @const {string} ADD_DAILY_MESSAGE
 */
export const ADD_DAILY_MESSAGE = "ADD_DAILY_MESSAGE";

/**
 * Removes daily message.
 * @const {string} REMOVE_DAILY_MESSAGE
 */
export const REMOVE_DAILY_MESSAGE = "REMOVE_DAILY_MESSAGE";

/**
 * Adds brix record
 * @const {string} ADD_BRIX_RECORD
 */
export const ADD_BRIX_RECORD = "ADD_BRIX_RECORD";

/**
 * Adding brix record
 * @const {string} ADDING_BRIX_RECORD
 */
export const ADDING_BRIX_RECORD = "ADDING_BRIX_RECORD";

/**
 * Fetches Brix Records
 * @const {string} FETCHING_BRIX_RECORDS
 */
export const FETCHING_BRIX_RECORDS = "FETCHING_BRIX_RECORDS";

/**
 * Gets brix records
 * @const {string} GET_BRIX_RECORDS
 */
export const GET_BRIX_RECORDS = "GET_BRIX_RECORDS";

/**
 * Gets brix chart.
 * @const {string} GET_BRIX_CHART
 */
export const GET_BRIX_CHART = "GET_BRIX_CHART";

/**
 * Gets weather.
 * @const {string} GET_WEATHER
 */
export const GET_WEATHER = "GET_WEATHER";

/**
 * Sets daily mix.
 * @const {string} SET_DAILY_MIX
 */
export const SET_DAILY_MIX = "SET_DAILY_MIX";

/**
 * Increments daily mix.
 * @const {string} INCREMENT_DAILY_MIX
 */
export const INCREMENT_DAILY_MIX = "INCREMENT_DAILY_MIX";

/**
 * Decrements daily mix.
 * @const {string} DECREMENT_DAILY_MIX
 */
export const DECREMENT_DAILY_MIX = "DECREMENT_DAILY_MIX";

/**
 * Sets daily mix chart row
 * @const {string} SET_DAILY_MIX_CHART_ROW
 */
export const SET_DAILY_MIX_CHART_ROW = "SET_DAILY_MIX_CHART_ROW";

/**
 * Publishes MagTable Data
 * @const {string} PUBLISH_TABLE
 */
export const PUBLISH_TABLE = "PUBLISH_TABLE";

/**
 * Clears all data from MagTable
 * @const {string} CLEAR_TABLE
 */
export const CLEAR_TABLE = "CLEAR_TABLE";

/**
 * Loading indicator for fetching magtable history list
 * @const {string} FETCHING_MAGTABLE_HISTORY_LIST
 */
export const FETCHING_MAGTABLE_HISTORY_LIST = "FETCHING_MAGTABLE_HISTORY_LIST";

/**
 * Gets magtable history list
 * @const {string} GET_MAGTABLE_HISTORY_LIST
 */
export const GET_MAGTABLE_HISTORY_LIST = "GET_MAGTABLE_HISTORY_LIST";

/**
 * Gets singular historical magtable
 * @const {string} GET_HISTORICAL_MAGTABLE
 */
export const GET_HISTORICAL_MAGTABLE = "GET_HISTORICAL_MAGTABLE";

/**
 * Loading indicator for fetching singular historical magtable
 * @const {string} FETCHING_HISTORICAL_MAGTABLE
 */
export const FETCHING_HISTORICAL_MAGTABLE = "FETCHING_HISTORICAL_MAGTABLE";

/**
 * Gets parking locations.
 * @const {string} GET_PARKING_LOCATIONS
 */
export const GET_PARKING_LOCATIONS = "GET_PARKING_LOCATIONS";

/**
 * Edits Truck
 * @const {string} EDIT_TRUCK
 */
export const EDIT_TRUCK = "EDIT_TRUCK";

/**
 * Add Truck
 * @const {string} ADD_TRUCK
 */
export const ADD_TRUCK = "ADD_TRUCK";

/**
 * Deletes truck.
 * @const {string} DELETE_TRUCK
 */
export const DELETE_TRUCK = "DELETE_TRUCK";

/**
 * To clear the historical magtable object
 * @type {string} CLEAR_HISTORICAL_MAGTABLE
 */
export const CLEAR_HISTORICAL_MAGTABLE = "CLEAR_HISTORICAL_MAGTABLE";

/**
 * Gets headers data from Axios
 * @const {object} AXIOS_JSON_HEADER
 */
export const AXIOS_JSON_HEADER = {
	headers: {
		"Content-Type": "application/json"
	}
};

// API CONSTANTS

/**
 * Publish magtable case
 * @type {string} MTR_PUBLISH
 */
export const MTR_PUBLISH = "MTR_PUBLISH";

/**
 * Clear assignment shifts
 * @type {string} CLEAR_ASSIGNMENT_SHIFTS
 */
export const CLEAR_ASSIGNMENT_SHIFTS = "CLEAR_ASSIGNMENT_SHIFTS";
