import axios from 'axios';
import { CONVERTEDCODE_API_URL } from '@env';

import { getTokenFromStorage } from '../utils/Functions';

const token = getTokenFromStorage();

export const http = axios.create({
    baseURL: CONVERTEDCODE_API_URL,
    timeout: 100000,
    headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*',
    }
})