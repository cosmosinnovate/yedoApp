import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import tasksSlice from './tasksSlice';
import userSlice from './userSlice';

// Automatically adds thunk middleware and the redux DevTools extension
const store = configureStore({
  // Automatically calls `combineReducer
  reducer: {
    auth: authSlice,
    user: userSlice,
    tasks: tasksSlice,
    // members: membersReducer,
    // notifications: notificationsReducer,
  }
})
export { store }
