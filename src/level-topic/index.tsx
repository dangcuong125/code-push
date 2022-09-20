import { useNavigation } from '@react-navigation/native';
import {
  Button,
  HStack,
  Heading,
  Icon,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React, { useEffect } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import {
  selectLevel,
  selectTopic,
  updateDataLevel,
  updateDataTopic,
} from './slice';

import { useGetAllLevels } from './hooks/useLevel';
import { useGetAllTopics, usePostChooseLevelTopic } from './hooks/useTopic';

import { TAB_BOTTOM } from '../common/constants/route.constants';
import { useQueryClient } from 'react-query';
import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants';

const LevelTopic = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { level, topic } = useAppSelector(state => state.topicReducer);

  const { data: levelData } = useGetAllLevels();
  const { data: topicData } = useGetAllTopics();

  // console.log({ levelData: levelData?.data?.items, topicData: topicData?.data?.items });

  useEffect(() => {
    dispatch(updateDataLevel(levelData?.data?.items));
  }, [levelData?.data?.items]);

  useEffect(() => {
    dispatch(updateDataTopic(topicData?.data?.items));
  }, [topicData?.data?.items]);

  const queryClient = useQueryClient();
  const keys = queryClient.getQueryData(QUERY_KEYS.POST_LEVEL_TOPIC);
  const { mutate } = usePostChooseLevelTopic();

  // 🎉 filter data level
  const levelKey = level?.find(item => {
    if (item.isSelected) {
      return item;
    }
    return null;
  });

  // 🎉 filter data topic
  const topicKeys = topic
    ?.filter(item => {
      if (item.isSelected) {
        return item;
      }
      return null;
    })
    .map(item => item.key);

  const handleSubmitLevelTopic = () => {
    if (levelKey === undefined && !topicKeys.length) {
      Alert.alert('Bạn hãy chọn Level và Topic để được tiếp tục! 🚀');
      return;
    }
    if (levelKey === undefined) {
      Alert.alert('Bạn vui lòng chọn Level của mình! 🎉');
      return;
    }
    if (!topicKeys.length) {
      Alert.alert('Bạn vui lòng chọn Topic của mình! 🎉');
      return;
    }

    mutate(
      {
        levelKey: levelKey?.key,
        topicKeys,
      },
      {
        onSuccess: () => {
          navigation.navigate(TAB_BOTTOM, {});
        },
        onError: err => {
          Alert.alert(`⛔️ ${err}`);
          // navigator.navigate(AUTH);
        },
        onSettled: () => {
          queryClient.invalidateQueries(keys);
        },
      },
    );
  };

  return (
    <ScrollView bgColor={'white'}>
      <VStack
        bgColor={'white'}
        height={'100%'}
        safeAreaX={4}
        justifyContent={'flex-start'}
        space={8}>
        <VStack marginTop={'50px'}>
          <Heading
            fontStyle={'normal'}
            fontWeight={600}
            fontSize={'22px'}
            color={'neutral.800'}
            height={'46px'}
            lineHeight={'46px'}>
            Xin chào, Tdzo!
          </Heading>
          <Text
            fontStyle={'normal'}
            fontSize={'18px'}
            fontWeight={'600'}
            color={'neutral.800'}
            height={'25px'}
            lineHeight={'25px'}
            marginBottom={'20px'}>
            Level hiện tại của bạn là gì?
          </Text>
          <HStack space={4} flexWrap={'wrap'}>
            {level?.map(item => (
              <TouchableOpacity key={item.key}>
                <Button
                  leftIcon={
                    item.isSelected ? (
                      <Icon as={<MaterialIcons name="done" />} />
                    ) : (
                      ''
                    )
                  }
                  marginBottom={'18px'}
                  borderRadius={'12px'}
                  borderWidth={0.5}
                  borderColor={item.isSelected ? 'primary.11' : 'neural.2'}
                  bgColor={item.isSelected ? 'primary.11' : 'neural.1'}
                  _text={{
                    color: item.isSelected ? 'neural.1' : 'neural.10',
                  }}
                  onPress={() => dispatch(selectLevel(item))}>
                  {item.slug}
                </Button>
              </TouchableOpacity>
            ))}
          </HStack>
        </VStack>
        <VStack>
          <Text
            fontStyle={'normal'}
            fontSize={'18px'}
            fontWeight={'600'}
            color={'neutral.800'}
            height={'25px'}
            lineHeight={'25px'}
            marginBottom={'20px'}>
            Chọn chủ đề mà bạn yêu thích
          </Text>
          <HStack space={4} flexWrap={'wrap'}>
            {topic?.map(item => (
              <TouchableOpacity key={item.key}>
                <Button
                  leftIcon={
                    item.isSelected ? (
                      <Icon as={<MaterialIcons name="done" />} />
                    ) : (
                      ''
                    )
                  }
                  borderRadius={'12px'}
                  borderWidth={0.5}
                  borderColor={item.isSelected ? 'primary.11' : 'neural.2'}
                  bgColor={item.isSelected ? 'primary.11' : 'neural.1'}
                  marginBottom={'18px'}
                  _text={{
                    color: item.isSelected ? 'neural.1' : 'neural.10',
                  }}
                  onPress={() => dispatch(selectTopic(item))}>
                  {item.slug}
                </Button>
              </TouchableOpacity>
            ))}
          </HStack>
        </VStack>

        <TouchableOpacity>
          <Button
            bgColor={'#216BCD'}
            borderRadius={'8px'}
            height={'48px'}
            mb={'8px'}
            _text={{
              fontSize: '14px',
              fontWeight: 400,
              fontStyle: 'normal',
              color: '#FDFDFD',
            }}
            onPress={handleSubmitLevelTopic}>
            Tiếp tục
          </Button>
        </TouchableOpacity>
      </VStack>
    </ScrollView>
  );
};

export default LevelTopic;
