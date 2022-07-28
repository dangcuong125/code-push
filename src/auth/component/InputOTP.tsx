import React, { useEffect, useRef, useState } from 'react';
import { Alert, TextInput, TouchableOpacity, View } from 'react-native';
import { Box, Button, Center, Image, Text, VStack } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { imagePath } from '@clvtube/common/constants/imagePath';
import { CREATE_ACCOUNT } from '@clvtube/common/constants/route.constants';
import { InputOTPProps } from '@clvtube/common/navigators/RootNavigator';
import auth from '@react-native-firebase/auth';


export interface InputReference extends TextInput {
  value: string;
}

const InputOTP = ({ route, navigation }: InputOTPProps) => {
  const { messageCode } = route.params;
  const inputRef = useRef<InputReference>(null);

  const lengthInput = 6;
  const [internalValue, setInternalValue] = useState<string>('');
  const [countDown, setCountDown] = useState<number>(120);
  const [resetOTP, setResetOTP] = useState<boolean>(false);
  const [confirm] = useState(messageCode);

  const onChangeText = (value: string) => {
    setInternalValue(value);
  };

  const onSubmitOTP = async () => {
    if (internalValue.length === lengthInput) {
      try {
        await confirm.confirm(internalValue);
        return navigation.navigate(CREATE_ACCOUNT, {});
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleResetOTP = async () => {
    const newOTP = await auth().verifyPhoneNumber('0376897938', 120);
    Alert.alert(`${newOTP}`);
  };

  useEffect(() => {
    const clockCall = setInterval(() => {
      if (countDown === 0) {
        setResetOTP(true);
        setCountDown(0);
        clearInterval(clockCall);
      } else {
        setCountDown(countDown - 1);
      }
    }, 1000);
    return () => { clearInterval(clockCall); };
  });

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <VStack bgColor={'neural.1'} height={'100%'} safeAreaTop={120}>
      <KeyboardAwareScrollView>
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
            />
          </Center>
          <Center px={2} marginBottom={3}>
            <Text
              fontSize={'18px'}
              fontWeight={500}
              color={'neural.10'}
              textAlign={'center'}>
              Nhập mã OTP đã được gửi về số điện thoại của bạn
            </Text>
          </Center>
        </VStack>
        <View>
          <TextInput
            ref={inputRef}
            onChangeText={onChangeText}
            placeholder="useless placeholder"
            style={{
              display: 'flex',
            }}
            value={internalValue}
            maxLength={lengthInput}
            returnKeyType="done"
            keyboardType="numeric"
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
                        : '_'}
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
              OTP sẽ hết hiệu lực sau <Text color={'#DC3545'}>{countDown}s</Text>
            </Text>
          </Center>
        </View>
        <VStack safeAreaX={4}>
          <Box marginTop={12}>
            <TouchableOpacity>
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
                onPress={onSubmitOTP}>
                Xác nhận
              </Button>
            </TouchableOpacity>
          </Box>
          <Center marginTop={3}>
            <Text
              fontStyle={'normal'}
              fontSize={'14px'}
              fontWeight={400}
              color={'neutral.800'}>
              Không nhận được tin nhắn? {''}
              <TouchableOpacity
                onPress={handleResetOTP}
              >
                <Text
                  color={'primary.11'}
                  textDecorationLine={'underline'}
                  opacity={resetOTP ? 1 : 0.5}
                >
                  Gửi lại
                </Text>
              </TouchableOpacity>
            </Text>
          </Center>
        </VStack>
      </KeyboardAwareScrollView>
    </VStack>
  );
};

export default InputOTP;
