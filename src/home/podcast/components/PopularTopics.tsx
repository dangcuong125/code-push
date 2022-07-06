import { PopularTopics } from '@clvtube/common/components/trendingTopic/index';
import { imagePodcast } from '@clvtube/common/constants/imagePath';
import { Box, Flex, Heading } from 'native-base';
import React from 'react';
import { PodcastListProps } from '../interfaces';
import { PODCAST_LIST_WITH_TOPIC } from '@clvtube/common/constants/route.constants';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { receiveTopicKeySelected } from '../reducer/podcastList';

const PopularTopicsPodcast = ({ navigation }: PodcastListProps) => {
  const dispatch = useAppDispatch();
  return (
    <Box marginTop="24px" paddingBottom={'15px'}>
      <Box margin="16px">
        <Heading color={'#222B45'}>Chủ đề phổ biến</Heading>
        <Flex
          direction="row"
          justifyContent="space-around"
          marginTop="12px"
          bgColor="#FFFFFF">
          <PopularTopics
            onPress={() => {
              dispatch(receiveTopicKeySelected('string'));
              navigation.navigate('Home', {
                screen: 'Podcast',
                params: { screen: PODCAST_LIST_WITH_TOPIC },
              });
            }}
            contentTopic="Mathematics"
            imageSrc={imagePodcast.MATH_PODCAST}
          />
          <PopularTopics
            contentTopic="Physics"
            imageSrc={imagePodcast.MATH_PODCAST}
          />
        </Flex>
        <Flex direction="row" justifyContent="space-around" marginTop="20px">
          <PopularTopics
            contentTopic="Chemistry"
            imageSrc={imagePodcast.MATH_PODCAST}
          />
          <PopularTopics
            contentTopic="Biology"
            imageSrc={imagePodcast.MATH_PODCAST}
          />
        </Flex>
      </Box>
    </Box>
  );
};
export default PopularTopicsPodcast;
