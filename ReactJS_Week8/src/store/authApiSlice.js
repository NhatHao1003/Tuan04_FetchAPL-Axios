import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loginWithAPI = createAsyncThunk(
  'authApi/login',
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
      if (!response.ok) {
        throw new Error('Login failed');
      }
      await response.json();
      const mockToken = `token_${email}_${Date.now()}`;
      return {
        token: mockToken,
        user: {
          email,
          name: email.split('@')[0],
        },
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchProtectedData = createAsyncThunk(
  'authApi/fetchProtectedData',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { token } = getState().authApi;
      if (!token) {
        throw new Error('No token available');
      }

      const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch protected data');
      }

      const data = await response.json();
      return data.slice(0, 3);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authApiSlice = createSlice({
  name: 'authApi',
  initialState: {
    token: localStorage.getItem('authToken') || null,
    user: null,
    loading: false,
    error: null,
    protectedData: [],
    dataLoading: false,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.protectedData = [];
      localStorage.removeItem('authToken');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginWithAPI.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginWithAPI.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.error = null;
        localStorage.setItem('authToken', action.payload.token);
      })
      .addCase(loginWithAPI.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.token = null;
        state.user = null;
      })
      .addCase(fetchProtectedData.pending, (state) => {
        state.dataLoading = true;
        state.error = null;
      })
      .addCase(fetchProtectedData.fulfilled, (state, action) => {
        state.dataLoading = false;
        state.protectedData = action.payload;
        state.error = null;
      })
      .addCase(fetchProtectedData.rejected, (state, action) => {
        state.dataLoading = false;
        state.error = action.payload;
        state.protectedData = [];
      });
  },
});

export const { logout } = authApiSlice.actions;
export default authApiSlice.reducer;
