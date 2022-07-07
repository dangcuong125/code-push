import { ScrollView } from 'native-base';
import React, { Fragment } from 'react';
import HeaderListVideo from './component/HeaderListVideo';
import VideoItem from './component/VideoItem';


const ListVideo = () => {
  return (
    <Fragment>
      <HeaderListVideo />
      <ScrollView
        height={'69%'}
        bgColor={'white'}
        paddingX={4}
        paddingTop={7}
        marginTop={'-8%'}
        borderTopRadius={'36px'}
        showsVerticalScrollIndicator={false}
      >
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
      </ScrollView>
    </Fragment>
  )
}

export default ListVideo;