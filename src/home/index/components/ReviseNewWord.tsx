import { Box, Button, Heading, Icon, Text } from 'native-base';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Tts from 'react-native-tts';
import { REVISE_WORDS } from '@clvtube/mocks/homePage';
import { IReviseNewWordItem } from '../interfaces';

const NewWord = ({ item }: { item: IReviseNewWordItem }) => {
  return (
    <Box>
      <Box>
        <Text
          color="text.200"
          fontWeight={600}
          fontSize="20px"
          textAlign={'center'}>
          {item.word}
        </Text>
        <Text
          color="text.200"
          fontWeight={600}
          fontSize="16px"
          textAlign={'center'}>
          {item.spelling}
        </Text>
        <Icon
          as={AntDesign}
          name="sound"
          color="text.500"
          size={35}
          marginTop="15px"
          margin="auto"
          onPress={() => Tts.speak(item.word)}
        />
        <Box marginTop={'43px'} margin="auto">
          {item.answers.map((answer: any, index) => (
            <Button key={index} marginTop="5px" width="343px">
              {answer.meaning}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export const ReviseNewWord = () => {
  const [index, setIndex] = useState(0);
  const { width } = Dimensions.get('screen');
  const renderItem = ({ item }: { item: IReviseNewWordItem }) => {
    return <NewWord item={item} />;
  };
  return (
    <Box
      marginTop="16px"
      width={width}
      margin="auto"
      bgColor="#FFFFFF"
      paddingBottom="15px">
      <Box>
        <Heading color="text.200" margin="16px" marginBottom="0px">
          Mỗi ngày 3 từ vựng
        </Heading>
        <Pagination
          dotsLength={REVISE_WORDS.length}
          activeDotIndex={index}
          dotStyle={{
            height: 3,
            width: 101,
            backgroundColor: '#3D9BE0',
            marginHorizontal: -4,
            marginTop: 10,
          }}
          inactiveDotStyle={{
            height: 3,
            width: 101,
            backgroundColor: '#E6E6E6',
            marginHorizontal: -4,
          }}
          inactiveDotOpacity={1}
          inactiveDotScale={1}
        />
        <Text color="text.600" textAlign="center" marginTop="25px">
          Nghĩa nào nhỉ? Chọn nghĩa đúng
        </Text>
        <Box margin="auto">
          <Carousel
            layout={'default'}
            // ref={refCarousel}
            data={REVISE_WORDS}
            renderItem={renderItem}
            sliderWidth={width}
            itemWidth={width}
            onSnapToItem={index => setIndex(index)}
          />
        </Box>
      </Box>
    </Box>
  );
};
