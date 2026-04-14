import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import authApiReducer from './authApiSlice';
import cartReducer from './cartSlice';
import counterReducer from './counterSlice';
import notificationReducer from './notificationSlice';
import productsReducer from './productsSlice';
import searchReducer from './searchSlice';
import themeReducer from './themeSlice';
import todoReducer from './todoSlice';
import usersReducer from './usersSlice';

const activityLogger = (storeApi) => (next) => (action) => {
  const result = next(action);
  console.log('[Redux]', action.type, storeApi.getState());

  return result;
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    authApi: authApiReducer,
    cart: cartReducer,
    counter: counterReducer,
    notification: notificationReducer,
    products: productsReducer,
    search: searchReducer,
    theme: themeReducer,
    todos: todoReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(activityLogger),
});