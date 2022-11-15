import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import benefitsReducer from '../features/benefitsPage/benefitsSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    benefits: benefitsReducer,
  },
});
