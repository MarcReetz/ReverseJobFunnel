import { configureStore } from '@reduxjs/toolkit';
import benefitsReducer from '../features/benefitsPage/benefitsSlice'
import submitReducer from '../features/submitPage/submitPageSlice'

export const store = configureStore({
  reducer: {
    benefits: benefitsReducer,
    submit: submitReducer,
  },
});
