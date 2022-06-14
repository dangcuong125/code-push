import { imageHomePage } from '@clvtube/common/constants/imagePath'
import { Box, Heading, Text, Image } from 'native-base'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel'

const discountDataBanner = [
  {
    id: 1,
    image: imageHomePage.DISCOUNT_BANNER,
  },
  {
    id: 2,
    image: imageHomePage.DISCOUNT_BANNER,
  },
  {
    id: 3,
    image: imageHomePage.DISCOUNT_BANNER,
  },
]

const Item = ({ item }: any) => {
  return <Image source={item.image} />
}

export const Welcome = () => {
  const username = 'MThu'
  const renderItem = ({ item }: any) => {
    return <Item item={item} />
  }
  return (
    <Box marginTop={'18px'} bgColor="#FFFFFF">
      <Box marginLeft={'16px'} paddingBottom="20px">
        <Heading color="text.300">Hi {username}</Heading>
        <Text color="text.400" fontWeight={400}>
          What do you want to learn today?
        </Text>
        <Box margin="auto" marginTop="18px">
          <Carousel
            data={discountDataBanner}
            height={121}
            width={262}
            renderItem={renderItem}
            autoPlay={true}
            autoPlayInterval={1500}
          />
        </Box>
      </Box>
    </Box>
  )
}
