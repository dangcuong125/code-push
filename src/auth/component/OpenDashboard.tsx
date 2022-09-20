import React, { useLayoutEffect, useState } from 'react';

import { Button, Center, Heading, Text, VStack } from 'native-base';
import { Dimensions, Image } from 'react-native';

import { imagePath } from '@clvtube/common/constants/imagePath';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { getTokenApp } from '../slice/index';
import { useGetInfoUser } from '@clvtube/account/hooks/useAccount';
import { updateAccountUser } from '@clvtube/account/slice';
import { LEVEL_TOPIC } from '../../common/constants/route.constants';

const { width } = Dimensions.get('screen');

const OpenDashboard = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [fullname, setFullname] = useState('');
  const [level, setLevel] = useState('');

  const { data: DataUser } = useGetInfoUser();
  AsyncStorage.getItem('token_App').then(value => dispatch(getTokenApp(value)));

  console.log({ huhu: JSON.stringify(DataUser?.data) });

  const handleNextOpenDasboard = () => {
    if (level) {
      // navigation.navigate(TAB_BOTTOM, {});
      navigation.navigate('Trang chủ', {});
    } else {
      navigation.navigate(LEVEL_TOPIC, {});
    }
  };

  useLayoutEffect(() => {
    dispatch(
      updateAccountUser({
        avatar: DataUser?.data.avatar
          ? DataUser?.data?.avatar?.url
          : 'https://imgs.search.brave.com/I__FScJcLzgrOFTjSMIe8924ruM0k0rU3D3qZc4VsY8/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5D/MW92alQ5TkZ6Z0Zy/X3I1LUU5c2h3SGFI/YSZwaWQ9QXBp',
        avatarId: DataUser?.data?.avatar ? DataUser?.data?.avatar?.id : NaN,
        fullname: DataUser?.data?.client?.fullname,
        phone: DataUser?.data?.client?.phone,
        email: DataUser?.data?.client?.email,
        level: DataUser?.data?.levelKey ? DataUser?.data?.levelKey : '',
      }),
    );
    setLevel(DataUser?.data?.levelKey);
    setFullname(DataUser?.data?.client?.fullname);
  }, [DataUser?.data]);

  return (
    <VStack
      bgColor={'neural.1'}
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
          color={'neural.10'}
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
          color={'neural.10'}
          marginTop={'15px'}>
          Chào bạn đến với ứng dụng học Tiếng Anh của chúng tôi, hãy bắt đầu
          trải nghiệm nào...
        </Text>
      </Center>

      <Button
        bgColor={'primary.21'}
        borderRadius={'8px'}
        height={'48px'}
        _text={{
          fontSize: '14px',
          fontWeight: 400,
          fontStyle: 'normal',
          color: 'neural.1',
        }}
        onPress={handleNextOpenDasboard}>
        Bắt đầu ngay
      </Button>
    </VStack>
  );
};

export default OpenDashboard;
