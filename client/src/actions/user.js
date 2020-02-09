import axios from 'axios';
import {
	ADD_USER,
	DELETE_USER,
	GET_USERS,
	GET_USER,
	EDIT_USER,
	GET_LEVELS,
	RESET_PASSWORD
} from './constants';
import { setAlert } from './alert';

const config = {
	headers: {
		'Content-Type': 'application/json'
	}
};

const testUsers = [
	{
		id: 1,
		username: 'mustafa',
		tempPassword: '',
		role: {
			roleID: 1,
			roleName: 'System Manager'
		}
	},
	{
		id: 2,
		username: 'david',
		tempPassword: '',
		role: {
			roleID: 2,
			roleName: 'Personal Manager'
		}
	},
	{
		id: 3,
		username: 'steven',
		tempPassword: '',
		role: {
			roleID: 3,
			roleName: 'Mechanic'
		}
	}
];

const testLevels = [
	{
		levelID: 1,
		description: 'mechanic'
	},
	{
		levelID: 2,
		description: 'personnel manager'
	},
	{
		levelID: 3,
		description: 'system administrator'
	}
];

const testUser = {
	id: 3,
	username: 'steven',
	levelID: 3
};

export const getUser = id => dispatch => {
	try {
		// const data = axios.get(`/user/${id}`);

		dispatch({
			type: GET_USER,
			payload: testUser // will be res.data once API request is implemented
		});
	} catch (err) {
		/*
         *@todo implement based on error return object, something like:

         dispatch(setAlert(err.response.msg, danger));

         */
	}
};

export const getUsers = () => dispatch => {
	try {
		// const data = axios.get("/user/all");

		dispatch({
			type: GET_USERS,
			payload: testUsers // will be res.data once API request is implemented
		});
	} catch (err) {
		/*
         *@todo implement based on error return object, something like:

         dispatch(setAlert(err.response.msg, danger));

         */
	}
};

export const getLevelDescriptions = () => dispatch => {
	try {
		// const data = axios.get("/user/levels");

		dispatch({
			type: GET_LEVELS,
			payload: testLevels
		});
	} catch (err) {
		// todo implement based on error return object
	}
};

export const addUser = user => dispatch => {
	try {
		//const data = axios.post("/user/add", user, config);

		dispatch({
			type: ADD_USER,
			payload: user // will be res.data once API request is implemented
		});

		dispatch(setAlert('User Added Successfully.', 'success'));
	} catch (err) {
		/*
         *@todo implement based on error return object, something like:

         dispatch(setAlert(err.response.msg, danger));

         */
	}
};

export const deleteUser = id => dispatch => {
	try {
		// axios.delete(`/user/delete/${id}`);

		dispatch({
			type: DELETE_USER,
			payload: id
		});

		dispatch(setAlert('User Deleted Successfully', 'sucess'));
	} catch (err) {
		/*
         *@todo implement based on error return object, something like:

         dispatch(setAlert(err.response.msg, danger));

         */
	}
};

export const editUser = id => dispatch => {
	try {
		dispatch({
			type: EDIT_USER,
			payload: id
		});
	} catch (err) {
		// todo implement based on error return object.
	}
};

export const resetPassword = (id, tempPassword) => dispatch => {
	try {
		dispatch({
			type: RESET_PASSWORD,
			payload: { id, tempPassword }
		});
	} catch (err) {
		//todo implement based on error
	}
};
