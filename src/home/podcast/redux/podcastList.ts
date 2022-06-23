import { createSlice } from '@reduxjs/toolkit'
import { IInitialState } from '../interfaces'
import { imagePodcast } from '@clvtube/common/constants/imagePath'

const initialState: IInitialState = {
  podcastTypes: [
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
  podcastOutstanding: [
    {
      title: 'hello world123',
      content: 'lorem ipsum dolor sit amet',
      image: imagePodcast.PODCAST_OUTSTANDING,
    },
    {
      title: 'hello world',
      content: 'lorem ipsum dolor sit amet',
      image: imagePodcast.PODCAST_OUTSTANDING,
    },
    {
      title: 'hello world456',
      content: 'lorem ipsum dolor sit amet',
      image: imagePodcast.PODCAST_OUTSTANDING,
    },
  ],
  podcastPopular: [
    {
      id: 1,
      image: imagePodcast.PODCAST_POPULAR,
      title: 'Lorem Ipsum is simply dummy dummy text',
    },
    {
      id: 2,
      image: imagePodcast.PODCAST_POPULAR,
      title: 'Lorem Ipsum is simply dummy dummy text',
    },
    {
      id: 3,
      image: imagePodcast.PODCAST_POPULAR,
      title: 'Lorem Ipsum is simply dummy dummy text',
    },
  ],
}

export const podcastList = createSlice({
  name: 'podcast-list',
  initialState,
  reducers: {
    handleClickPodcastList: (state, action) => {
      state.podcastTypes = state.podcastTypes.map(podcastType => {
        podcastType.isSelected = podcastType.id === action.payload
        podcastType.backgroundColor =
          podcastType.id === action.payload ? '#3D9BE0' : '#FFFFFF'
        podcastType.color =
          podcastType.id === action.payload ? '#FFFFFF' : '#3D9BE0'
        return podcastType
      })
    },
  },
})
export const {
  actions: { handleClickPodcastList },
  reducer,
} = podcastList
