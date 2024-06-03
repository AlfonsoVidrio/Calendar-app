import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables'; 

const { VITE_API_URL } = getEnvVariables();

const calendarApi = axios.create({
    baseURL: VITE_API_URL
})

// configurar inteceptores

export default calendarApi;