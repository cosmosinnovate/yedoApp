import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { END_POINTS } from "./uri";
import { request } from "./request";
import { storeToken } from "../utils/token";


export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    const response = await request(END_POINTS.LOGIN, 'post', data, false);
    const { data: responseData } = response.data;
    storeToken(responseData.jwToken);
    return responseData;
  } catch (error) {
    console.log(error.response.data.message);
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const register = createAsyncThunk('auth/register', async (data, thunkAPI) => {

  try {
    const response = await request(END_POINTS.REGISTER, 'post', data, false);
    const { data: responseData } = response.data;
    storeToken(responseData.jwToken);
    return responseData;
  } catch (error) {
    console.log(error.response.data.message);
    return thunkAPI.rejectWithValue(error.response.data.message);
  }

});


export const confirmCode = createAsyncThunk('auth/confirmCode', async (otp, thunkAPI) => {
  try {
    const response = await request(END_POINTS.OTP_VERIFY, 'patch', otp);
    const { data: responseData } = response.data;
    storeToken(responseData.jwToken);
    return responseData;
  } catch (error) {
    console.log(error.response.data.message);
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const resendConfirmation = createAsyncThunk('auth/resendConfirmation', async (data) => {
  const response = await request(END_POINTS.OTP_RESEND, 'patch', data);
  return (await response.data).data;
})

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: null,
    error: null,
    success: false,
    loading: false
  },
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
    logout: (state, action) => {
      state.auth = null;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        console.log(action.payload);
        state.auth = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.error = null;
      })
      .addCase(confirmCode.fulfilled, (state, action) => {
        state.auth = action.payload;
        state.error = null;
        state.success = true
        state.loading = false;

      })
      .addCase(login.rejected, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.error = action.payload;

      })
      .addCase(login.fulfilled, (state, action) => {
        state.auth = action.payload;
        state.loading = false;

      })
  }
})

export const { setAuth, logout } = authSlice.actions;

export default authSlice.reducer;