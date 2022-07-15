import { ScrollView } from 'native-base';
import React, { Fragment } from 'react';
import HeaderListVideo from './component/HeaderListVideo';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import VideoItem from '@clvtube/videoDetails/listVideo/component/VideoItem';
const ListVideo = () => {
  const { videos } = useAppSelector(state => state.videoReducer);

  console.log({ taodzo: videos });

  return (
    <Fragment>
      <HeaderListVideo />
      <ScrollView
        height={'68%'}
        bgColor={'white'}
        paddingX={4}
        paddingTop={7}
        marginTop={'-6%'}
        borderTopRadius={'36px'}
        showsVerticalScrollIndicator={false}>
        {videos && videos.map(item => <VideoItem key={item.id} item={item} />)}
      </ScrollView>
    </Fragment>
  );
};

export default ListVideo;
