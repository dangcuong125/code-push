import { Box } from 'native-base';
import React, { useState } from 'react';
import { Dimensions, FlatList, StyleSheet } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { CarouselProps, ItemProps } from '../../interfaces/common.interface';

const SRC_WIDTH = Dimensions.get('window').width;
const CARD_LENGTH = SRC_WIDTH * 0.8;
const SPACING = SRC_WIDTH * 0.02;
const SIDE_CARD_LENGTH = (SRC_WIDTH * 0.18) / 2;

const Item = ({ index, scrollX, component }: ItemProps) => {
  const size = useSharedValue(0.8);
  const inputRange = [
    (index - 1) * CARD_LENGTH,
    index * CARD_LENGTH,
    (index + 1) * CARD_LENGTH,
  ];
  size.value = interpolate(scrollX, inputRange, [0.8, 1, 0.8]);
  const cardStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scaleY: size.value }],
    };
  });

  return (
    <Animated.View
      style={[
        styles.card,
        cardStyle,
        {
          marginLeft: index === 0 ? SIDE_CARD_LENGTH : SPACING,
          marginRight: index === 2 ? SIDE_CARD_LENGTH : SPACING,
        },
      ]}>
      <Box>{component}</Box>
    </Animated.View>
  );
};

export const Carousel = ({ data, component }: CarouselProps) => {
  const [scrollX, setScrollX] = useState(0);
  return (
    <Animated.View>
      <FlatList
        data={data}
        horizontal={true}
        renderItem={({ index }) => {
          return <Item index={index} scrollX={scrollX} component={component} />;
        }}
        onScroll={e => setScrollX(e.nativeEvent.contentOffset.x)}
      />
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  videoLearning: {
    height: 200,
  },
  card: {
    width: 300,
    height: 250,
    overflow: 'hidden',
  },
});
