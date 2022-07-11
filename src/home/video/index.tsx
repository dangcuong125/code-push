import { ScrollView, VStack } from 'native-base';
import React from 'react';

import SearchHeader from '@clvtube/common/components/searchHeader/index';
import ListVideo from './component/ListVideo';
import PopularVideo from './component/PopularVideo';
import VideoPupolar from './component/VideoPupolar';
import MaybeYouLikeVideo from './component/MaybeYouLikeVideo';

const VideoList = () => {
  return (
    <ScrollView>
      <VStack space={4}>
        <VStack safeAreaTop={10} bgColor={'white'}>
          <SearchHeader />
          <PopularVideo />
        </VStack>
        <VideoPupolar />
        <ListVideo />
        <MaybeYouLikeVideo />
      </VStack>
    </ScrollView>
  );
};

export default VideoList;
