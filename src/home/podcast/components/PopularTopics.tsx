import { PopularTopics } from '@clvtube/common/components/trendingTopic/index';
import { imagePodcast } from '@clvtube/common/constants/imagePath';
import {
  PODCAST_LIST_WITH_TOPIC,
  TAB_BOTTOM,
} from '@clvtube/common/constants/route.constants';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { useGetPopularTopics } from '@clvtube/common/hooks/useGetPopularTopics';
import { Box, Flex, Heading } from 'native-base';
import React from 'react';
import { IPopularTopics, PodcastListProps } from '../interfaces';
import { receiveTopicKeySelected } from '../reducer/podcastList';
// import { useTranslation } from 'react-i18next';

const PopularTopicsPodcast = ({ navigation }: PodcastListProps) => {
  const dispatch = useAppDispatch();
  const { data } = useGetPopularTopics('vi', 1, 4);
  const popularTopics = data?.data;
  return (
    <Box marginTop="24px" paddingBottom={'15px'}>
      <Box margin="16px">
        <Heading color={'#222B45'}>Chủ đề phổ biến</Heading>
        <Flex
          direction="row"
          flexWrap="wrap"
          justifyContent="space-between"
          marginTop="12px"
          bgColor="#FFFFFF">
          {popularTopics?.map((topic: IPopularTopics) => (
            <>
              <PopularTopics
                onPress={() => {
                  dispatch(receiveTopicKeySelected(topic?.topic_key));
                  navigation.navigate(TAB_BOTTOM, {
                    screen: 'Podcast',
                    params: { screen: PODCAST_LIST_WITH_TOPIC },
                  });
                }}
                marginTop="20px"
                contentTopic={topic?.name || 'hello world'}
                imageSrc={topic?.image_id || imagePodcast.MATH_PODCAST}
              />
            </>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};
export default PopularTopicsPodcast;
