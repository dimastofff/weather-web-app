import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import locationReducer from "../features/location/locationSlice";
import currentWeatherReducer from "../features/current-weather/currentWeatherSlice";
import dailyWeatherReducer from "../features/daily-weather/dailyWeatherSlice";
import hourlyWeatherReducer from "../features/hourly-weather/hourlyWeatherSlice";

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
