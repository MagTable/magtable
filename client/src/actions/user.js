import axios from "axios";
import {ADD_USER, DELETE_USER, GET_USERS, GET_USER, EDIT_USER} from "./constants";
import {setAlert} from "./alert";

const config = {
    headers: {
        "Content-Type": "application/json"
    }
};

const testUsers = [
    {
        userID: 1,
        levelID: 1,
        username: 'Arran',
        password: 'password',
    },
    {
        userID: 2,
        levelID: 3,
        username: 'Steven',
        password: 'password',
    },
    {
        userID: 3,
        levelID: 2,
        username: 'David',
        password: 'password',
    },
    {
        userID: 4,
        levelID: 2,
        username: 'Tom',
        password: 'password',
    }
];

const testUser = {
    userID: 1,
    levelID: 1,
    username: 'Arran',
    password: 'password',
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

export const addUser = user => dispatch => {
    try {
        //const data = axios.post("/user/add", user, config);

        dispatch({
            type: ADD_USER,
            payload: user // will be res.data once API request is implemented
        });

        dispatch(setAlert("User Added Successfully.", 'success'));
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

        dispatch(setAlert("User Deleted Successfully", "sucess"));
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
}
