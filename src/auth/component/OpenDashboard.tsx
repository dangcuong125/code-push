import React from 'react';

import { Button, Center, Heading, Text, VStack } from 'native-base';
import { Dimensions, Image } from 'react-native';

import { imagePath } from '@clvtube/common/constants/imagePath';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import { TAB_BOTTOM } from '@clvtube/common/constants/route.constants';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { getTokenApp } from '../slice/index';

const { width } = Dimensions.get('screen');

const OpenDashboard = () => {
  const dispatch = useAppDispatch();
  const navigator = useNavigation();
  const { fullname } = useAppSelector(state => state.authReducer);
  AsyncStorage.getItem('token_App').then(value => dispatch(getTokenApp(value)));

  // const getData = async () => {
  //   try {
  //     if (valueToken) {
  //       Alert.alert(valueToken);
  //     }
  //   } catch (error) {
  //     Alert.alert('Error!!!')
  //   }
  // }

  return (
    <VStack
      bgColor={'white'}
      height={'100%'}
      justifyContent={'flex-start'}
      space={12}
      safeAreaX={4}>
      <Center marginBottom={'-150px'}>
        <Image
          source={imagePath.REGISTERSUCCESS}
          style={{
            width: width * 0.6,
            height: '50%',
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
          lineHeight={'46px'}>
          Chào buổi sáng, {fullname}
        </Heading>
        <Text
          textAlign={'center'}
          paddingX={4}
          fontStyle={'normal'}
          fontSize={'18px'}
          fontWeight={300}
          lineHeight={'25px'}
          color={'neutral.800'}
          marginTop={'15px'}>
          Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is
          simply dummy
        </Text>
      </Center>

      <Button
        bgColor={'#216BCD'}
        borderRadius={'8px'}
        height={'48px'}
        _text={{
          fontSize: '14px',
          fontWeight: 400,
          fontStyle: 'normal',
          color: '#FDFDFD',
        }}
        onPress={() => navigator.navigate(TAB_BOTTOM)}>
        Bắt đầu ngay
      </Button>
    </VStack>
  );
};

export default OpenDashboard;
