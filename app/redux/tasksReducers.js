import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: 'uninitialized',
  task: {},
  tasks: [],
  error: null
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks = action.payload;
      // Do something
    },
    removeTasks(state, action) {
      state.tasks = action.payload;

    },
    updateTasks(state, action) {
      state.tasks = action.payload;

    },
    retrieveTasks(state, action) {
      state.tasks = action.payload
    },
  }
})


export const { addTask, removeTasks, updateTasks, retrieveTasks } = tasksSlice.actions;

export default tasksSlice.reducer;