import Axios from 'axios';
import { API_URL } from "Utils/requests";

export const Http = Axios.create({
    url: API_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Authorization': localStorage.getItem('token')     }

})