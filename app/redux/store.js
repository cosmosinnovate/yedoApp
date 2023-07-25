import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import tasksReducers from './tasksReducers';
import userReducer from './userReducer';

// Automatically adds thunk middleware and the redux DevTools extension
const store = configureStore({
  // Automatically calls `combineReducer
  reducer: {
    auth: authSlice,
    user: userReducer,
    tasks: tasksReducers,
    // members: membersReducer,
    // notifications: notificationsReducer,
  }
})
export { store }
