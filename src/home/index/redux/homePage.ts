import { createSlice } from '@reduxjs/toolkit'
import { IInitialState } from '../interfaces'
import { VIDEO_LIST, VIDEO_TYPE_CAROUSEL } from '@clvtube/mocks/homePage'

const initialState: IInitialState = {
  videoTypeCarousel: VIDEO_TYPE_CAROUSEL,
  videoList: VIDEO_LIST,
}
export const homePage = createSlice({
  name: 'home-page',
  initialState,
  reducers: {
    selectOnlyOneType: (state, action) => {
      state.videoTypeCarousel = state.videoTypeCarousel.map(item => {
        const isSelected = item.id === action.payload
        item.isSelected = !!isSelected
        item.backgroundColor = isSelected ? '#3D9BE0' : '#FFFFFF'
        item.color = isSelected ? '#FFFFFF' : '#3D9BE0'
        return item
      })
    },
  },
})
export const {
  actions: { selectOnlyOneType },
  reducer,
} = homePage
