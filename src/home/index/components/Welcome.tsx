import React from 'react';
import { Center, Heading, Image, Text, VStack } from 'native-base';
import Carousel from 'react-native-reanimated-carousel';

import { IDiscountBanner, IDiscountBannerProps } from '../interfaces';
import { DISCOUNT_BANNER } from '@clvtube/mocks/homePage';
import { useAppSelector } from '../../../common/hooks/useAppSelector';

const DiscountBanner = ({ item }: IDiscountBannerProps) => {
  return (
    <Image
      source={item.image}
      width={'262px'}
      height={'121px'}
      resizeMode={'contain'}
      alt={'image'}
    />
  );
};

export const Welcome = () => {
  const { fullname } = useAppSelector(state => state.accountReducer);

  const renderItem = ({ item }: { item: IDiscountBanner }) => {
    return <DiscountBanner item={item} />;
  };

  return (
    <VStack safeAreaX={4} pt={3} pb={6} space={3}>
      <Heading
        fontStyle={'normal'}
        fontSize={'24px'}
        fontWeight={600}
        color={'#181818'}>
        Xin chào, {fullname}
      </Heading>
      <Text
        fontStyle={'normal'}
        fontSize={'14px'}
        fontWeight={400}
        color={'#888888'}
        mt={-2}>
        Bạn muốn học gì hôm nay?
      </Text>
      <Center>
        <Carousel
          data={DISCOUNT_BANNER}
          height={121}
          width={262}
          renderItem={renderItem}
          autoPlay={true}
          autoPlayInterval={2500}
        />
      </Center>
    </VStack>
  );
};
