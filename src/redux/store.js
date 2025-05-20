import { configureStore } from "@reduxjs/toolkit";
import contacts from "./contactsSlice";
import filtersReducer from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contact: contacts,
    filters: filtersReducer,
  },
});
