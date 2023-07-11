import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import exercisesSlice from "./exercisesSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  user: userReducer,
  exercises: exercisesSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export { store };
