import React from 'react'

import { Image, Dimensions } from 'react-native'
import { Button, Center, Heading, Text, VStack } from 'native-base'

import { imagePath } from '@clvtube/common/constants/imagePath'
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen')

const StartDashboard = () => {

    const navigator = useNavigation()

  return (
    <VStack bgColor={'white'} height={'100%'} justifyContent={'flex-start'} space={12} safeAreaX={4}>
        <Center
            marginBottom={'-150px'}
        >
            <Image
                source={imagePath.REGISTERSUCCESS}
                style={{
                    width: width * 0.6,
                    height:  '50%',
                    resizeMode: 'contain',
                }}
            />
        </Center>

        <Center>
            <Heading
                fontStyle={'normal'}
                fontSize={'22px'}
                fontWeight={600}
                color={'neutral.800'}
                lineHeight={'46px'}
            >
                Chào buổi sáng, TDzo!
            </Heading>
            <Text
                textAlign={'center'}
                paddingX={4}
                fontStyle={'normal'}
                fontSize={'18px'}
                fontWeight={300}
                lineHeight={'25px'}
                color={'neutral.800'}
                marginTop={'15px'}
            >
                Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy
            </Text>
        </Center>
        
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
            onPress={() => navigator.navigate('VideoDetails')}
        >
            Bắt đầu ngay
        </Button>
    </VStack>
  )
}

export default StartDashboard

