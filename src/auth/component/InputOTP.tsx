import React, { useEffect, useRef, useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { Box, Button, Center, Image, Text, VStack } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { imagePath } from '@clvtube/common/constants/imagePath';
import { CREATE_ACCOUNT } from '@clvtube/common/constants/route.constants';
import { InputOTPProps } from '@clvtube/common/navigators/RootNavigator';
import auth from '@react-native-firebase/auth';
import Popup from '@clvtube/common/components/popup';
import { imageNotify } from '../../common/constants/imagePath';

export interface InputReference extends TextInput {
  value: string;
}

const InputOTP = ({ route, navigation }: InputOTPProps) => {
  const { phoneNumber, messageCode } = route.params;
  const inputRef = useRef<InputReference>(null);

  const lengthInput = 6;
  const [internalValue, setInternalValue] = useState<string>('');
  const [countDown, setCountDown] = useState<number>(60);
  const [resendOTP, setResendOTP] = useState<boolean>(false);
  const [confirm] = useState(messageCode);
  const [showModal, setShowModal] = useState(false);

  const onChangeText = (value: string) => {
    setInternalValue(value);
  };

  const handleOnSubmitOTP = async () => {
    if (internalValue.length === lengthInput) {
      try {
        await confirm.confirm(internalValue);
        return navigation.navigate(CREATE_ACCOUNT, {});
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

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <VStack bgColor={'neural.1'} height={'100%'} safeAreaTop={12} safeAreaBottom={4}>
      <KeyboardAwareScrollView extraScrollHeight={50} showsVerticalScrollIndicator={false}>
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
              Nhập mã OTP đã được gửi về số điện thoại của bạn lor
            </Text>
          </Center>
        </VStack>
        <Box>
          <TextInput
            ref={inputRef}
            onChangeText={onChangeText}
            placeholder="useless placeholder"
            value={internalValue}
            maxLength={lengthInput}
            returnKeyType="done"
            keyboardType="numeric"
            style={{
              display: 'none',
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
              OTP sẽ hết hiệu lực sau{' '}
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
                Xác nhận
              </Button>
            </TouchableOpacity>
          </Box>
          <Center marginTop={3}>
            <Text
              fontStyle={'normal'}
              fontSize={'14px'}
              fontWeight={400}
              color={'neural.10'}>
              Không nhận được tin nhắn? {''}
              <TouchableOpacity
                onPress={resendOTP ? handleResendOTP : undefined}
              >
                <Text
                  color={'primary.11'}
                  textDecorationLine={'underline'}
                >
                  Gửi lại
                </Text>
              </TouchableOpacity>
            </Text>
          </Center>
        </VStack>
      </KeyboardAwareScrollView>
      {
        showModal && (
          <Popup
            showModal={showModal}
            setShowModal={setShowModal}
            isSuccess={false}
            title={'OTP không đúng'}
            description={'Bạn kiểm tra lại mã xác thực đã gửi đến số điện thoại!'}
            onPress={() => {}}
            textButton={'Ok'}
            colorButton={'popup.error'}
            textClose={''}
            icon={imageNotify.ERROR}
          />
        )
      }
    </VStack>
  );
};

export default InputOTP;
