import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  level: [
    { id: 1, level: 'Beginer', isSelected: false },
    { id: 2, level: 'Intermediate', isSelected: false },
    { id: 3, level: 'Advanced', isSelected: false },
  ],
  topic: [
    { id: 1, topic: 'Business', isSelected: false },
    { id: 2, topic: 'Entertaiment', isSelected: false },
    { id: 3, topic: 'Travel', isSelected: false },
    { id: 4, topic: 'Sport', isSelected: false },
    { id: 5, topic: 'Society', isSelected: false },
    { id: 6, topic: 'Science', isSelected: false },
    { id: 7, topic: 'Education', isSelected: false },
    { id: 8, topic: 'Technology', isSelected: false },
    { id: 9, topic: 'Agricuture', isSelected: false },
  ],
};

const topicSlice = createSlice({
  name: 'topic',
  initialState,
  reducers: {
    selectLevel: (state: any, action: any) => {
      state.level = state.level.map((item: any) => {
        if (item.isSelected) {
          return { ...item, isSelected: false };
        }
        if (item.id === action.payload.id) {
          return { ...item, isSelected: !item.isSelected };
        }
        return item;
      });
    },
    selectTopic: (state: any, action: any) => {
      state.topic = state.topic.map((item: any) => {
        if (item.id === action.payload.id) {
          item.isSelected = !item.isSelected;
        }
        return item;
      });
    },
  },
});

export const { selectLevel, selectTopic } = topicSlice.actions;

const topicReducer = topicSlice.reducer;

export default topicReducer;
