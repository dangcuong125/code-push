/* eslint-disable multiline-ternary */
import React, { useEffect, useRef } from 'react';
import { ITranscriptContent, ITranscriptItem } from '../interface';
import { Animated, View } from 'react-native';
import { Box } from 'native-base';
import { getHeightOfParagraph } from '../reducer/podcastDetail';
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
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  const setBackgroundColorForParagraph =
    position < Number(array[index + 1]?.startTime) &&
    position > Number(item?.startTime);
  const backgroundColor = fadeAnimation?.interpolate({
    inputRange: [0, 1],
    outputRange: [
      setBackgroundColorForParagraph ? '#3D9BE0' : '#FFFFFF',
      '#FFFFFF',
    ],
  });
  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: setBackgroundColorForParagraph ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [position]);
  return (
    <View
      onLayout={event =>
        dispatch(getHeightOfParagraph(event.nativeEvent.layout.height))
      }>
      <Animated.View style={{ backgroundColor }}>
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
            const fadeAnimation = useRef(new Animated.Value(0)).current;
            const backgroundColor = fadeAnimation?.interpolate({
              inputRange: [0, 1],
              outputRange: [
                setBackgroundColorForParagraph ? '#3D9BE0' : '#FFFFFF',
                '#F4E06D',
              ],
            });

            useEffect(() => {
              Animated.timing(fadeAnimation, {
                toValue: displayHighlightText ? 1 : 0,
                duration: 300,
                useNativeDriver: false,
              }).start();
            }, [position]);
            return (
              <Box key={index}>
                <Animated.View style={{ backgroundColor }}>
                  <Word
                    displayHighlightText={displayHighlightText}
                    word={word?.content}
                    position={position}
                  />
                </Animated.View>
              </Box>
            );
          })}
        </Box>
      </Animated.View>
    </View>
  );
});
