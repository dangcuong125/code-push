import { createSlice } from '@reduxjs/toolkit';
import { IAllTopics, IInitialState } from '../interfaces';
import { imagePodcast } from '@clvtube/common/constants/imagePath';

const initialState: IInitialState = {
  podcastTopics: [],
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
};

export const podcastList = createSlice({
  name: 'podcast-list',
  initialState,
  reducers: {
    receiveTopicPodcast: (state, action) => {
      state.podcastTopics = action.payload;
    },
    handleClickPodcastTopics: (state, action) => {
      state.podcastTopics = state?.podcastTopics?.map((item: IAllTopics) => {
        const isSelected = item.key === action.payload;
        item.isSelected = !isSelected;
        item.bgColor = isSelected ? '#3D9BE0' : '#FFFFFF';
        item.color = isSelected ? '#FFFFFF' : '#3D9BE0';
        return item;
      });
    },
  },
});
export const {
  actions: { handleClickPodcastTopics, receiveTopicPodcast },
  reducer,
} = podcastList;
