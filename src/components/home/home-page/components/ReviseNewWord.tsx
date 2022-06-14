import { Box, Heading, Text, Button, Icon } from 'native-base'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Tts from 'react-native-tts'

const words = [
  {
    id: 1,
    word: 'Assume',
    spelling: ' /ə.ˈsuːm/',
    answers: [
      {
        id: 1,
        meaning: 'Giả định',
        isCorrected: true,
      },
      {
        id: 2,
        meaning: 'Phản kháng',
        isCorrected: false,
      },
    ],
  },
  {
    id: 2,
    word: 'Goodbye',
    spelling: ' /ə.ˈsuːm/',
    answers: [
      {
        id: 1,
        meaning: 'Giả định',
        isCorrected: true,
      },
      {
        id: 2,
        meaning: 'Phản kháng',
        isCorrected: false,
      },
    ],
  },
  {
    id: 3,
    word: 'Hello',
    spelling: ' /ə.ˈsuːm/',
    answers: [
      {
        id: 1,
        meaning: 'Giả định',
        isCorrected: true,
      },
      {
        id: 2,
        meaning: 'Phản kháng',
        isCorrected: false,
      },
    ],
  },
]

const Item = ({ item }: any) => {
  return (
    <Box>
      <Box>
        <Text
          color="text.200"
          fontWeight={600}
          fontSize="20px"
          textAlign={'center'}>
          {item.word}
        </Text>
        <Text
          color="text.200"
          fontWeight={600}
          fontSize="16px"
          textAlign={'center'}>
          {item.spelling}
        </Text>
        <Icon
          as={AntDesign}
          name="sound"
          color="text.500"
          size={35}
          marginTop="15px"
          margin="auto"
          onPress={() => Tts.speak(item.word)}
        />
        <Box marginTop={'43px'}>
          {item.answers.map((answer: any) => (
            <Button marginTop="5px" width="343px">
              {answer.meaning}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export const ReviseNewWord = () => {
  const renderItem = ({ item }: any) => {
    return <Item item={item} />
  }
  return (
    <Box
      marginTop="16px"
      bgColor="#FFFFFF"
      paddingBottom="15px"
      paddingTop="15px">
      <Box marginLeft="16px">
        <Heading color="text.200">Mỗi ngày 3 từ vựng</Heading>
        <Text color="text.600" textAlign="center" marginTop="49px">
          Nghĩa nào nhỉ? Chọn nghĩa đúng
        </Text>
        <Carousel
          width={350}
          height={200}
          data={words}
          renderItem={renderItem}
          loop={false}
        />
      </Box>
    </Box>
  )
}
