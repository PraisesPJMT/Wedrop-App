import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/api';

// Actions
const GET_WEATHER = 'wedrop/weather/GET_WEATHER';

// Initial State
const initialState = {
  weatherData: {},
  cities: api.getCities(),
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  message: 'weather',
};

// Thunks
export const getWeather = createAsyncThunk(GET_WEATHER, async (cityName) => {
  try {
    return await api.fetchWeather(cityName);
  } catch (error) {
    return error.message;
  }
});

// Reducer
const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getWeather.fulfilled, (state, action) => ({
        ...state,
        weatherData: action.payload,
        status: 'succeeded',
      }))
      .addCase(getWeather.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.payload,
      }));
  },
});

export const allWeather = (state) => state.weatherData;
export const allCities = (state) => state.cities;
export const allStatus = (state) => state.status;
export const allMessages = (state) => state.message;

export default weatherSlice.reducer;
