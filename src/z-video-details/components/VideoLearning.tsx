import React, { useRef } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Box, Button, Flex, HStack, ScrollView } from 'native-base';
import YouTube from 'react-native-youtube';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';

import { Carousel } from '@clvtube/common/components/carousel';
import { VideoDetailPageProps } from '../interfaces';
import { loopVideo, previewVideo } from '../reducer/videoDetails';

const transcript = [
  {
    text: "hey there in this video we'll be",
    duration: 3680,
    offset: 480,
  },
];

const VideoLearning = ({ navigation }: VideoDetailPageProps) => {
  const youtubeRef = useRef<YouTube>(null);

  const dispatch = useAppDispatch();
  const numberTranscipt = useAppSelector(
    state => state.videoDetails.numberTranscipt,
  );
  const totalTranscipt = useAppSelector(
    state => state.videoDetails.totalTranscipt,
  );
  const isLoopVideo = useAppSelector(state => state.videoDetails.loopVideo);
  const isStopVideo = useAppSelector(state => state.videoDetails.previewVideo);

  const handleYoutubeVideo = async () => {
    dispatch(previewVideo(true));
    const currentTime = await youtubeRef?.current?.getCurrentTime();
    if (currentTime === 2) dispatch(previewVideo(false));
  };
  return (
    <ScrollView>
      <SafeAreaView>
        <Flex
          marginLeft="20px"
          mr="20px"
          direction="row"
          justifyContent="space-between">
          <AntDesign
            name="arrowleft"
            size={25}
            onPress={() => navigation.goBack()}
          />
          <AntDesign name="setting" size={25} />
        </Flex>
        <YouTube
          apiKey="hello world"
          videoId="Z9CbQ_JILko"
          play={true}
          fullscreen={false}
          loop={isLoopVideo}
          style={styles.videoLearning}
        />
        <Box
          bg="primary.250"
          width="327px"
          margin="auto"
          marginTop="20px"
          height="245px"
          borderRadius="10px"
          padding="10px">
          <HStack>
            <Button
              width="60px"
              height="40px"
              onPress={() => console.log('hello world')}
              borderRadius="20px"
              backgroundColor="#F4F4F4">
              <Text style={styles.increaseSpeed}>0.75x</Text>
            </Button>
            <Button
              width="60px"
              height="40px"
              ml="18px"
              onPress={() => dispatch(loopVideo(true))}
              borderRadius="20px"
              backgroundColor="#F4F4F4">
              <Text style={styles.increaseSpeed}>0.75x</Text>
            </Button>
          </HStack>
          {transcript.map((item, index) => (
            <Text key={index} style={styles.transcript}>
              {item.text}
            </Text>
          ))}
          <Text style={styles.textNumberAndTotal}>
            {numberTranscipt}/ {totalTranscipt}
          </Text>
        </Box>
      </SafeAreaView>
      <Box bg="primary.250" marginTop="15px" height="350px" padding="10px">
        <Text style={styles.textSuggestion}>Video ????? xu???t</Text>
        <Carousel
          data={[1, 2, 3]}
          component={
            <YouTube
              ref={youtubeRef}
              apiKey="hello world"
              videoId="Z9CbQ_JILko"
              play={isStopVideo}
              fullscreen={false}
              loop={false}
              onProgress={handleYoutubeVideo}
              style={styles.videoLearning}
            />
          }
        />
        ;
      </Box>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  videoLearning: {
    height: 300,
    marginTop: 10,
  },
  transcript: {
    marginTop: 20,
    color: '#000000',
    fontWeight: '400',
    fontSize: 24,
  },
  videoSuggestion: {
    height: 250,
    margin: 'auto',
  },
  textSuggestion: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 5,
    marginLeft: 10,
  },
  increaseSpeed: {
    fontSize: 14,
  },
  textNumberAndTotal: {
    marginTop: 60,
    color: '#9B9B9B',
    fontWeight: '400',
    fontSize: 16,
  },
});
export default VideoLearning;
