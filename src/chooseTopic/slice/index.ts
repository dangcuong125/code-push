import { createSlice } from '@reduxjs/toolkit';
import { IInitialStateLevelTopic } from '../interfaces/interfaces';

const initialState: IInitialStateLevelTopic = {
  level: [],
  topic: [],
  pickingTopic: 'All',
};

const topicSlice = createSlice({
  name: 'topic',
  initialState,
  reducers: {
    updateDataLevel: (state: IInitialStateLevelTopic, action: any) => {
      state.level = action.payload;
    },
    selectLevel: (state: IInitialStateLevelTopic, action: any) => {
      state.level = state.level.map((item: any) => {
        if (item.enabled === 1) {
          return { ...item, enabled: -1 };
        }
        if (item.key === action.payload.key) {
          return { ...item, enabled: 1 };
        }
        return item;
      });
    },
    updateDataTopic: (state: IInitialStateLevelTopic, action: any) => {
      state.topic = action.payload;
    },
    selectTopic: (state: IInitialStateLevelTopic, action: any) => {
      state.topic = state.topic.map((item: any) => {
        if (item.key === action.payload.key && item.enabled === 1) {
          return { ...item, enabled: -1 };
        } else if (item.key === action.payload.key && item.enabled === -1) {
          return { ...item, enabled: 1 };
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
