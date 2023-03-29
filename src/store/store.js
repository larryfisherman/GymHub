import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import recipesSlice from "./recepiesSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  user: userReducer,
  recipes: recipesSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export { store };
