/* eslint-disable no-nested-ternary */
import React from 'react';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import { Box, Text } from 'native-base';
import { ITranscriptContent } from '../interface';

// eslint-disable-next-line react/display-name
export const Word = React.memo(
  ({
    displayHighlightText,
    word,
    setBackgroundColorForParagraph,
  }: {
    displayHighlightText: boolean;
    word: ITranscriptContent;
    setBackgroundColorForParagraph: boolean;
  }) => {
    const sliderValue = useAppSelector(
      state => state.podcastDetail.sliderValue,
    );
    let color;
    let fontSize = 14;
    if (sliderValue >= 70) fontSize = 18;
    if (sliderValue < 70 && sliderValue > 50) fontSize = 16;
    if (sliderValue < 50) fontSize = 14;

    if (setBackgroundColorForParagraph) color = '#3D9BE0';
    else color = '#FFFFFF';

    return (
      <Box bgColor={displayHighlightText ? '#FFE69A' : color}>
        <Text
          color={displayHighlightText ? '#3D9BE0' : 'text.200'}
          fontSize={fontSize}>
          {word?.content}{' '}
        </Text>
      </Box>
    );
  },
  (prev, next) => {
    return !(
      prev.displayHighlightText !== next.displayHighlightText ||
      prev.word !== next.word ||
      prev.setBackgroundColorForParagraph !==
        next.setBackgroundColorForParagraph
    );
  },
);
