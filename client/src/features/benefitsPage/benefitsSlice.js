import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fitness: false,
  holiday: false,
};

export const benefitsSlice = createSlice({
  name: "benefits",
  initialState,
  reducers: {
    switchFitness: (state) => {
      state.fitness = !state.fitness;
    },
    switchHoliday: (state) => {
      state.holiday = !state.holiday;
    },
  },
});

export const selectFitness = (state) => state.benefits.fitness;
export const selectHoliday = (state) => state.benefits.holiday;

export const { switchFitness, switchHoliday } = benefitsSlice.actions;

export default benefitsSlice.reducer