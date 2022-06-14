import { createSlice } from '@reduxjs/toolkit'
import { IInitialState } from '../interfaces'
import { imageHomePage } from '@clvtube/common/constants/imagePath'

const initialState: IInitialState = {
  videoTypeCarousel: [
    {
      id: 1,
      type: 'All',
      isSelected: false,
      backgroundColor: '',
      color: '#3D9BE0',
    },
    {
      id: 2,
      type: 'Friends',
      isSelected: false,
      backgroundColor: '',
      color: '#3D9BE0',
    },
    {
      id: 3,
      type: 'Entertainment',
      isSelected: false,
      backgroundColor: '',
      color: '#3D9BE0',
    },
    {
      id: 4,
      type: 'Music',
      isSelected: false,
      backgroundColor: '',
      color: '#3D9BE0',
    },
    {
      id: 5,
      type: 'Film',
      isSelected: false,
      backgroundColor: '',
      color: '#3D9BE0',
    },
  ],
  videoList: [
    {
      id: 1,
      title: 'Step design sprint for beginner',
      image: imageHomePage.VIDEO_LIST,
      content: '“We’re back on _ _ _ _.',
      suggestion: '“Tạm biệt!”',
    },
    {
      id: 2,
      title: 'Step design sprint for beginner',
      image: imageHomePage.VIDEO_LIST,
      content: '“We’re back on _ _ _ _.',
      suggestion: '“Tạm biệt!”',
    },
    {
      id: 3,
      title: 'Step design sprint for beginner',
      image: imageHomePage.VIDEO_LIST,
      content: '“We’re back on _ _ _ _.',
      suggestion: '“Tạm biệt!”',
    },
  ],
}
export const homePage = createSlice({
  name: 'home-page',
  initialState,
  reducers: {
    selectOnlyOneType: (state, action) => {
      state.videoTypeCarousel = state.videoTypeCarousel.map(item => {
        item.isSelected = item.id === action.payload ? true : false
        item.backgroundColor =
          item.id === action.payload ? '#3D9BE0' : '#FFFFFF'
        item.color = item.id === action.payload ? '#FFFFFF' : '#3D9BE0'
        return item
      })
    },
  },
})
export const {
  actions: { selectOnlyOneType },
  reducer,
} = homePage
