// 🚀 import component from Package
import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import { Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// 🚀 import component auth with firebase
import appleAuth from '@invertase/react-native-apple-authentication';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { envData } from '@clvtube/common/constants/envData';
import { imagePath, imageSocial } from '@clvtube/common/constants/imagePath';
import {
  CREATE_ACCOUNT,
  INPUT_OTP,
  OPENDASHBOARD,
} from '@clvtube/common/constants/route.constants';
import { useAppDispatch } from '../common/hooks/useAppDispatch';
import { InputReference } from './component/InputOTP';
import { useLoginMutation } from './hook/useAuthMutation';
import { updateAccountWithAuthGoogle } from './slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { AccessToken, LoginButton } from 'react-native-fbsdk-next';


const isIOS = Platform.OS === 'ios';

const Auth = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [focusInput, setFocusInput] = useState<boolean>(false);
  const inputRef = useRef<InputReference>(null);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const { mutate } = useLoginMutation();

  useEffect(() => {
    // console.log(Config.WEB_CLIENT_ID)s
    GoogleSignin.configure({
      webClientId: envData.webClientId,
    });
    // onCredentialRevoked returns a function that will remove the event listener. useEffect will call this function when the component unmounts
    if (isIOS) {
      return appleAuth.onCredentialRevoked(async () => {
        console.warn(
          'If this function executes, User Credentials have been Revoked',
        );
      });
    }
  }, []);

  // 🎉 Event auth with phoneNumber
  const onChangePhone = (text: string) => {
    setFocusInput(true);
    setPhoneNumber(text);
  };
  const onChangeBlur = () => {
    inputRef.current?.blur();
    setFocusInput(false);
  };
  const onChangeFocus = () => {
    inputRef.current?.focus();
    setFocusInput(true);
  };
  const handleLoginWithPhonenumber = async () => {
    try {
      if (phoneNumber) {
        const messageCode = await auth().signInWithPhoneNumber(
          `+84${phoneNumber}`,
        );
        navigation.navigate(INPUT_OTP, { messageCode });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 🎉 Event auth with Google
  const handleLoginWithGoogle = async () => {
    try {
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const idGoogle = await auth().signInWithCredential(googleCredential);
      auth()
        .currentUser?.getIdTokenResult()
        .then(async token => {
          dispatch(
            updateAccountWithAuthGoogle({
              email: idGoogle.user.email,
              fullname: idGoogle.user.displayName,
              firIdToken: token.token,
            }),
          );
          await AsyncStorage.setItem('token_App', token.token);
          mutate(token.token, {
            onSuccess: data => {
              if (data?.status === 201) {
                navigation.navigate(OPENDASHBOARD, {});
              }
            },
            onError: () => navigation.navigate(CREATE_ACCOUNT, {}),
          });
        });
      return idGoogle;
    } catch (error) {
      console.log(error);
    }
  };

  // 🎉 Event auth with Apple
  const handleLoginWithApple = async () => {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    if (appleAuthRequestResponse.identityToken) {
      throw new Error('Apple undefined login...');
    }

    const { identityToken, nonce } = appleAuthRequestResponse;
    const appleCredential = auth.AppleAuthProvider.credential(
      identityToken,
      nonce,
    );
    console.log({ identityToken, nonce });

    return auth().signInWithCredential(appleCredential);
  };


  return (
    <VStack bgColor={'neural.1'} height={'100%'} safeAreaX={4} safeAreaTop={12}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        {/* 🎉 Images Screen Login */}
        <Center height={'250px'}>
          <Image
            source={imagePath.LOGIN_REGISTER}
            width={'50%'}
            height={'148px'}
            resizeMode={'contain'}
            alt={'image'}
          />
        </Center>
        <VStack space={5}>
          {/* 🎉 Feature login with phoneNumber */}
          <Input
            ref={inputRef}
            height={'47px'}
            borderWidth={'1px'}
            borderColor={'neural.2'}
            borderRadius={'8px'}
            placeholder={focusInput ? '' : 'Nhập số điện thoại'}
            placeholderTextColor={'neural.5'}
            value={phoneNumber}
            onChangeText={onChangePhone}
            onBlur={onChangeBlur}
            onFocus={onChangeFocus}
            selectionColor={'neural.10'}
            _input={{
              color: 'neural.10',
              fontStyle: 'normal',
              fontSize: '14px',
              fontWeight: 400,
              textAlign: 'center',
            }}
            _focus={{
              backgroundColor: 'primary.14',
              borderColor: 'primary.21',
            }}
          />
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
            onPress={handleLoginWithPhonenumber}>
            {phoneNumber ? 'Đăng nhập' : 'Tiếp tục'}
          </Button>

          {/* 🎉 Option auth with Social */}
          <Box mt={'10px'}>
            <Divider height={'1px'} backgroundColor={'neural.5'} />
            <Center>
              <Box
                width={'50px'}
                height={'20px'}
                marginTop={'-10px'}
                backgroundColor={'white'}
                _text={{
                  textAlign: 'center',
                  fontSize: '14px',
                  color: 'neural.5',
                  lineHeight: '20px',
                }}>
                Hoặc
              </Box>
            </Center>
          </Box>

          {/* 🎉 Feature login with Google */}
          <Button
            height={'48px'}
            backgroundColor={'transparent'}
            borderWidth={'1px'}
            borderColor={'neural.2'}
            borderRadius={'8px'}
            onPress={handleLoginWithGoogle}>
            <HStack
              space={3}
              width={'100%'}
              justifyContent={'flex-start'}
              alignItems={'center'}>
              <Image
                source={imageSocial.GOOGLE}
                width={'25px'}
                height={'25px'}
                resizeMode={'contain'}
                alt={'image'}
              />
              <Text
                fontStyle={'normal'}
                fontSize={'14px'}
                fontWeight={400}
                color={'neural.10'}>
                Tiếp tục với Google
              </Text>
            </HStack>
          </Button>

          {/* 🎉 Feature login with Facebook */}
          <Button
            position={'relative'}
            height={'48px'}
            backgroundColor={'transparent'}
            borderWidth={'1px'}
            borderColor={'neural.2'}
            borderRadius={'8px'}>
            <HStack space={3} justifyContent={'center'} alignItems={'center'}>
            <Image
                source={imageSocial.FB}
                width={'25px'}
                height={'25px'}
                resizeMode={'contain'}
                alt={'image'}
              />
              <Text
                fontStyle={'normal'}
                fontSize={'14px'}
                fontWeight={400}
                color={'neural.10'}>
                Tiếp tục với Facebook
              </Text>
            </HStack>
          </Button>
          <LoginButton
            onLoginFinished={(error, result) => {
              if (error) {
                console.log('login err' + error);
              } else if (result.isCancelled) {
                console.log('canceled');
              } else {
                AccessToken.getCurrentAccessToken()
                  .then(data => {
                    console.log(data?.accessToken.toString());
                    if (data?.accessToken) {
                      const facebookCredential =
                        auth.FacebookAuthProvider.credential(data.accessToken);
                      console.log(facebookCredential);
                      auth()
                        .signInWithCredential(facebookCredential)
                        .then(res => {
                          console.log(res);
                        });
                    }
                  })
                  .catch(err => {
                    console.log(err);
                  });
              }
            }}
            onLogoutFinished={() => console.log('logout')}
          />

          {/* 🎉 Feature login with Apple */}
          {isIOS && (
            <Button
              height={'48px'}
              backgroundColor={'transparent'}
              borderWidth={'1px'}
              borderColor={'neural.2'}
              borderRadius={'8px'}
              onPress={handleLoginWithApple}>
              <HStack space={3} alignItems={'center'}>
              <Image
                source={imageSocial.APPLE}
                width={'25px'}
                height={'25px'}
                resizeMode={'contain'}
                alt={'image'}
              />
                <Text
                  fontStyle={'normal'}
                  fontSize={'14px'}
                  fontWeight={400}
                  color={'neural.10'}>
                  Tiếp tục với Apple
                </Text>
              </HStack>
            </Button>
          )}

          {/* 🎉 version Application */}
          <Center mt={'40px'}>
            <Text
              fontStyle={'normal'}
              fontSize={'14px'}
              fontWeight={600}
              lineHeight={'20px'}
              color={'neural.5'}>
              Phiên bản 1.0.0
            </Text>
          </Center>
        </VStack>
      </KeyboardAwareScrollView>
    </VStack>
  );
};

export default Auth;
