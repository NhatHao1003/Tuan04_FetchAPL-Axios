import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push({
        id: Date.now().toString(),
        text: action.payload,
      });
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.items.find((item) => item.id === id);
      if (todo) {
        todo.text = text;
      }
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
