// understand about the functionality of redux toolkit->
//Generally redux we use at frontend site

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";

import { persistReducer, persistStore } from "redux-persist";

//the storage package help to save our data on localstorage of browser

import storage from "redux-persist/lib/storage";

// using of redux-persist : redux-persist
// is a package help to keep the user login even if the user referesh the page after signin

const rootReducer = combineReducers({ user: userReducer });

const persistConfig = {
  key: "root", //name of the data save inside local storage
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
