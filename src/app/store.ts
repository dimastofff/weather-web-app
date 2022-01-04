import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import locationReducer from "../components/location/locationSlice";
import currentWeatherReducer from "../components/weather/current-weather/currentWeatherSlice";
import dailyWeatherReducer from "../components/weather/daily-weather/dailyWeatherSlice";
import hourlyWeatherReducer from "../components/weather/hourly-weather/hourlyWeatherSlice";

export const store = configureStore({
  reducer: {
    location: locationReducer,
    currentWeather: currentWeatherReducer,
    dailyWeather: dailyWeatherReducer,
    hourlyWeather: hourlyWeatherReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
