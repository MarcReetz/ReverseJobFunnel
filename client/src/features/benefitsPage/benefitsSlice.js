import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hardware: false,
  time: false,
  fitness: false,
  holiday: false,
  learning: false,
  remoteworking: false 
};

export const benefitsSlice = createSlice({
  name: "benefits",
  initialState,
  reducers: {
    switchHardware: (state) => {
      state.hardware = !state.hardware;
    },
    switchTime: (state) => {
      state.time = !state.time
    },
    switchFitness: (state) => {
      state.fitness = !state.fitness;
    },
    switchHoliday: (state) => {
      state.holiday = !state.holiday;
    },
    switchLearning: (state) => {
      state.learning = !state.learning
    },
    switchRemoteworking: (state) => {
      state.remoteworking = !state.remoteworking
    }
  },
});

export const selectHardware = (state) => state.benefits.hardware
export const selectTime = (state) => state.benefits.time
export const selectFitness = (state) => state.benefits.fitness;
export const selectHoliday = (state) => state.benefits.holiday;
export const selectLearning = (state) => state.benefits.learning;
export const selectRemoteWorking = (state) => state.benefits.remoteworking

export const { switchHardware, switchTime, switchFitness, switchHoliday, switchLearning, switchRemoteworking } = benefitsSlice.actions;

export default benefitsSlice.reducer