import { Text, VStack, Image, Box, HStack } from 'native-base';
import React, { useRef, useState } from 'react';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';


const Slider = [
    {
        title: 'Taodzo is the developer code',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRknxDMGvGHIF1MWFrTFpDK2xyu4jnixXpI0Q&usqp=CAU'
    },
    {
        title: 'Taodzo is the developer code',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRknxDMGvGHIF1MWFrTFpDK2xyu4jnixXpI0Q&usqp=CAU'
    },
    {
        title: 'Taodzo is the developer code',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRknxDMGvGHIF1MWFrTFpDK2xyu4jnixXpI0Q&usqp=CAU'
    },
    {
        title: 'Taodzo is the developer code',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRknxDMGvGHIF1MWFrTFpDK2xyu4jnixXpI0Q&usqp=CAU'
    },
    {
        title: 'Taodzo is the developer code',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRknxDMGvGHIF1MWFrTFpDK2xyu4jnixXpI0Q&usqp=CAU'
    },
]

const renderItemSlide = ({ item, index }) => {
  
    return (
      <Box alignItems={'center'} key={index}>
        <HStack>
            <Image
                source={{
                   uri: item.image 
                }}
                style={{
                    height:150,
                    width:300,
                    borderRadius: 10
                }}
            />
        </HStack>
      </Box>
    )
}

const { width, height } = Dimensions.get('window') 

const HomeSlider = () => {

    const refCarousel = useRef<Carousel<any>>(null)

    const [dataSilder, setDataSilder] = useState(Slider)

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
                layout={"default"}
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