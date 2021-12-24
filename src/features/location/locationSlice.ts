import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface LocationState {
  value: number[] | null;
  status: "idle" | "loading" | "failed";
}

const initialState: LocationState = {
  value: null,
  status: "idle",
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    updateLocation: (state, action: PayloadAction<number[]>) => {
      state.value = [...action.payload];
    },
  },
});

export const { updateLocation } = locationSlice.actions;

export const selectLocation = (state: RootState) => state.location.value;

export default locationSlice.reducer;
