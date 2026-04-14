import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const searchPosts = createAsyncThunk(
  'search/searchPosts',
  async (query, { rejectWithValue }) => {
    if (!query || query.trim() === '') {
      return [];
    }

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?q=${encodeURIComponent(query)}`
      );
      if (!response.ok) {
        throw new Error('Failed to search');
      }
      const data = await response.json();
      return data.slice(0, 5);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: '',
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
        state.error = null;
      })
      .addCase(searchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.results = [];
      });
  },
});

export const { setSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;
