import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { END_POINTS } from "./uri";
import { request } from "./request";

const ITEMS_PER_PAGE = 10;

// Async thunks
export const getTasks = createAsyncThunk('tasks/getTasks', async ({ status }) => {
  console.log('Status: ', status)
  /*
    TODO: Uncomment this when the API is ready: `${END_POINTS.TASKS}?status=${status}&page=${page}&limit=${limit}&category=${category}`;
  */
  const url = `${END_POINTS.TASKS}?status=${status}&page=${1}&limit=${ITEMS_PER_PAGE}`
  const response = await request(url, "get");
  console.log((await response.data).data.length)
  return (await response.data).data;
});

export const taskCompleted = createAsyncThunk('tasks/taskCompleted', async ({id, status}) =>{
  const response = await request(`${END_POINTS.TASKS}/${id}`, "put", { status: status });
  console.log((await response.data).data);
  return (await response.data).data;
});

export const addTask = createAsyncThunk('tasks/addUser', async (task) => {
  const response = await request(END_POINTS.TASKS, "post", task);
  return (await response.data).data;
});

export const removeTask = createAsyncThunk('tasks/removeTask', async (id) => {
  const response = await request(`${END_POINTS.TASKS}/${id}`, "delete");
  console.log((await response.data).data);
  return (await response.data).data;
});

export const getTask = createAsyncThunk('tasks/getTask', async (id) => {
  const response = await request(`${END_POINTS.TASKS}/${id}`, "get");
  return (await response.data).data;
});

// Slice
const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    loading: false
  },
  reducers: {
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
      })
      .addCase(addTask.rejected, (state, action) => {
        state.loading = false;
      })
  }
})

export const { addTaskFulfilled } = tasksSlice.actions;
export default tasksSlice.reducer;;
