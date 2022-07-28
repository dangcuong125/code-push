import { ScrollView } from 'native-base';
import React, { Fragment, useEffect, useState } from 'react';
import HeaderListVideo from './component/HeaderListVideo';
import VideoItem from '@clvtube/video-detail/listVideo/component/VideoItem';
import { useRoute } from '@react-navigation/native';
import { useGetAllVideos } from '@clvtube/common/hooks/useVideos';


const ListVideo = () => {
  const { item: { topic_key } } = useRoute().params;
  const [topicKey, setTopicKey] = useState([topic_key]);
  const [videoTopic, setVideoTopic] = useState([]);
  const { data: DataVideoTopicKey } = useGetAllVideos('', topicKey, 1, 100);

  console.log({ videoTopicKey: videoTopic });

  useEffect(() => {
    setTopicKey([topic_key]);
  }, [topic_key]);

  useEffect(() => {
    setVideoTopic(DataVideoTopicKey?.data.items);
  }, [DataVideoTopicKey?.data.items]);

  return (
    <Fragment>
      <HeaderListVideo nameTopic={topicKey} videoTopic={videoTopic} />
      <ScrollView
        height={'68%'}
        bgColor={'white'}
        paddingX={4}
        paddingTop={7}
        marginTop={'-6%'}
        borderTopRadius={'36px'}
        showsVerticalScrollIndicator={false}>
        {
          videoTopic?.length > 0 && (
            videoTopic?.map(item =>
              <VideoItem key={item.id} item={item} />,
            )
          )
        }
      </ScrollView>
    </Fragment>
  );
};

export default ListVideo;
