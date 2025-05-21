import { createSlice } from "@reduxjs/toolkit";

const filtersContactsReduser = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersContactsReduser.actions;
export default filtersContactsReduser.reducer;
