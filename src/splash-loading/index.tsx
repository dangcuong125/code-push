import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import {
  AUTH,
  INTRO,
  TAB_BOTTOM,
} from '@clvtube/common/constants/route.constants';
import { imageLogo } from '@clvtube/common/constants/imagePath';
import { Spinner, Text } from 'native-base';
import { useLoginMutation } from '../auth/hook/useAuthMutation';
import { useGetInfoUser } from '@clvtube/account/hooks/useAccount';
import { useAppDispatch } from '../common/hooks/useAppDispatch';
import { updateAccountUser } from '@clvtube/account/slice';

const SplashLoading = () => {
  const navigator = useNavigation();
  const dispatch = useAppDispatch();
  const { data: DataUser } = useGetInfoUser();
  const { mutate } = useLoginMutation();

  useEffect(() => {
    dispatch(
      updateAccountUser({
        avatar: DataUser?.data.avatar
          ? DataUser?.data?.avatar?.url
          : 'https://imgs.search.brave.com/I__FScJcLzgrOFTjSMIe8924ruM0k0rU3D3qZc4VsY8/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5D/MW92alQ5TkZ6Z0Zy/X3I1LUU5c2h3SGFI/YSZwaWQ9QXBp',
        avatarId: DataUser?.data.avatar ? DataUser?.data?.avatar?.id : NaN,
        fullname: DataUser?.data?.client.fullname,
        phone: DataUser?.data?.client.phone,
        email: DataUser?.data?.client.email,
        level: DataUser?.data?.levelKey,
      }),
    );
  }, [DataUser?.data]);

  useEffect(() => {
    SplashScreen.hide();
    getData();
  }, []);

  const getData = async () => {
    try {
      const valueToken = await AsyncStorage.getItem('token_App');
      console.log(valueToken);
      if (valueToken) {
        mutate(valueToken, {
          onSuccess: () => {
            navigator.navigate(TAB_BOTTOM, {});
          },
          onError: async () => {
            await AsyncStorage.clear();
            // Alert.alert('onError');
            navigator.navigate(AUTH, {});
          },
        });
      } else {
        // Alert.alert('ELSE');
        navigator.navigate(INTRO, {});
      }
    } catch (error) {}
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        style={{ width: 130, height: 130 }}
        source={imageLogo.LOGO_SPLASH}
      />
      <Text
        color={'text.200'}
        fontWeight={'semibold'}
        marginBottom={110}
        fontSize={22}>
        CleverTube
      </Text>
      <Spinner />
    </View>
  );
};

export default SplashLoading;
