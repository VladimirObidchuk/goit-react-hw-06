import { configureStore } from "@reduxjs/toolkit";
import createSlice from "./contactsSlice";
import filtersReducer from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contact: createSlice,
    filters: filtersReducer,
  },
});
