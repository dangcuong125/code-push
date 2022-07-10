import React, { useEffect } from 'react';

import {
  Button,
  HStack,
  Heading,
  Icon,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import { useGetAllLevels } from '@clvtube/common/hooks/useLevels';
import { Alert, TouchableOpacity } from 'react-native';
import {
  useGetAllTopics,
  usePostChooseLevelTopic,
} from '../common/hooks/useTopics';
import {
  selectLevel,
  selectTopic,
  updateDataLevel,
  updateDataTopic,
} from './slice';
import { IDataLevelOrTopic } from '../chooseTopic/interfaces/interfaces';
import { useNavigation } from '@react-navigation/native';
import { HOME } from '../common/constants/route.constants';

const Topic = () => {
  const { level, topic } = useAppSelector(state => state.topicReducer);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const { data: topicData } = useGetAllTopics();
  const { data: levelData } = useGetAllLevels();

  const { mutate } = usePostChooseLevelTopic();

  const filterDataLevel = levelData?.data.items.filter(
    (item: IDataLevelOrTopic) => {
      if (item.enabled === -1) {
        return item;
      }
      return null;
    },
  );
  const filterDataTopic = topicData?.data.items.filter(
    (item: IDataLevelOrTopic) => {
      if (item.enabled === -1) {
        return item;
      }
      return null;
    },
  );

  // 🎉 filter data level
  const levelKey = level?.find(item => {
    if (item.enabled === 1) {
      return item;
    }
    return null;
  });

  // 🎉 filter data topic
  const topicKeys = topic
    ?.filter(item => {
      if (item.enabled === 1) {
        return item;
      }
      return null;
    })
    .map(item => item.key);

  useEffect(() => {
    dispatch(updateDataTopic(filterDataTopic));
  }, [topicData?.data?.items]);

  useEffect(() => {
    dispatch(updateDataLevel(filterDataLevel));
  }, [levelData?.data.items]);

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
        onSuccess: (data: any) => {
          if (data?.status === 417) {
            navigation.navigate({ HOME });
          }
        },
        onError: err => {
          Alert.alert(`⛔️ ${err}`);
          // navigator.navigate(AUTH);
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
            {level?.map((item, index) => (
              <TouchableOpacity key={index}>
                <Button
                  key={index}
                  leftIcon={
                    item.enabled === 1 ? (
                      <Icon as={<MaterialIcons name="done" />} />
                    ) : (
                      ''
                    )
                  }
                  marginBottom={'18px'}
                  borderRadius={'12px'}
                  borderWidth={0.5}
                  borderColor={item.enabled === 1 ? 'primary.100' : 'gray.400'}
                  bgColor={item.enabled === 1 ? 'primary.100' : 'white'}
                  _text={{
                    color: item.enabled === 1 ? 'white' : 'black',
                  }}
                  onPress={() => dispatch(selectLevel(item))}>
                  {item.key}
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
            {topic?.map((item, index) => (
              <Button
                key={index}
                leftIcon={
                  item.enabled === 1 ? (
                    <Icon as={<MaterialIcons name="done" />} />
                  ) : (
                    ''
                  )
                }
                borderRadius={'12px'}
                borderWidth={0.5}
                borderColor={item.enabled === 1 ? 'primary.100' : 'gray.400'}
                bgColor={item.enabled === 1 ? 'primary.100' : 'white'}
                marginBottom={'18px'}
                _text={{
                  color: item.enabled === 1 ? 'white' : 'black',
                }}
                onPress={() => dispatch(selectTopic(item))}>
                {item.key}
              </Button>
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

export default Topic;
