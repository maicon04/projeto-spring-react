import Axios from 'axios';
import { BASE_URL } from "Utils/requests";

export const Http = Axios.create({
    url: BASE_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Authorization': localStorage.getItem('token')     }

})