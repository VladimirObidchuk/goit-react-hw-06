import { createSlice } from "@reduxjs/toolkit";

const contacts = createSlice({
  name: "contacts",
  initialState: {
    contacts: {
      items: [],
    },
  },
  redusers: {
    addContact: (state, action) => {
      //   return {
      //     ...state,
      //     contacts: [...state.contacts.items, action.payload],
      //   };
      state.contacts.items.push(action.payload);
    },

    deleteContact: (state, action) => {
      //   return {
      //     ...state,
      //     contacts: state.contacts.itemsfilter(
      //       (task) => task.id !== action.payload
      //     ),
      //   };
      state.contacts.items = state.contacts.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});
export const { addContact, deleteContact } = contacts.actions;
export default contacts.reducer;
