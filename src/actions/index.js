import axios from 'axios';

const API_KEY = '2ec0e15017a6b0afb8268780bee7974c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},MA`;
  const request = axios.get(url);
 
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
