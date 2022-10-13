/* eslint-disable multiline-ternary */
import React from 'react';
import { ITranscriptContent } from '../interface';
import { View } from 'react-native';
import { Box } from 'native-base';
import {
  getHeightOfParagraph,
  // setWordIsHighlighted,
} from '../reducer/podcastDetail';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { Word } from './Words';
import { useAppSelector } from '../../common/hooks/useAppSelector';

export const Transcripts = React.memo(function Transcripts({
  item,
}: {
  item: string;
  position: number;
}) {
  const dispatch = useAppDispatch();
  const transcript = useAppSelector(
    state => state.podcastDetail.customAudioTranscripts?.infoAudio[item],
  );

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
        // bgColor={transcript?.isColorizeBgParahraph ? '#3D9BE0' : '#FFFFFF'}
        bgColor={transcript.bgParagraph}
        padding="5px"
        flexDirection={'row'}
        marginRight="10px"
        flexWrap="wrap"
        fontWeight={400}>
        {transcript?.content?.map((word: ITranscriptContent, index: number) => {
          return (
            // <Animated.View key={index} style={[reanimatedStyle]}>
            <Box key={index}>
              <Word
                word={word}
                setBackgroundColorForParagraph={transcript?.bgParagraph}
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
