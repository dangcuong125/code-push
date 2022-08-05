import React from 'react';
import { ScrollView, VStack } from 'native-base';

import SearchHeader from '@clvtube/common/components/searchHeader/index';
import ListVideo from './component/ListVideo';
// import MaybeYouLikeVideo from './component/MaybeYouLikeVideo';
import PopularTopic from './component/PopularTopic';
import PupolarVideo from './component/PupolarVideo';

const VideoList = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <VStack space={4}>
        <VStack safeAreaTop={10} bgColor={'neural.1'}>
          <SearchHeader />
          <PopularTopic />
        </VStack>
        <PupolarVideo />
        <ListVideo />
        {/* <MaybeYouLikeVideo /> */}
      </VStack>
    </ScrollView>
  );
};

export default VideoList;
