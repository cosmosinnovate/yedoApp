import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { END_POINTS } from "./uri";
import { request } from "./request"

export const register = createAsyncThunk('auth/register', async (data) => {
  const response = await request(END_POINTS.REGISTER, 'post', data, false);
  const token = (await response.data).data.jwToken;
  await storeToken(token);
  return (await response.data).data;
})


export const login = createAsyncThunk('auth/login', async (data) => {
  const response = await request(END_POINTS.LOGIN, 'post', data, false);
  const token = (await response.data).data.jwToken;
  await storeToken(token);
  return (await response.data).data;
})

export const confirmCode = createAsyncThunk('auth/confirmCode', async (data) => {
  const response = await request(END_POINTS.OTP_VERIFY, 'patch', otp);
  const token = (await response.data).data.jwToken;
  await storeToken(token);
  return (await response.data).data;
})

export const resendConfirmation = createAsyncThunk('auth/resendConfirmation', async (data) => {
  const response = await request(END_POINTS.OTP_RESEND, 'patch', data);
  return (await response.data).data;
})

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: {},
    error: null,
    loading: false
  },
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
    logout: (state, action) => {
      state.auth = {};
    }
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.auth = action.payload;
        state.loading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(confirmCode.fulfilled, (state, action) => {
        state.auth = action.payload;
        state.loading = false;

      })
      .addCase(login.rejected, (state, action) => {
        state.auth = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.auth = action.payload;
        state.loading = false;

      })
  }
})

export const { setAuth, logout } = authSlice.actions;

export default authSlice.reducer;