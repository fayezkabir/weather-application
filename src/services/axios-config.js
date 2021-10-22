import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
    // headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
    // },
});


export default axiosInstance;