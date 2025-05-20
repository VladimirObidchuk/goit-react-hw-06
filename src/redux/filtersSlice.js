import { createSlice } from "@reduxjs/toolkit";

const filtersContactsReduser = createSlice({
  name: "filtersContacts",
  initialState: {
    filters: {
      name: "",
    },
  },
  reducers: {
    changeFilter: (state, action) => {
      //   return {
      //     ...state,
      //     filters: {
      //       state: action.payload,
      //     },
      //   };
      state.filters.name === action.payload;
    },
  },
});

export const { changeFilter } = filtersContactsReduser.actions;
export default filtersContactsReduser.reducer;
