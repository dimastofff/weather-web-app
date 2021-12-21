import axios, { AxiosResponse } from "axios";

const APP_ID = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;

export function fetchCurrentWeather(
  latitude: number,
  longitude: number,
  language: string
): Promise<AxiosResponse<any, any>> {
  return axios.get(
    `http://api.openweathermap.org/data/2.5/onecall?appid=${APP_ID}&lat=${latitude}&lon=${longitude}&lang=${language}&&exclude=minutely,hourly,daily`
  );
}

export function fetchHourlyWeather(
  latitude: number,
  longitude: number,
  language: string
): Promise<AxiosResponse<any, any>> {
  return axios.get(
    `http://api.openweathermap.org/data/2.5/onecall?appid=${APP_ID}&lat=${latitude}&lon=${longitude}&lang=${language}&&exclude=minutely,current,daily`
  );
}

export function fetchDailyWeather(
  latitude: number,
  longitude: number,
  language: string
): Promise<AxiosResponse<any, any>> {
  return axios.get(
    `http://api.openweathermap.org/data/2.5/onecall?appid=${APP_ID}&lat=${latitude}&lon=${longitude}&lang=${language}&&exclude=minutely,current,hourly`
  );
}
