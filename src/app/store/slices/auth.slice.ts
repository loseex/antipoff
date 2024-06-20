import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  state: {
    username: "",
    email: "",
    password: "",
  },
  confirm: {
    password_confirm: "",
  },
  params: {
    show_password: false,
  },
};

export const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    setAuthUsername: (state, action) => {
      state.state.username = action.payload;
    },
    setAuthEmail: (state, action) => {
      state.state.email = action.payload;
    },
    setAuthPassword: (state, action) => {
      state.state.password = action.payload;
    },
    setAuthPasswordConfirm: (state, action) => {
      state.confirm.password_confirm = action.payload;
    },
    updShowPasswordParams: (state, action) => {
      console.log(action.payload);
      state.params.show_password = action.payload;
    },
  },
});

export const AuthSliceReducer = AuthSlice.reducer;
export const AuthSliceActions = AuthSlice.actions;
