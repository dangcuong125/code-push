// 🚀 import Component from Package
import React, { useRef, useState } from 'react';
import { Dimensions, Image, TouchableOpacity } from 'react-native';
import { Box, Button, Center, Pressable, Text, VStack } from 'native-base';
import Carousel, { Pagination } from 'react-native-snap-carousel';

// 🚀 import component from Page
import { AUTH } from '@clvtube/common/constants/route.constants';
import { slider } from '@clvtube/mocks/dataOnboarding';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const renderItemSlider = ({ item, index }) => {
  return (
    <VStack mt={5}>
      <Image
        key={index}
        source={item?.image}
        style={{ height: height * 0.4, width, resizeMode: 'contain' }}
      />
      <Center marginBottom={5} width={'80%'} margin={'auto'}>
        <Text
          color={'neural.10'}
          fontSize={'22px'}
          fontWeight={600}
          lineHeight={'46px'}
          textAlign={'center'}>
          {item?.title}
        </Text>
      </Center>
    </VStack>
  );
};

const Intro = () => {
  const [index, setIndex] = useState(0);
  const refCarousel = useRef<Carousel<any>>(null);
  const navigation = useNavigation();

  const nextSlider = () => {
    if (index !== slider.length - 1) {
      const nextSlideIndex = index + 1;
      setIndex(nextSlideIndex);
      refCarousel?.current?.snapToItem(nextSlideIndex);
    } else {
      navigation.navigate(AUTH, {});
    }
  };

  return (
    <VStack height={height} bgColor={'neural.1'} justifyContent={'space-evenly'}>
      <VStack safeAreaY={10} flex={1}>
        <Pressable
          px={4}
          mt={10}
          onPress={() => {
            return navigation.navigate(AUTH, {});
          }}>
          <Text
            fontStyle={'normal'}
            fontSize={'16px'}
            fontWeight={600}
            lineHeight={'22px'}
            textAlign={'right'}
            color={'primary.31'}>
            Skip
          </Text>
        </Pressable>
        <Carousel
          layout={'default'}
          ref={refCarousel}
          data={slider}
          renderItem={({ item, index }) => renderItemSlider({ item, index })}
          sliderWidth={width}
          itemWidth={width}
          onSnapToItem={index => setIndex(index)}
        />
        <Pagination
          dotsLength={slider.length}
          activeDotIndex={index}
          dotStyle={{
            height: 8,
            width: 40,
            backgroundColor: '#0E3C9E',
            marginHorizontal: -4,
            borderRadius: 4,
          }}
          inactiveDotStyle={{
            height: 8,
            width: 8,
            backgroundColor: '#E6E9F6',
            marginHorizontal: -4,
            borderRadius: 4,
          }}
          inactiveDotOpacity={1}
          inactiveDotScale={1}
        />
      </VStack>

      <Box marginBottom={8} paddingBottom={8} safeAreaX={4}>
        <TouchableOpacity>
          <Button
            bgColor={'primary.21'}
            borderRadius={'8px'}
            height={'48px'}
            onPress={nextSlider}
            _text={{
              fontSize: '14px',
              fontWeight: 400,
              fontStyle: 'normal',
              color: 'neural.1',
            }}
          >
            {index === slider.length - 1 ? 'Bắt đầu' : 'Tiếp theo'}
          </Button>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
};

export default Intro;
