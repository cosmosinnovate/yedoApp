import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { END_POINTS } from "./uri";
import { request } from "./request";
import {removeToken} from './token';

export const getUser = createAsyncThunk('user/getUser', async (id) => {
  const response = await request(`${END_POINTS.USERS}/${id}`, 'get');
  return (await response.data).data;
})

export const deleteUserAccount = createAsyncThunk('user/deleteUserAccount', async (id) => {
  const response = await request(`${END_POINTS.USERS}/${id}`, 'delete');
  return (await response.data).data;
})

export const updateUser = createAsyncThunk('user/updateUser', async ({data, id}) => {
  const response = await request(`${END_POINTS.USERS}/${id}`, 'patch', data);
  return (await response.data).data;
})

export const markUserForDeletion = createAsyncThunk('user/deleteUser', async (id) => {
  const response = await request(`${END_POINTS.USERS}/${id}`, 'delete');
  return (await response.data).data;
})

// Slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUser.pending, state => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(getUser.rejected, state => {
        state.loading = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(deleteUserAccount.rejected, state => {
        state.loading = false;
      })
      .addCase(deleteUserAccount.fulfilled, (state, action) => {
        state.user = null
        state.loading = false;
      })
  }
})

export default userSlice.reducer;
