/* eslint-disable multiline-ternary */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import { Box, Text, useDisclose } from 'native-base';
import { ITranscriptContent } from '../interface';
import { WordDefinition } from '@clvtube/common/components/word-definition/index';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { findWordIsClickedForDisplayDefinition } from '../reducer/podcastDetail';
import { getContentOfWord } from '@clvtube/save-new-word/reducer/saveNewWord';

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
    const dispatch = useAppDispatch();
    const { isOpen, onOpen, onClose } = useDisclose();

    const sliderValue = useAppSelector(
      state => state.podcastDetail.sliderValue,
    );
    const wordDefinition = useAppSelector(
      state => state.podcastDetail.wordDefinition,
    );

    let color: string;
    let fontSize = 14;
    if (sliderValue >= 70) fontSize = 18;
    if (sliderValue < 70 && sliderValue > 50) fontSize = 16;
    if (sliderValue < 50) fontSize = 14;

    if (setBackgroundColorForParagraph) color = '#3D9BE0';
    else color = '#FFFFFF';

    const setHighLightWordAlongWithColorParagraph =
      word?.isHighlighted && setBackgroundColorForParagraph;
    return (
      <>
        <Box bgColor={displayHighlightText ? '#FFE69A' : color}>
          <Text
            onPress={() => {
              if (word?.isHighlighted) {
                dispatch(findWordIsClickedForDisplayDefinition(word?.content));
                dispatch(getContentOfWord(word?.content));
                onOpen();
              }
            }}
            underline={setHighLightWordAlongWithColorParagraph && true}
            color={displayHighlightText ? '#3D9BE0' : 'text.200'}
            fontSize={fontSize}>
            {word?.content}{' '}
          </Text>
        </Box>
        {isOpen && (
          <WordDefinition
            content={word?.content}
            isOpen={isOpen}
            onClose={onClose}
            wordDefinition={wordDefinition?.evDict?.detail}
          />
        )}
      </>
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
