import React, { useRef, useState } from 'react';

import { Box, Button, Center, Text, VStack } from 'native-base';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { imagePath } from '@clvtube/common/constants/imagePath';
import { CREATE_INFO } from '@clvtube/common/constants/route.constants';
import { InputOTPProps } from '@clvtube/common/navigators/RootNavigator';

export interface InputReference extends TextInput {
  value: string;
}

const InputOTP = ({ route, navigation }: InputOTPProps) => {
  const inputRef = useRef<InputReference>(null);

  // const clockCall: any = null
  const lengthInput = 6;
  // const defaultCountDown = 60
  const { confirmation } = route.params;

  const [internalValue, setInternalValue] = useState<string>('');
  // const [countDown, setCountDown] = useState<number>(defaultCountDown)
  // const [enableResend, setEnableResend] = useState<boolean>(false)
  const [confirm] = useState(confirmation);

  const onChangeText = (value: string) => {
    setInternalValue(value);
  };

  const onSubmitOTP = async () => {
    if (internalValue.length === lengthInput) {
      try {
        await confirm.confirm(internalValue);
        //

        return navigation.navigate(CREATE_INFO, {});
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <VStack bgColor={'white'} height={'100%'} safeAreaX={4} safeAreaTop={12}>
      <Box mt={5}>
        <AntDesign name="arrowleft" size={25} />
      </Box>
      <Center my={'-100px'}>
        <Image
          source={imagePath.OTP}
          style={{
            height: '40%',
            resizeMode: 'contain',
          }}
        />
      </Center>
      <Center px={2} marginBottom={3}>
        <Text
          color={'neutral.800'}
          fontSize={'18px'}
          fontWeight={500}
          textAlign={'center'}>
          Nhập mã OTP đã được gửi về số điện thoại của bạn
        </Text>
      </Center>
      <View>
        <TextInput
          ref={inputRef}
          onChangeText={onChangeText}
          style={{ width: 0, height: 0 }}
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
                    {internalValue && internalValue.length > 0
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
            OTP sẽ hết hiệu lực sau {''} <Text color={'#DC3545'}>120s</Text>
          </Text>
        </Center>
      </View>

      <Box marginTop={12}>
        <TouchableOpacity>
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
            onPress={onSubmitOTP}>
            Xác nhận
          </Button>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
};

export default InputOTP;
