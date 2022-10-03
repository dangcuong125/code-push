/* eslint-disable multiline-ternary */
import React from 'react';
import { ITranscriptContent, ITranscriptItem } from '../interface';
import { View } from 'react-native';
import { Box } from 'native-base';
import {
  getHeightOfParagraph,
  setWordIsHighlighted,
} from '../reducer/podcastDetail';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { Word } from './Words';

export const Transcripts = React.memo(function Transcripts({
  item,
  index,
  position,
  array,
}: {
  item: ITranscriptItem;
  position: number;
  index: number;
  array: ITranscriptItem[];
}) {
  const dispatch = useAppDispatch();

  const setBackgroundColorForParagraph =
    position <= Number(array[index + 1]?.startTime) &&
    position > Number(item?.startTime);

  if (setBackgroundColorForParagraph) {
    dispatch(setWordIsHighlighted(item?.content));
  }
  return (
    <View
      onLayout={event =>
        dispatch(getHeightOfParagraph(event.nativeEvent.layout.height))
      }>
      {/* <Animated.View style={[animateStyleforParagraph]}> */}
      <Box
        borderRadius="10px"
        marginTop="8px"
        marginLeft="16px"
        margin="auto"
        bgColor={setBackgroundColorForParagraph ? '#3D9BE0' : '#FFFFFF'}
        padding="5px"
        flexDirection={'row'}
        marginRight="10px"
        flexWrap="wrap"
        fontWeight={400}>
        {item?.content?.map((word: ITranscriptContent, index: number) => {
          const displayHighlightText =
            Number(word.start_time) < position + 0.17 &&
            Number(word.start_time) > position - 0.17;
          return (
            // <Animated.View key={index} style={[reanimatedStyle]}>
            <Box key={index}>
              <Word
                displayHighlightText={displayHighlightText}
                word={word}
                setBackgroundColorForParagraph={setBackgroundColorForParagraph}
              />
            </Box>
            // </Animated.View>
          );
        })}
      </Box>
      {/* </Animated.View> */}
    </View>
  );
});
