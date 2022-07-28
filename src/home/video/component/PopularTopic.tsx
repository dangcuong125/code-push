import { PopularTopics } from '@clvtube/common/components/trendingTopic/index';
import { imagePodcast } from '@clvtube/common/constants/imagePath';
import { HStack, Heading, VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { VIDEO_ROUTE } from '../../../common/constants/route.constants';
import { useGetPopularTopics } from '@clvtube/common/hooks/useGetPopularTopics';

const PopularTopic = () => {
  const navigation = useNavigation();
  const { data: DataPopularTopic } = useGetPopularTopics('en', 1, 4);

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
          {
            DataPopularTopic?.data.map((item, index) => {
              if (index === 0 || index === 1) {
                return (
                  <PopularTopics
                    item={item}
                    contentTopic={item.topic_key}
                    imageSrc={imagePodcast.MATH_PODCAST}
                    onPress={(item: any) => {
                      navigation.navigate(VIDEO_ROUTE.VIDEO_LIST, { item });
                    }}
                  />
                );
              }
              return null;
            })
          }
        </HStack>
        <HStack justifyContent={'space-around'}>
        {
            DataPopularTopic?.data.map((item, index) => {
              if (index === 2 || index === 3) {
                return (
                  <PopularTopics
                    item={item}
                    contentTopic={item.topic_key}
                    imageSrc={imagePodcast.MATH_PODCAST}
                    onPress={(item: any) => {
                      navigation.navigate(VIDEO_ROUTE.VIDEO_LIST, { item });
                    }}
                  />
                );
              }
              return null;
            })
          }
        </HStack>
      </VStack>
    </VStack>
  );
};
export default PopularTopic;
