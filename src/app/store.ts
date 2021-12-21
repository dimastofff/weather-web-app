import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import currentWeatherReducer from "../features/current-weather/currentWeatherSlice";

export const store = configureStore({
  reducer: {
    currentWeather: currentWeatherReducer,
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
