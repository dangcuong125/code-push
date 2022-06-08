<<<<<<< HEAD
import React, { useRef, useState } from 'react';

import { Text, VStack, Image, Box, HStack } from 'native-base';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { imagePath } from '@clvtube/common/constants/imagePath';


const slider = [
    {
      id: '1',
      image: imagePath.ONBOARDING1,
      title: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet'
    },
    {
      id: '2',
      image: imagePath.ONBOARDING2,
      title: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet',
    },
    {
      id: '3',
      image: imagePath.ONBOARDING3,
      title: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet',
    },
];

const renderItemSlide = ({ item, index }) => {
    return (
        <VStack>
            <Image
                key={index}
                source={item?.image}
                style={{height: height* 0.75, width, resizeMode: 'contain'}}
                alt="taodzo"
            />
            <Text color={'black'}>
                {item?.title}
            </Text>
        </VStack>
    )
=======
import { Text, VStack, Image, Box, HStack } from 'native-base'
import React, { useRef, useState } from 'react'
import { Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { VIDEO_DETAILS_PAGE } from '@clvtube/common/constants/route.constants'

const Slider = [
  {
    title: 'Taodzo is the developer code',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRknxDMGvGHIF1MWFrTFpDK2xyu4jnixXpI0Q&usqp=CAU',
  },
  {
    title: 'Taodzo is the developer code',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRknxDMGvGHIF1MWFrTFpDK2xyu4jnixXpI0Q&usqp=CAU',
  },
  {
    title: 'Taodzo is the developer code',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRknxDMGvGHIF1MWFrTFpDK2xyu4jnixXpI0Q&usqp=CAU',
  },
  {
    title: 'Taodzo is the developer code',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRknxDMGvGHIF1MWFrTFpDK2xyu4jnixXpI0Q&usqp=CAU',
  },
  {
    title: 'Taodzo is the developer code',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRknxDMGvGHIF1MWFrTFpDK2xyu4jnixXpI0Q&usqp=CAU',
  },
]

const renderItemSlide = ({ item, index }) => {
  return (
    <Box alignItems={'center'} key={index}>
      <HStack>
        <Image
          source={{
            uri: item.image,
          }}
          style={{
            height: 150,
            width: 300,
            borderRadius: 10,
          }}
        />
      </HStack>
    </Box>
  )
>>>>>>> test
}

const { width, height } = Dimensions.get('window')

<<<<<<< HEAD
    const [dataSilder, setDataSilder] = useState(slider)
=======
const HomeSlider = ({ navigation }) => {
  const refCarousel = useRef<Carousel<any>>(null)
>>>>>>> test

  const [dataSilder, setDataSilder] = useState(Slider)

  const onMoveVideoDetail = () => {
    navigation.navigate(VIDEO_DETAILS_PAGE)
  }

<<<<<<< HEAD
            <Carousel
                layout={'stack'}
                layoutCardOffset={1}
                ref={refCarousel}
                data={dataSilder}
                renderItem={({ item, index}) =>
                    renderItemSlide({ item, index })
                }
                sliderWidth={width}
                itemWidth={width}
                // inactiveSlideScale={1}
            />
=======
  return (
    <VStack space={3}>
      <Text
        color={'black'}
        w={'64px'}
        h={'28px'}
        lineHeight={'28px'}
        onPress={onMoveVideoDetail}
        fontWeight={700}
        fontSize={'18px'}>
        Video
      </Text>
>>>>>>> test

      <Carousel
        layout={'default'}
        ref={refCarousel}
        data={dataSilder}
        renderItem={renderItemSlide}
        sliderWidth={width}
        itemWidth={width}
        inactiveSlideScale={1}
      />
    </VStack>
  )
}

export default HomeSlider
