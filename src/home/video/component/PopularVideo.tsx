import { PopularTopics } from '@clvtube/common/components/trendingTopic/index';
import { imagePodcast } from '@clvtube/common/constants/imagePath';
import { HStack, Heading, VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { VIDEO_ROUTE } from '../../../common/constants/route.constants';

const PopularVideo = () => {
  const navigator = useNavigation();
  return (
    <VStack safeArea={4} space={3}>
      <Heading
        fontStyle={'normal'}
        fontSize={'18px'}
        fontWeight={500}
        lineHeight={'25px'}
        color={'#000000'}>
        Chủ đề phổ biến
      </Heading>
      <VStack flexWrap={'wrap'} space={4}>
        <HStack justifyContent={'space-around'}>
          <PopularTopics
            contentTopic="Chemistry"
            imageSrc={imagePodcast.MATH_PODCAST}
            onPress={() => navigator.navigate(VIDEO_ROUTE.VIDEO_LIST, {})}
          />
          <PopularTopics
            contentTopic="Chemistry"
            imageSrc={imagePodcast.MATH_PODCAST}
          />
        </HStack>
        <HStack justifyContent={'space-around'}>
          <PopularTopics
            contentTopic="Chemistry"
            imageSrc={imagePodcast.MATH_PODCAST}
          />
          <PopularTopics
            contentTopic="Chemistry"
            imageSrc={imagePodcast.MATH_PODCAST}
          />
        </HStack>
      </VStack>
    </VStack>
  );
};
export default PopularVideo;
