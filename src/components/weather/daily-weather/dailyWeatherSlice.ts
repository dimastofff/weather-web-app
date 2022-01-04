import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { DailyWeather } from "../../../app/types";
import { fetchDailyWeather } from "../weatherService";

export interface DailyWeatherState {
  value: DailyWeather | null;
  status: "idle" | "loading" | "failed";
}

const initialState: DailyWeatherState = {
  value: null,
  status: "idle",
};

export const getDailyWeather = createAsyncThunk<DailyWeather, any, any>(
  "dailyWeather/get",
  async ({ latitude, longitude, language }) => {
    const response = await fetchDailyWeather(latitude, longitude, language);
    return response.data;
  }
);

export const dailyWeatherSlice = createSlice({
  name: "dailyWeather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDailyWeather.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDailyWeather.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = { ...action.payload };
      });
  },
});

export const selectDailyWeather = (state: RootState) =>
  state.dailyWeather.value;

export default dailyWeatherSlice.reducer;
