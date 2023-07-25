import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: 'uninitialized',
  auth: {},
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register(state, action) {
      state.auth = action.payload;
    },
    confirmAccount(state, action) {
      state.auth = action.payload;
    },
    login(state, action) {
      state.auth = action.payload;
    },
    logout(state, action) {
      state.auth = {}
    },
  }
})


export const { register, login, confirmAccount, logout } = authSlice.actions;

export default authSlice.reducer;