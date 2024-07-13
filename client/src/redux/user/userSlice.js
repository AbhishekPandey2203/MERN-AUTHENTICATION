// create a slice

import { createSlice } from "@reduxjs/toolkit";

//intialstate

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },
    signInFailure: (state, action) => {
      // we get an error
      state.loading = false;
      state.error = action.payload;
    },
    updateUserStart: (state) => {
      state.loading = true;
    },

    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },
    updateUserFailure: (state, action) => {
      // we get an error
      state.loading = false;
      state.error = action.payload;
    },

    deleteUserStart: (state) => {
      state.loading = true;
    },

    deleteUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
    deleteUserFailure: (state, action) => {
      // we get an error
      state.loading = false;
      state.error = action.payload;
    },
    signout: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateUserStart,
  updateUserFailure,
  updateUserSuccess,
  deleteUserFailure,
  deleteUserSuccess,
  deleteUserStart,
  signout,
} = userSlice.actions;

export default userSlice.reducer;
