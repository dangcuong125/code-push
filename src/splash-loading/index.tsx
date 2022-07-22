import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { AUTH, TAB_BOTTOM } from '@clvtube/common/constants/route.constants';
import { imageLogo } from '@clvtube/common/constants/imagePath';
import { Spinner, Text } from 'native-base';

const SplashLoading = () => {
  const navigator = useNavigation();
  useEffect(() => {
    SplashScreen.hide();
    getData();
  }, []);

  const getData = async () => {
    try {
      const valueToken = await AsyncStorage.getItem('token_App');
      if (valueToken) {
        navigator.navigate(TAB_BOTTOM, {});
      } else {
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
