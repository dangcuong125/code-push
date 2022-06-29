import { PopularTopics } from '@clvtube/common/components/popular-topic/index';
import { imagePodcast } from '@clvtube/common/constants/imagePath';
import { HStack, Heading, VStack } from 'native-base';
import React from 'react';

const PopularVideo = () => {
  return (
    <VStack safeArea={4} space={3}>
      <Heading
        fontStyle={'normal'}
        fontSize={'18px'}
        fontWeight={500}
        lineHeight={'25px'}
        color={'#000000'}
      >
        Chủ đề phổ biến
      </Heading>
      <VStack flexWrap={'wrap'} space={4}>
        <HStack justifyContent={'space-around'}>
          <PopularTopics contentTopic="Chemistry" imageSrc={imagePodcast.MATH_PODCAST} />
          <PopularTopics contentTopic="Chemistry" imageSrc={imagePodcast.MATH_PODCAST} />
        </HStack>
        <HStack justifyContent={'space-around'}>
          <PopularTopics contentTopic="Chemistry" imageSrc={imagePodcast.MATH_PODCAST} />
          <PopularTopics contentTopic="Chemistry" imageSrc={imagePodcast.MATH_PODCAST} />
        </HStack>
      </VStack>
    </VStack>
  );
};
export default PopularVideo;
