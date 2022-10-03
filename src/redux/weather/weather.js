import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Actions
const ACTION = 'wedrop/weather/ACTIONS';

// Initial State
const initialState = {
  weather: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  message: 'weather',
};

// Thunks
export const asyncThunk = createAsyncThunk(ACTION, async () => 'weather');

// Reducer
const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncThunk.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(asyncThunk.fulfilled, (state, action) => ({
        ...state,
        weather: action.payload,
        status: 'succeeded',
      }))
      .addCase(asyncThunk.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.payload,
      }));
  },
});

export const allWeather = (state) => state.weather.weather;
export const allStatus = (state) => state.weather.status;
export const allMessages = (state) => state.weather.message;

export default weatherSlice.reducer;
