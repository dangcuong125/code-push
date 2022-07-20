import { createSlice } from '@reduxjs/toolkit';
import {
  IDataLevelOrTopic,
  IInitialStateLevelTopic,
} from '../interfaces/interfaces';

const initialState: IInitialStateLevelTopic = {
  level: [],
  topic: [],
  pickingTopic: 'All',
};

const topicSlice = createSlice({
  name: 'levelTopic',
  initialState,
  reducers: {
    updateDataLevel: (state: IInitialStateLevelTopic, action: any) => {
      state.level = action.payload?.map((item: IDataLevelOrTopic) => {
        return { ...item, isSelected: false };
      });
    },
    selectLevel: (state: IInitialStateLevelTopic, action: any) => {
      state.level = state.level.map((item: any) => {
        if (item.isSelected) {
          return { ...item, isSelected: false };
        }
        if (item.key === action.payload.key) {
          return { ...item, isSelected: true };
        }
        return item;
      });
    },

    updateDataTopic: (state: IInitialStateLevelTopic, action: any) => {
      state.topic = action.payload?.map((item: IDataLevelOrTopic) => {
        return { ...item, isSelected: false };
      });
    },
    selectTopic: (state: IInitialStateLevelTopic, action: any) => {
      state.topic = state.topic.map((item: any) => {
        if (item.key === action.payload.key && item.isSelected) {
          return { ...item, isSelected: false };
        } else if (item.key === action.payload.key && !item.isSelected) {
          return { ...item, isSelected: true };
        }
        return item;
      });
    },
    updateKeyPickingTopic: (state: IInitialStateLevelTopic, action: any) => {
      state.topic = state.topic.map(item => {
        if (item.key === action.payload.key && item.enabled === 1) {
          return item;
        }
        if (item.key === action.payload.key && item.enabled === -1) {
          return { ...item, enabled: 1 };
        }
        return item;
      });
      const filterTopicKey = state.topic.find(item => {
        return item.key === action.payload.key;
      });
      if (filterTopicKey) {
        state.pickingTopic = filterTopicKey.slug;
      }
    },
  },
});

export const {
  actions: {
    updateDataLevel,
    selectLevel,
    updateDataTopic,
    selectTopic,
    updateKeyPickingTopic,
  },
  reducer,
} = topicSlice;
