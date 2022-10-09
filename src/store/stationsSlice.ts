import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { AppState } from './store';
import { stationsApi } from '@/api/stationsApi';

export interface StationProps {
  id: string;
  name: string;
  description: string;
  imgUrl: string;
  streamUrl: string;
  reliability: number;
  popularity: number;
  tags: string[];
}

export interface StationsState {
  baseStationsList: StationProps[];
  stationsList: StationProps[];
  suggestStationsList: StationProps[];
  station: StationProps;
  tagsList: string[];
  totalElements: number;
  isLoading: boolean;
}

const initialState: StationsState = {
  baseStationsList: [],
  stationsList: [],
  suggestStationsList: [],
  station: null,
  tagsList: [],
  totalElements: 0,
  isLoading: true,
};

const SLICE_NAME = 'stations';

export const getAllStations = createAsyncThunk(
  `${SLICE_NAME}/getAllStations`,
  async () => {
    try {
      const response = await stationsApi.getAllStations();

      return response.data;
    } catch (err) {
      throw err;
    }
  },
);

export const stationsSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    getStationById(state, action) {
      state.station = state.stationsList.find(
        ({ id }) => id === action.payload,
      );
    },
    getStationsByTag(state, action) {
      if (action.payload === null) {
        state.stationsList = state.baseStationsList;
        state.totalElements = state.baseStationsList.length;

        return;
      }

      if (action.payload) {
        const newStations = state.stationsList.filter(({ tags }) =>
          tags.includes(action.payload),
        );

        state.stationsList = newStations;
        state.totalElements = newStations.length;
      }
    },
    getSuggestStationsByTags(state, action) {
      const { tags = [], id } = action.payload;

      if (tags.length > 0) {
        state.suggestStationsList = state.stationsList.filter(
          (station) =>
            tags?.some((tag) => station.tags.includes(tag)) &&
            station.id !== id,
        );

        return;
      }

      state.suggestStationsList = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // TODO need to fix [any] type
      .addCase(HYDRATE, (state, action: any) => {
        const { stationsList, totalElements, tagsList, station } =
          action.payload[SLICE_NAME];

        state.stationsList = stationsList;
        state.totalElements = totalElements;
        state.tagsList = tagsList;
        state.station = station;
      })
      .addCase(getAllStations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllStations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.baseStationsList = action.payload;
        state.stationsList = action.payload;
        state.totalElements = action.payload.length;
        state.tagsList = Array.from(
          new Set(action.payload.flatMap(({ tags }) => tags)),
        );
      })
      .addCase(getAllStations.rejected, (state) => {
        state.isLoading = false;
        state.totalElements = 0;
      });
  },
});

export const { getStationById, getStationsByTag, getSuggestStationsByTags } =
  stationsSlice.actions;

export const stationsState = (state: AppState) => state.stations;

export default stationsSlice.reducer;
