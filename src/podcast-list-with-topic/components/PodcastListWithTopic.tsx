/* eslint-disable multiline-ternary */
import React from 'react';
import { Box, Flex, Icon, Image, Pressable, Text } from 'native-base';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native';
import { PodcastListWithTopicProps } from '../interface';
import { imagePodcast } from '@clvtube/common/constants/imagePath';
import { useGetPodcastList } from '@clvtube/common/hooks/useGetPodcastList';
import { PODCAST_DETAIL } from '@clvtube/common/constants/route.constants';

export const PodcastListWithTopic = ({
  navigation,
}: PodcastListWithTopicProps) => {
  const topic = useAppSelector(state => state.podcastList.podcastKeySelected);
  const { data } = useGetPodcastList(topic, 1, 100);

  const podcastList = data?.data?.items;
  return (
    <>
      <Box
        bgColor={{
          linearGradient: {
            colors: ['#FFFFFF', '#5AC8FA66', '#AFD7E966'],
            start: [1],
            end: [1],
          },
        }}>
        <Icon
          size="6"
          color="text.200"
          onPress={() => navigation.goBack()}
          as={AntDesign}
          name="arrowleft"
          marginLeft="23px"
        />
        <Flex direction="row" justifyContent="space-around">
          <Box marginTop="40px">
            <Text
              marginLeft={'27px'}
              color="text.200"
              fontWeight={600}
              fontSize={'32px'}>
              {topic}
            </Text>
            <Text
              marginTop="24px"
              marginLeft={'27px'}
              fontWeight={400}
              color="neutral.800"
              fontSize="14px">
              {podcastList?.length < 10 ? '0' : ''}
              {podcastList?.length >= 1 ? podcastList?.length : ''}{' '}
              {podcastList?.length > 1 ? 'Podcasts' : 'Podcast'}
            </Text>
          </Box>
          <Image
            marginTop="12px"
            source={imagePodcast.MATH_PODCAST}
            width="120px"
            height="136px"
            alt=""
          />
        </Flex>
        <ScrollView contentInset={{ bottom: 344 }}>
          <Flex
            direction="row"
            flexWrap={'wrap'}
            bgColor="#FFFFFF"
            borderTopRadius={'25px'}
            paddingBottom="10px"
            marginTop="36px">
            {podcastList?.map((podcast: any) => (
              <Pressable
                key={podcast.key}
                height="195px"
                width="162px"
                marginTop="24px"
                marginLeft="16px"
                textAlign={'center'}
                margin="auto"
                onPress={() =>
                  navigation.navigate(PODCAST_DETAIL, { id: podcast.id })
                }>
                <Image
                  width="162px"
                  height="126px"
                  source={podcast.audioThumbnail?.thumbnailId}
                  margin="auto"
                  alt=""
                />
                <Box bgColor="#5AC8FA1A" padding="10px">
                  <Text color={'text.100'} fontWeight={400} fontSize="12px">
                    {podcast.title}
                  </Text>
                  <Flex
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    marginTop="8px">
                    <Text
                      color={'neutral.500'}
                      fontWeight={400}
                      fontSize="10px">
                      1:30
                    </Text>
                    <Text
                      color={'neutral.500'}
                      fontWeight={400}
                      fontSize="10px">
                      {podcast.levelKey}
                    </Text>
                  </Flex>
                </Box>
              </Pressable>
            ))}
          </Flex>
        </ScrollView>
      </Box>
    </>
  );
};
