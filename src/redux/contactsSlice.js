import { createSlice } from "@reduxjs/toolkit";

const contacts = createSlice({
  name: "contacts",
  initialState: {
    contacts: {
      items: [],
    },
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});
export const { addContact, deleteContact } = contacts.actions;
export default contacts.reducer;
