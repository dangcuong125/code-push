import { MediaType } from '@clvtube/common/constants/common.constants';
import { VIDEO_ROUTE } from '@clvtube/common/constants/route.constants';
import { useNavigation } from '@react-navigation/native';
import { Box, Button, FlatList, HStack, Image, Text } from 'native-base';
import React from 'react';
import { useGetUserSaveVideoList } from './hooks/useGetListVideo';
import { IVideoItem } from './interfaces';
const VideoTypeCarousel = ({
  item,
  onPress,
}: {
  item: IVideoItem;
  onPress: any;
}) => {
  return (
    <Button onPress={onPress} backgroundColor="#fff">
      <Box borderRadius="12px" flex={1}>
        <Image
          source={{ uri: item?.video?.thumbnails?.default?.url }}
          width={'160px'}
          height={'87px'}
          resizeMode={'cover'}
          alt={'image'}
          borderTopRadius="12px"
        />
        <Box
          borderBottomRadius={'12px'}
          borderWidth="1px"
          borderColor={'#E6E6E6'}
          paddingX="2"
          maxW={'160px'}
          paddingY="4">
          <Text color={'#181818'} fontSize="12px" fontWeight={600} mb={2}>
            {item?.video?.videosToTopics[0]?.topic?.description}
          </Text>
          <Text color={'#181818'} fontSize="14px" fontWeight={400}>
            {item?.video?.name}
          </Text>
          <HStack w="100%" mt={2}>
            <Box
              w={'76%'}
              h={'4px'}
              backgroundColor="#90C6F9"
              borderRadius={'10px'}
              mt={2}
              position="relative">
              <Box
                position={'absolute'}
                w={`${item?.startTime * 10}%`}
                h={'4px'}
                left={0}
                top={0}
                backgroundColor="#1E4DB4"></Box>
            </Box>
            <Box ml={2}>
              <Text color={'#4F4F4F'} fontSize="12px">
                {Math.floor(item?.startTime)}/10
              </Text>
            </Box>
          </HStack>
        </Box>
      </Box>
    </Button>
  );
};

export default function VideoSave() {
  const navigation = useNavigation();
  const { data } = useGetUserSaveVideoList({ mediaType: MediaType.VIDEO });
  const listVideo = data?.data?.items;

  const renderVideo = ({ item }: { item: IVideoItem }) => {
    return (
      <VideoTypeCarousel
        onPress={() => {
          navigation.navigate(VIDEO_ROUTE.VIDEO_PLAYING, {
            id: item?.videoId,
          });
        }}
        item={item}
      />
    );
  };
  return (
    <Box bgColor="#FFFFFF">
      {listVideo?.length
        ? (
        <>
          <Box margin="16px">
            <Text fontSize={'18px'} fontWeight={600} color="#000000">
              Video đã lưu
            </Text>
            <Text
              fontSize={'16px'}
              fontWeight={500}
              color="#000000"
              marginTop={'12px'}>
              Gần đây
            </Text>
            <Box marginTop={4}>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={listVideo}
                renderItem={renderVideo}
              />
            </Box>
          </Box>
        </>
          )
        : (
        <></>
          )}
    </Box>
  );
}
