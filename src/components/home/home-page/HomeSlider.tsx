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
}

const { width, height } = Dimensions.get('window') 

const HomeSlider = () => {

    const refCarousel = useRef<Carousel<any>>(null)

    const [dataSilder, setDataSilder] = useState(slider)

    return (
        <VStack space={3}>

            <Text 
                color={'black'}
                w={'64px'}
                h={'28px'}
                lineHeight={'28px'}
                fontWeight={700}
                fontSize={'18px'}
            >
                Video
            </Text>

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

        </VStack>
    )
}

export default HomeSlider