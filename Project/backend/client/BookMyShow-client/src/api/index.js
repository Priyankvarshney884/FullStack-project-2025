import axios from 'axios';

export const axiosInstance = axios.create({
    headers:{
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    },
    // baseURL: "http://localhost:8080/api/v1",
    // timeout: 10000, // Set a timeout of 10 seconds
    // withCredentials: true, // Include credentials in requests
    // validateStatus: function (status) {
    //     return status >= 200 && status < 500; // Accept all 2xx and 4xx responses   
    //     // You can customize this function to handle specific status codes differently
    // }
});