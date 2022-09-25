import { createSlice } from '@reduxjs/toolkit';
import { IInitialState } from '../interface';

const initialState: IInitialState = {
  valueInputSearch: '',
  searchResult: [],
  videoSearchResult: [],
  podcastSearchResult: [],
  searchHistory: [],
};

export const searchPageSlice = createSlice({
  name: 'search-page',
  initialState,
  reducers: {
    getValueInputSearch: (state, action) => {
      state.valueInputSearch = action.payload;
    },
    clearValueInputSearch: state => {
      state.valueInputSearch = '';
    },
    getSearchResult: (state, action) => {
      state.searchResult = action.payload;
      if (state.valueInputSearch === '') state.searchResult = [];
    },
    classifySearchResult: state => {
      state.podcastSearchResult = state?.searchResult?.filter(
        podcast => podcast.media_type === 'audio',
      );
      state.videoSearchResult = state?.searchResult?.filter(
        video => video.media_type === 'video',
      );
    },
    getSearchHistory: (state, action) => {
      state.searchHistory = action.payload;
      state.searchHistory = state?.searchHistory?.slice(0)?.reverse();
    },
    deleteSearchItem: (state, action) => {
      state.searchHistory = state?.searchHistory?.filter(
        item => item?.id !== action.payload,
      );
    },
  },
});

export const {
  actions: {
    getValueInputSearch,
    getSearchResult,
    classifySearchResult,
    getSearchHistory,
    clearValueInputSearch,
    deleteSearchItem,
  },
  reducer,
} = searchPageSlice;
