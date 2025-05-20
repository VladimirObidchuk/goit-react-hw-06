import { createAction } from "@reduxjs/toolkit";

export const setStatusFilter = createAction("filters/setStatusFilter");

const initialState = {
  filters: {
    name: "",
  },
};

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case "filters/setStatusFilter":
      return {
        ...state,
        filters: {
          state: action.payload,
        },
      };

    default:
      return state;
  }
}
