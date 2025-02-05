import axios from 'axios';

export default axios.create({
    // baseURL: `http://localhost:46888/`,
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
         Authorization:'Bearer ' + localStorage.token ,
        "Content-Type": "application/json",
    }
});
