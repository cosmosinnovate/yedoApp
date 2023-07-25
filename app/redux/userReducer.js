import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: 'uninitialized',
  user: {},
  error: null
}

const userReducer = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    updateProfile(state, action) {
      state.user = action.payload;
    }
  }
})


export const { updateProfile } = userReducer.actions;

export default userReducer.reducer;