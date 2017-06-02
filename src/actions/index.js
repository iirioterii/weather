import {FETCH_WEATHER, WEATHER_API_URL} from '../constants/Api';
import axios from 'axios';

export function fetchWeather(city) {
    const url = `${WEATHER_API_URL}&q=${city},ua`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}