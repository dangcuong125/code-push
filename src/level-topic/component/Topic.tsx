import React from 'react'

import { useNavigation } from '@react-navigation/native'
import {
  Button,
  HStack,
  Heading,
  Icon,
  Pressable,
  Text,
  VStack,
} from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { selectLevel, selectTopic } from '../reducer/topicReducer'
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector'
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch'
import { HOME } from '../../common/constants/route.constants'

const Topic = () => {
  const { level, topic } = useAppSelector(state => state.topicReducer)
  const dispatch = useAppDispatch()

  const navigator = useNavigation()

  return (
    <VStack
      bgColor={'white'}
      height={'100%'}
      safeAreaX={4}
      justifyContent={'flex-start'}
      space={8}>
      <VStack marginTop={'100px'}>
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
        <HStack space={4}>
          {level?.map((item, index) => (
            <Button
              key={index}
              leftIcon={
                item.isSelected ? (
                  <Icon as={<MaterialIcons name="done" />} />
                ) : (
                  ''
                )
              }
              borderRadius={'12px'}
              borderWidth={0.5}
              borderColor={item.isSelected ? 'primary.100' : 'gray.400'}
              bgColor={item.isSelected ? 'primary.100' : 'white'}
              _text={{
                color: item.isSelected ? 'white' : 'black',
              }}
              onPress={() => dispatch(selectLevel(item))}>
              {item.level}
            </Button>
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
                item.isSelected ? (
                  <Icon as={<MaterialIcons name="done" />} />
                ) : (
                  ''
                )
              }
              borderRadius={'12px'}
              borderWidth={0.5}
              borderColor={item.isSelected ? ' primary.100' : 'gray.400'}
              bgColor={item.isSelected ? 'primary.100' : 'white'}
              marginBottom={'18px'}
              _text={{
                color: item.isSelected ? 'white' : 'black',
              }}
              onPress={() => dispatch(selectTopic(item))}>
              {item.topic}
            </Button>
          ))}
        </HStack>
      </VStack>
      <Pressable>
        <Button
          bgColor={'primary.100'}
          borderRadius={'8px'}
          height={'48px'}
          _text={{
            fontSize: '14px',
            fontWeight: 400,
            fontStyle: 'normal',
            color: '#FDFDFD',
          }}
          onPress={() => navigator.navigate(HOME)}>
          Tiếp tục
        </Button>
      </Pressable>
    </VStack>
  )
}

export default Topic
