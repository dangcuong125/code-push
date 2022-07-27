import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { AUTH, TAB_BOTTOM } from '@clvtube/common/constants/route.constants';
import { imageLogo } from '@clvtube/common/constants/imagePath';
import { Spinner, Text } from 'native-base';
import { useLoginMutation } from '../auth/hook/useAuthMutation';
import { useGetInfoUser } from '@clvtube/account/hooks/useAccount';
import { useAppDispatch } from '../common/hooks/useAppDispatch';
import { updateAccountWithAuthGoogle } from '@clvtube/auth/slice';

const SplashLoading = () => {
  const navigator = useNavigation();
  const dispatch = useAppDispatch();
  const { mutate } = useLoginMutation();
  const { data } = useGetInfoUser();

  useEffect(() => {
    dispatch(
      updateAccountWithAuthGoogle({
        email: data?.data?.client?.email || '',
        fullname: data?.data?.client?.fullname || '',
      }),
    );
  }, [data?.data]);

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
        navigator.navigate(AUTH, {});
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
