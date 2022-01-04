export type CurrentWeather = {
  current: Weather;
  alerts: Alert[];
};

export type HourlyWeather = {
  hourly: Weather;
  alerts: Alert[];
};

export type DailyWeather = {
  daily: Weather;
  alerts: Alert[];
};

export type Weather = {
  dt: number;
  sunrise: number | undefined;
  sunset: number | undefined;
  temp: number | DailyTemperature;
  feels_like: number | DailyTemperature;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  wind_speed: number;
  wind_deg: number;
  weather: WeatherDescription[];
};

export type DailyTemperature = {
  day: number;
  night: number;
  eve: number;
  morn: number;
};

export type WeatherDescription = {
  id: number;
  main: string;
  descrition: string;
  icon: string;
};

export type Alert = {
  sender_name: string;
  event: string;
  start: Date;
  end: Date;
  description: string;
  tags: string[];
};
