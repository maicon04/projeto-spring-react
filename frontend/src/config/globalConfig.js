import Axios from 'axios';
import { BASE_URL } from "Utils/requests";

export const Http = Axios.create({
    apiUrl : BASE_URL
})