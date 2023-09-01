import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { END_POINTS } from "./uri";
import { request } from "./request";
import { storeToken } from "./token";

const result = (response) => {
  const { data: responseData } = response.data;
  storeToken(responseData.jwToken);
  return responseData;
}

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    const response = await request(END_POINTS.LOGIN, 'post', data, false);
    return result(response);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const register = createAsyncThunk('auth/register', async (data, thunkAPI) => {
  try {
    const response = await request(END_POINTS.REGISTER, 'post', data, false);
    return result(response);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});


export const confirmCode = createAsyncThunk('auth/confirmCode', async (otp, thunkAPI) => {
  try {
    const response = await request(END_POINTS.OTP_VERIFY, 'patch', { otp });
    return result(response);
  } catch (error) {
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
    },
    resetError: (state, action) => {
      state.error = null;
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
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
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
      .addCase(confirmCode.rejected, (state, action) => {
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

export const { setAuth, logout, resetError } = authSlice.actions;

export default authSlice.reducer;
