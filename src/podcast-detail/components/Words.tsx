import React from 'react';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import { Text } from 'native-base';

// eslint-disable-next-line react/display-name
export const Word = React.memo(
  ({
    displayHighlightText,
    word,
  }: {
    displayHighlightText: boolean;
    word: string;
  }) => {
    const sliderValue = useAppSelector(
      state => state.podcastDetail.sliderValue,
    );
    let fontSize = 14;
    if (sliderValue >= 70) fontSize = 18;
    if (sliderValue < 70 && sliderValue > 50) fontSize = 16;
    if (sliderValue < 50) fontSize = 14;
    return (
      <>
        <Text
          color={displayHighlightText ? '#3D9BE0' : 'text.200'}
          fontSize={fontSize}>
          {word}{' '}
        </Text>
      </>
    );
  },
  (prev, next) => {
    return !(
      prev.displayHighlightText !== next.displayHighlightText ||
      prev.word !== next.word
    );
  },
);
