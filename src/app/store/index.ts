import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { AuthSliceReducer } from "./slices/auth.slice";
import { AuthAPI } from "@/api/auth/auth.api";

const rootReducer = combineReducers({
  AuthSliceReducer,
  [AuthAPI.reducerPath]: AuthAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthAPI.middleware),
});

export type TypedRootState = ReturnType<typeof store.getState>;
