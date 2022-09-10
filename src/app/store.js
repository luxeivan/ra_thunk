import { configureStore } from '@reduxjs/toolkit';
import  factReducer from '../components/StarWars/factSlice';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    facts: factReducer
  },
});
