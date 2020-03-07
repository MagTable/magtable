// mapped to role names from API
export const SYSTEM_ADMINISTRATOR = "System Administrator";
export const PERSONNEL_MANAGER = "Personnel Manager";
export const MECHANIC = "Mechanic";

// Employee Shift Descriptions
export const OPERATIONS_MANAGER = "Operations Manager";
export const OPERATIONS_SUPERVISOR = "Operations Supervisor";
export const CTM = "CTM";
export const TOWER_SPOTTER = "Tower Spotter";
export const ICEMAN = "Iceman";
export const ICEHOUSE = "Icehouse";
export const BAY_LEAD = "Bay Lead";
export const PRACTICAL_TRAINER = "Practical Trainer";
export const TECHNICIAN = "Technician";
export const OJT = "OJT";
export const OJT_TOWER = "OJT-Tower";
export const TOWER_TRAINER = "Tower Trainer";
export const TRAINER = "Trainer";
export const TRAINER_POSITIONS = [TRAINER, TOWER_TRAINER, PRACTICAL_TRAINER];
export const MANAGEMENT_POSITIONS = [OPERATIONS_MANAGER, OPERATIONS_SUPERVISOR];
export const TECHNICIAN_POSITIONS = [
	OJT,
	BAY_LEAD,
	PRACTICAL_TRAINER,
	TECHNICIAN
];
export const TOWER_POSITIONS = [
	CTM,
	TOWER_SPOTTER,
	ICEMAN,
	ICEHOUSE,
	OJT_TOWER,
	TOWER_TRAINER
];

export const ALL_POSITIONS = [
	OPERATIONS_MANAGER,
	OPERATIONS_SUPERVISOR,
	CTM,
	TOWER_SPOTTER,
	ICEMAN,
	ICEHOUSE,
	BAY_LEAD,
	PRACTICAL_TRAINER,
	OJT,
	OJT_TOWER,
	TOWER_TRAINER,
	MECHANIC
];

// truck status'
export const GO = "GO";
export const CON = "CON";
export const OOS = "OOS";
export const INOP = "INOP";

// UI Hint Types
export const DANGER = "DANGER";
export const WARNING = "WARNING";
export const SUCCESS = "SUCCESS";

export const EAST_APRON = "EDA";
export const WEST_APRON = "WDA";

export const WEST = "W";
export const EAST = "E";
export const CENTER = "C";
// export const LEFT = "left";
// export const RIGHT = "right";

// export const AM = "am";
// export const PM = "pm";

export const SET_ALERT = "SET_ALERT";
export const REMOVE_ALERT = "REMOVE_ALERT";

export const ADD_USER = "ADD_USER";
export const USER_ERROR = "USER_ERROR";
export const GET_USERS = "GET_USERS";
export const GET_USER = "GET_USER";
export const DELETE_USER = "DELETE_USER";
export const EDIT_USER = "EDIT_USER";
export const GET_ROLES = "GET_ROLES";
export const RESET_PASSWORD = "RESET_PASSWORD";

export const USER_LOADED = "USER_LOADED";
export const AUTH_ERROR = "AUTH_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";
export const LOGGING_IN = "LOGGING_IN";
export const CLEAR_ERROR = "CLEAR_ERROR";

/* Assignment Table */
export const SET_EQUIPMENT_EMPLOYEE = "SET_EQUIPMENT_EMPLOYEE";
// export const ADD_EQUIPMENT_EMPLOYEE = "ADD_EQUIPMENT_EMPLOYEE";
export const REMOVE_EQUIPMENT_EMPLOYEE = "REMOVE_EQUIPMENT_EMPLOYEE";

export const SET_TRUCK_LOCATION = "SET_TRUCK_LOCATION";
export const REMOVE_TRUCK_LOCATION = "REMOVE_TRUCK_LOCATION";
export const TOGGLE_BAY_LEAD = "TOGGLE_BAY_LEAD";

export const SET_SELECTED_APRON = "SET_SELECTED_APRON";

export const ADD_EMPLOYEE_SHIFT = "ADD_EMPLOYEE_SHIFT";
export const GET_ASSIGNMENT_DATA = "GET_ASSIGNMENT_DATA"; // server will periodically update shift list on it's own, this would force a refresh
export const REFRESHING_EMPLOYEE_SHIFTS = "REFRESHING_EMPLOYEE_SHIFTS";
export const REFRESH_EMPLOYEE_SHIFTS = "REFRESH_EMPLOYEE_SHIFTS";

export const ADD_DAILY_MESSAGE = "ADD_DAILY_MESSAGE";
export const REMOVE_DAILY_MESSAGE = "REMOVE_DAILY_MESSAGE";

export const SET_DAILY_MIX = "SET_DAILY_MIX";
export const ADD_BRIX_RECORD = "ADD_BRIX_RECORD";

export const PUBLISH_TABLE = "PUBLISH_TABLE";

// standard axios config object for POST requests
export const AXIOS_JSON_HEADER = {
	headers: {
		"Content-Type": "application/json"
	}
};
