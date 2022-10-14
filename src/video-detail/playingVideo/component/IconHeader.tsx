import {
  MediaType,
  USER_PROCESS_TOTAL,
} from '@clvtube/common/constants/common.constants';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import { useDeleteVideo } from '@clvtube/video-detail/hooks/useDeleteVideo';
import { useSaveVideo } from '@clvtube/video-detail/hooks/useSaveVideo';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Box, HStack, Icon } from 'native-base';
import React from 'react';
import AntDeisgn from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getDuration, getIsSaveVideo, getPosition } from '../slice';

const IconHeader = () => {
  const navigator = useNavigation();
  const isSaveVideo = useAppSelector(getIsSaveVideo);
  const { id } = useRoute().params;

  const { mutate: deleteVideo } = useDeleteVideo();
  const { mutate: saveVideo } = useSaveVideo();
  const position = useAppSelector(getPosition);
  const duration = useAppSelector(getDuration);

  const handleSaveVideo = () => {
    saveVideo({
      videoId: id,
      mediaType: MediaType.VIDEO,
      startTime: ((position / 1000) * USER_PROCESS_TOTAL) / duration,
    });
  };

  const handleDeleteVideo = () => {
    if (isSaveVideo) deleteVideo([isSaveVideo]);
  };

  return (
    <HStack
      justifyContent={'space-between'}
      alignItems={'center'}
      safeAreaX={4}>
      <AntDeisgn
        name="arrowleft"
        size={25}
        color="black"
        onPress={() => navigator.goBack()}
      />
      <HStack space={2}>
        {isSaveVideo
          ? (
          <Box onTouchEnd={handleDeleteVideo}>
            <Icon
              size="6"
              as={Ionicons}
              name="bookmarks"
              marginRight="10px"
              color="black"
            />
          </Box>
            )
          : (
          <Box onTouchEnd={handleSaveVideo}>
            <Icon
              size="6"
              as={Ionicons}
              name="bookmarks-outline"
              marginRight="10px"
              color="black"
            />
          </Box>
            )}
        <AntDeisgn name="setting" size={25} color="black" />
      </HStack>
    </HStack>
  );
};

export default IconHeader;
