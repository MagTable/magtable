import axios from "axios";
import { ADD_USER, DELETE_USER, GET_USERS, GET_USER } from "./constants";
import { setAlert } from "./alert";

const config = {
  headers: {
    "Content-Type": "application/json"
  }
};

const testUsers = [
  {
    username: "arran",
    userLevel: 1
  },
  {
    username: "steven",
    userLevel: 2
  },
  {
    username: "tom",
    userLevel: 1
  },
  {
    username: "mj",
    userLevel: 3
  }
];

const testUser = {
  username: "arran",
  userLevel: 1
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

    dispatch(setAlert("User Added Successfully.", success));
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
