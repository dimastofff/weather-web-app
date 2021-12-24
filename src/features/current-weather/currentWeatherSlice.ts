import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { CurrentWeather } from "../../app/types";
import { fetchCurrentWeather } from "../../app/weatherService";

export interface CurrentWeatherState {
  value: CurrentWeather | null;
  status: "idle" | "loading" | "failed";
}

const initialState: CurrentWeatherState = {
  value: null,
  status: "idle",
};

export const getCurrentWeather = createAsyncThunk<CurrentWeather, any, any>(
  "currentWeather/get",
  async ({ latitude, longitude, language }) => {
    const response = await fetchCurrentWeather(latitude, longitude, language);
    return response.data;
  }
);

export const currentWeatherSlice = createSlice({
  name: "currentWeather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentWeather.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCurrentWeather.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = { ...action.payload };
      });
  },
});

export const selectCurrentWeather = (state: RootState) =>
  state.currentWeather.value;

export default currentWeatherSlice.reducer;