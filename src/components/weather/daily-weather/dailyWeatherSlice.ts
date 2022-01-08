import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { DailyWeather } from "../../../app/types";
import { fetchDailyWeather } from "../weatherService";

export interface DailyWeatherState {
  value?: DailyWeather;
  status: "idle" | "loading" | "failed";
}

const initialState: DailyWeatherState = {
  value: undefined,
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
  reducers: {
    resetDailyWeather: (state) => {
      state.value = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDailyWeather.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDailyWeather.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = { ...action.payload };
      })
      .addCase(getDailyWeather.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { resetDailyWeather } = dailyWeatherSlice.actions;

export const selectDailyWeather = (state: RootState) =>
  state.dailyWeather.value;
export const selectLoadingStatus = (state: RootState) =>
  state.dailyWeather.status;

export default dailyWeatherSlice.reducer;
