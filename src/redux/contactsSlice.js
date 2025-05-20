import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contact/addContact");
export const deleteContact = createAction("contact/deleteContact");

const initialState = {
  contacts: {
    items: [],
  },
};

export default function createSlice(state = initialState, action) {
  switch (action.type) {
    case "contact / addContact":
      return {
        ...state,
        contacts: [...state.contacts.items, action.payload],
      };
    case "contact/deleteContact":
      return {
        ...state,
        contacts: state.contacts.itemsfilter(
          (task) => task.id !== action.payload
        ),
      };

    default:
      return state;
  }
}
