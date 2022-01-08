import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { HourlyWeather } from "../../../app/types";
import { fetchHourlyWeather } from "../weatherService";

export interface HourlyWeatherState {
  value?: HourlyWeather;
  status: "idle" | "loading" | "failed";
}

const initialState: HourlyWeatherState = {
  value: undefined,
  status: "idle",
};

export const getHourlyWeather = createAsyncThunk<HourlyWeather, any, any>(
  "hourlyWeather/get",
  async ({ latitude, longitude, language }) => {
    const response = await fetchHourlyWeather(latitude, longitude, language);
    return response.data;
  }
);

export const hourlyWeatherSlice = createSlice({
  name: "hourlyWeather",
  initialState,
  reducers: {
    resetHourlyWeather: (state) => {
      state.value = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHourlyWeather.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getHourlyWeather.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = { ...action.payload };
      })
      .addCase(getHourlyWeather.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { resetHourlyWeather } = hourlyWeatherSlice.actions;

export const selectHourlyWeather = (state: RootState) =>
  state.hourlyWeather.value;
export const selectLoadingStatus = (state: RootState) =>
  state.hourlyWeather.status;

export default hourlyWeatherSlice.reducer;
