import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    items: [],
  },
  reducers: {
    addNotification: (state, action) => {
      state.items.push({
        id: Date.now().toString(),
        message: action.payload.message,
        type: action.payload.type || 'info',
      });
    },
    removeNotification: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addNotification, removeNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
