export type CurrentWeather = {
  current: {
    sunrise: Date;
    sunset: Date;
    temp: number;
    feels_like: number;
  } & MainParams;
  alerts: Alert[];
};

export type HourlyWeather = {
  hourly: {
    temp: number;
    feels_like: number;
  } & MainParams;
  alerts: Alert[];
};

export type DailyWeather = {
  daily: {
    sunrise: Date;
    sunset: Date;
    temp: DailyTemperature;
    feels_like: DailyTemperature;
  } & MainParams;
  alerts: Alert[];
};

export type MainParams = {
  dt: Date;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  wind_speed: number;
  wind_deg: number;
  weather: WeatherDetails[];
};

export type DailyTemperature = {
  day: number;
  night: number;
  eve: number;
  morn: number;
};

export type WeatherDetails = {
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
