import React, { useEffect, useRef, useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { Box, Button, Center, Image, Text, VStack } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { imagePath } from '@clvtube/common/constants/imagePath';
import {
  CREATE_ACCOUNT,
  OPENDASHBOARD,
} from '@clvtube/common/constants/route.constants';
import { InputOTPProps } from '@clvtube/common/navigators/RootNavigator';
import auth from '@react-native-firebase/auth';
import Popup from '@clvtube/common/components/popup';
import { imageNotify } from '../../common/constants/imagePath';
import { useLoginMutation } from '../hook/useAuthMutation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { updateAccountWithAuth } from '../slice';

// const isIOS = Platform.OS === 'ios';

export interface InputReference extends TextInput {
  value: string;
}

const InputOTP = ({ route, navigation }: InputOTPProps) => {
  const { phoneNumber, messageCode } = route.params;
  const inputRef = useRef<InputReference>(null);
  const dispatch = useAppDispatch();

  const lengthInput = 6;
  const [internalValue, setInternalValue] = useState<string>('');
  const [countDown, setCountDown] = useState<number>(60);
  const [resendOTP, setResendOTP] = useState<boolean>(false);
  const [confirm] = useState(messageCode);
  const [showModal, setShowModal] = useState(false);

  const { mutate } = useLoginMutation();

  const onChangeText = (value: string) => {
    setInternalValue(value);
  };

  const handleOnSubmitOTP = async () => {
    if (internalValue.length === lengthInput) {
      try {
        await confirm.confirm(internalValue);
        await auth()
          .currentUser?.getIdTokenResult()
          .then(async data => {
            dispatch(
              updateAccountWithAuth({
                phone: phoneNumber,
                firIdToken: data.token,
                isTypeAuthPhone: true,
              }),
            );
            await AsyncStorage.setItem('token_App', data.token);
            mutate(data.token, {
              onSuccess: () => {
                navigation.navigate(OPENDASHBOARD, {});
              },
              onError: () => navigation.navigate(CREATE_ACCOUNT, {}),
            });
          });
      } catch (error) {
        setShowModal(true);
      }
    }
  };

  const handleResendOTP = async () => {
    setResendOTP(false);
    setInternalValue('');
    await auth().verifyPhoneNumber(`+84${phoneNumber}`, true);
    setCountDown(60);
  };

  useEffect(() => {
    const clockCall = setInterval(() => {
      if (countDown === 0) {
        setResendOTP(true);
        setCountDown(0);
        clearInterval(clockCall);
      } else {
        setCountDown(countDown - 1);
      }
    }, 1000);
    return () => {
      clearInterval(clockCall);
    };
  });

  // useEffect(() => {
  //   inputRef.current?.focus();
  // }, []);

  return (
    <VStack
      bgColor={'neural.1'}
      height={'100%'}
      safeAreaTop={12}
      safeAreaBottom={4}>
      <KeyboardAwareScrollView
        extraScrollHeight={50}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <VStack safeAreaX={4}>
          <Box mt={5}>
            <AntDesign
              name="arrowleft"
              size={25}
              onPress={() => navigation.goBack()}
            />
          </Box>
          <Center height={'220px'}>
            <Image
              source={imagePath.OTP}
              width={'50%'}
              height={'195px'}
              resizeMode={'contain'}
              alt={'image'}
            />
          </Center>
          <Center px={2} marginBottom={3}>
            <Text
              fontSize={'18px'}
              fontWeight={500}
              color={'neural.10'}
              textAlign={'center'}>
              Nh???p m?? OTP ???? ???????c g???i v??? s??? ??i???n tho???i c???a b???n
            </Text>
          </Center>
        </VStack>
        <Box>
          <TextInput
            ref={inputRef}
            onChangeText={onChangeText}
            value={internalValue}
            maxLength={lengthInput}
            autoFocus
            returnKeyType="done"
            keyboardType="numeric"
            style={{
              height: 0,
              width: 0,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {[1, 2, 3, 4, 5, 6].map((data, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => inputRef.current?.focus()}>
                  <View
                    key={index}
                    style={{
                      paddingVertical: 11,
                      width: 52,
                      height: 52,
                      margin: 5,
                      backgroundColor: '#ECF7FB',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderWidth: 1,
                      borderColor: '#216BCD',
                      borderRadius: 4,
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 24,
                        fontWeight: '600',
                        color: '#1A1A1A',
                        height: 52,
                        lineHeight: 52,
                      }}>
                      {internalValue && internalValue.length > index
                        ? internalValue[index]
                        : ''}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
          <Center marginTop={3}>
            <Text
              fontStyle={'normal'}
              fontSize={'14px'}
              fontWeight={400}
              color={'neutral.800'}>
              OTP s??? h???t hi???u l???c sau{' '}
              <Text color={'#DC3545'}>{countDown}s</Text>
            </Text>
          </Center>
        </Box>
        <VStack safeAreaX={4}>
          <Box marginTop={12}>
            <TouchableOpacity>
              <Button
                bgColor={'primary.21'}
                borderRadius={'8px'}
                height={'48px'}
                isDisabled={internalValue.length !== 6 || !countDown}
                _text={{
                  fontSize: '14px',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  color: 'neural.1',
                }}
                onPress={handleOnSubmitOTP}>
                X??c nh???n
              </Button>
            </TouchableOpacity>
          </Box>
          <Center marginTop={3}>
            <Text
              fontStyle={'normal'}
              fontSize={'14px'}
              fontWeight={400}
              color={'neural.10'}>
              Kh??ng nh???n ???????c tin nh???n? {''}
              <TouchableOpacity
                onPress={resendOTP ? handleResendOTP : undefined}>
                <Text color={'primary.11'} textDecorationLine={'underline'}>
                  G???i l???i
                </Text>
              </TouchableOpacity>
            </Text>
          </Center>
        </VStack>
      </KeyboardAwareScrollView>
      {showModal && (
        <Popup
          showModal={showModal}
          setShowModal={setShowModal}
          isSuccess={false}
          title={'OTP kh??ng ????ng'}
          description={'B???n ki???m tra l???i m?? x??c th???c ???? g???i ?????n s??? ??i???n tho???i!'}
          onPress={() => {}}
          textButton={'Ok'}
          colorButton={'popup.error'}
          textClose={''}
          icon={imageNotify.ERROR}
        />
      )}
    </VStack>
  );
};

export default InputOTP;
