import axios from "axios";

export const http = axios.create({
    // baseURL: process?.env.VITE_APP_APIURL_,
    baseURL: "http://localhost:3031",
    headers: {
        "Content-Type": "application/json"
    }
})