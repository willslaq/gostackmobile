import axios from 'axios';

/**
 * iOS com Emulador: localhost
 * iOS com físico: IP
 * Android Emulador: 
 */

const api = axios.create({
    baseURL: 'http://10.0.2.2:3333'
});

export default api;