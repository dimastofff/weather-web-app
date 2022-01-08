import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { CurrentWeather } from "../../../app/types";
import { fetchCurrentWeather } from "../weatherService";

export interface CurrentWeatherState {
  value?: CurrentWeather;
  status: "idle" | "loading" | "failed";
}

const initialState: CurrentWeatherState = {
  value: undefined,
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
  reducers: {
    resetCurrentWeather: (state) => {
      state.value = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentWeather.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCurrentWeather.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = { ...action.payload };
      })
      .addCase(getCurrentWeather.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { resetCurrentWeather } = currentWeatherSlice.actions;

export const selectCurrentWeather = (state: RootState) =>
  state.currentWeather.value;
export const selectLoadingStatus = (state: RootState) =>
  state.currentWeather.status;

export default currentWeatherSlice.reducer;
