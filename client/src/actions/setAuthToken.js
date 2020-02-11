import axios from "axios";

// set auth token for common axios parameters, this will be added to all requests
const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export default setAuthToken;