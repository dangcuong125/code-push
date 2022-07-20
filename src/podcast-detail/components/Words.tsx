import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';

// eslint-disable-next-line react/display-name
export const Word = React.memo(
  ({
    displayHighlightText,
    word,
    position,
  }: {
    displayHighlightText: boolean;
    word: string;
    position: number;
  }) => {
    const fadeAnimation = useRef(new Animated.Value(0)).current;
    const colorText = fadeAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['#000000', '#3D9BE0'],
    });
    const sliderValue = useAppSelector(
      state => state.podcastDetail.sliderValue,
    );
    let fontSize = 14;
    if (sliderValue >= 70) fontSize = 18;
    if (sliderValue < 70 && sliderValue > 50) fontSize = 16;
    if (sliderValue < 50) fontSize = 14;

    useEffect(() => {
      Animated.timing(fadeAnimation, {
        toValue: displayHighlightText ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }, [position]);
    return (
      <Animated.Text
        style={{
          color: colorText,
          height: 25,
          fontSize,
        }}>
        {word}{' '}
      </Animated.Text>
    );
  },
  (prev, next) => {
    return !(
      prev.displayHighlightText !== next.displayHighlightText ||
      prev.word !== next.word
    );
  },
);
