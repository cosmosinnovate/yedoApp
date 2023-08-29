import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { END_POINTS } from "./uri";
import { request } from "./request";

const ITEMS_PER_PAGE = 10;

// Async thunks
export const getTasks = createAsyncThunk('tasks/getTasks', async ({ status }, thunkAPI) => {
  /*
    TODO: Uncomment this when the API is ready: `${END_POINTS.TASKS}?status=${status}&page=${page}&limit=${limit}&category=${category}`;
  */
  try {
    const url = `${END_POINTS.TASKS}?status=${status}&page=${1}&limit=${ITEMS_PER_PAGE}`
    const response = await request(url, "get");
    const { data: responseData } = response.data;
    return responseData;

  } catch (error) {
    console.log(error.response.data.message);
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const taskCompleted = createAsyncThunk('tasks/taskCompleted', async ({ id, status }, thunkAPI) => {
  try {
    const response = await request(`${END_POINTS.TASKS}/${id}`, "put", { status: status });
    return (await response.data).data;
  } catch (error) {
    console.log(error.response.data.message);
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const addTask = createAsyncThunk('tasks/addUser', async (task, thunkAPI) => {
  try {
    const response = await request(END_POINTS.TASKS, "post", task);
    const { data: responseData } = response.data;
    return responseData;
  }
  catch (error) {
    console.log(error.response.data.message);
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const removeTask = createAsyncThunk('tasks/removeTask', async (id, thunkAPI) => {
  try {
    const response = await request(`${END_POINTS.TASKS}/${id}`, "delete");
    const { data: responseData } = response.data;
    return responseData;
  }
  catch (error) {
    console.log(error.response.data.message);
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const getTask = createAsyncThunk('tasks/getTask', async (id, thunkAPI) => {
  try {
    const response = await request(`${END_POINTS.TASKS}/${id}`, "get");
    const { data: responseData } = response.data;
    return responseData;
  }
  catch (error) {
    console.log(error.response.data.message);
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

// Slice
const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    resetError: (state, action) => {
      state.error = null;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getTasks.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.loading = false;
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(removeTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(task => task._id !== action.payload._id);
        state.loading = false;
      })
      .addCase(taskCompleted.fulfilled, (state, action) => {
        console.log(action.payload.status);
        state.tasks = state.tasks.filter(task => !(task._id === action.payload._id && task.status === true));
        state.loading = false;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks = [...state.tasks, action.payload]
        state.loading = false;
        state.success = true
      })
      .addCase(addTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  }
})

export const { addTaskFulfilled, resetError } = tasksSlice.actions;
export default tasksSlice.reducer;;
