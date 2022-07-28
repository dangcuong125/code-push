import React from 'react';
import { Box, Button, Heading, Image, Text, VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { VIDEO_ROUTE } from '../../constants/route.constants';
import { TouchableOpacity } from 'react-native';

const VideoItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <Box
      width={270}
      marginLeft={4}
    >
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(VIDEO_ROUTE.VIDEO_PLAYING, { id: item.id })
        }
      >
        <VStack space={3}>
          <Image
            source={{ uri: item?.thumbnails.medium.url }}
            resizeMode="contain"
            width={item?.thumbnails.medium.width}
            height={153}
            alt="image"
            borderRadius={10}
          />
          <Heading
            fontStyle={'normal'}
            fontSize="16px"
            fontWeight={600}
            lineHeight={'22px'}
            textAlign={'center'}
            color={'#1A1A1A'}
            numberOfLines={1}
            paddingX={'10%'}>
            {item.name}
          </Heading>
          <Text
            fontStyle={'normal'}
            fontSize={'14px'}
            fontWeight={400}
            lineHeight={'19px'}
            textAlign={'center'}
            color={'#666666'}
            numberOfLines={1}>
            {item.desc}
          </Text>
          <Button
            margin="auto"
            bgColor={'#216BCD'}
            borderRadius={6}
            shadow={'0px 0px 8px rgba(171, 190, 209, 0.4)'}
            _text={{
              color: 'white',
              fontStyle: 'normal',
              fontSize: '14px',
              fontWeight: 600,
              lineHeight: '20px',
            }}
            onPress={() =>
              navigation.navigate(VIDEO_ROUTE.VIDEO_PLAYING, { id: item.id })
            }
          >
            Bắt đầu ngay
          </Button>
        </VStack>
      </TouchableOpacity>
    </Box>
  );
};

export default VideoItem;
