import { createSlice } from '@reduxjs/toolkit';
import { IInitialState } from '../interface';

const initialState: IInitialState = {
  valueInputSearch: '',
  searchResult: [],
  videoSearchResult: [],
  podcastSearchResult: [],
};

export const searchPageSlice = createSlice({
  name: 'search-page',
  initialState,
  reducers: {
    getValueInputSearch: (state, action) => {
      state.valueInputSearch = action.payload;
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
  },
});

export const {
  actions: { getValueInputSearch, getSearchResult, classifySearchResult },
  reducer,
} = searchPageSlice;
