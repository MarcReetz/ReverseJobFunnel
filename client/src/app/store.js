import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import benefitsReducer from '../features/benefitsPage/benefitsSlice'
import submitReducer from '../features/submitPage/submitPageSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    benefits: benefitsReducer,
    submit: submitReducer,
  },
});
