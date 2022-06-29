import { Box, HStack, Heading, Progress, Text, VStack } from 'native-base';
import { FlatList, Image } from 'react-native';
import React from 'react';
import { DATA_VIEWED_RECENTLY } from '@clvtube/mocks/homePage';
import { IDataViewRecently } from '../interfaces';

const VideoRecommended = ({ item }: { item: IDataViewRecently }) => {
  return (
    <Box
      width="165px"
      ml={4}
      mr={2}
      borderWidth={'1px'}
      borderColor={'#E6E6E6'}
      borderRadius={'12px'}>
      <Image
        source={item.image}
        style={{
          width: 163,
          height: 87,
          resizeMode: 'cover',
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}
      />

      <VStack space={2} safeAreaY={2} safeAreaX={1}>
        <Text
          fontStyle={'normal'}
          fontSize={'10px'}
          fontWeight={600}
          color={'#181818'}>
          {item.title}
        </Text>
        <Text
          fontStyle={'normal'}
          fontSize={'12px'}
          fontWeight={400}
          lineHeight={'16px'}
          color={'#181818'}>
          {item.content}
        </Text>
        <HStack justifyContent={'space-between'} alignItems={'center'}>
          <Progress
            value={item.progress}
            height={'4px'}
            bg={'rgba(90, 200, 250, 0.4)'}
            _filledTrack={{ bg: '#216BCD' }}
            flexGrow={0.8}
          />
          <Text
            fontStyle={'normal'}
            fontSize={'10px'}
            fontWeight={400}
            color={'#4F4F4F'}>
            5/10
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export const Recently = () => {
  const renderItem = ({ item }: { item: IDataViewRecently }) => {
    return <VideoRecommended item={item} />;
  };
  return (
    <VStack bgColor={'white'} safeAreaY={3}>
      <Heading
        fontStyle={'normal'}
        fontSize={'18px'}
        fontWeight={600}
        lineHeight={'25px'}
        color={'#000000'}
        pl={4}
        pb={4}>
        Gần đây
      </Heading>
      <FlatList
        data={DATA_VIEWED_RECENTLY}
        horizontal={true}
        renderItem={renderItem}
      />
    </VStack>
  );
};
