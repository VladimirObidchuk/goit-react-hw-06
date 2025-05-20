import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "contactsList",
  storage,
  whitelist: ["items"],
};

const persistedContactReducer = persistReducer(persistConfig, contactsReducer);

const localStoreReduser = combineReducers({
  contacts: persistedContactReducer,
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: localStoreReduser,
});
export const persistor = persistStore(store);
