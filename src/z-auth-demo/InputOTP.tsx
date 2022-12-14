import { InputOTPProps } from '@clvtube/common/navigators/RootNavigator';

import React, { useEffect, useRef, useState } from 'react';
import { TAB_BOTTOM } from '@clvtube/common/constants/route.constants';
import {
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export interface InputReference extends TextInput {
  value: string;
}

function InputOTP({ navigation }: InputOTPProps) {
  const inputRef = useRef<InputReference>(null);
  let clockCall: any = null;
  const lengthInput = 6;
  const defaultCountDown = 60;
  // const { confirmation } = route.params

  const [internalValue, setInternalValue] = useState<string>('');
  const [countDown, setCountDown] = useState<number>(defaultCountDown);
  const [enableResend, setEnableResend] = useState<boolean>(false);
  // const [confirm, setConfirm] = useState(confirmation)

  useEffect(() => {
    const clockCall = setInterval(() => {
      decrementClock();
    }, 1000);
    return () => {
      clearInterval(clockCall);
    };
  });

  const decrementClock = () => {
    if (countDown === 0) {
      setEnableResend(true);
      setCountDown(0);
      clearInterval(clockCall);
    } else {
      setCountDown(countDown - 1);
    }
  };

  const onChangeText = (value: string) => {
    setInternalValue(value);
  };

  const onChangeNumber = () => {
    setInternalValue('');
  };

  const onResendOTP = () => {
    if (enableResend) {
      setCountDown(defaultCountDown);
      setEnableResend(false);
      clearInterval(clockCall);
      clockCall = setInterval(() => {
        decrementClock();
      }, 1000);
    }
  };

  const onSubmitOTP = async () => {
    if (internalValue.length === lengthInput) {
      try {
        // const response = await confirm.confirm(internalValue)
        // const authData = JSON.parse(response)
        // if(!lodash.isEmpty(authData.user)){
        navigation.navigate(TAB_BOTTOM, {});
        // }
      } catch (error) {
        Alert.alert(JSON.stringify(error));
        console.log('err');
      }
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={50}
        behavior="padding"
        style={styles.containerAvoidingView}>
        <Text style={styles.titleStyle}>Input your OTP code sent via SMS</Text>
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
          <View style={styles.containerInput}>
            {[1, 2, 3, 4, 5, 6].map((data, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => inputRef.current?.focus()}>
                  <View style={styles.cellView}>
                    <Text style={styles.cellText}>
                      {internalValue && internalValue.length > 0
                        ? internalValue[index]
                        : ''}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.containerInput}>
            <TouchableOpacity onPress={onSubmitOTP}>
              <View style={styles.btnSubmit}>
                <Text style={styles.textChange}>Submit</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity onPress={onChangeNumber}>
            <View style={styles.btnChangeNumber}>
              <Text style={styles.textChange}>Change number</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onResendOTP}>
            <View style={styles.btnResend}>
              <Text style={styles.textResend}>Resend OTP ({countDown})</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

export default InputOTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerAvoidingView: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  titleStyle: {
    marginTop: 50,
    marginBottom: 50,
    fontSize: 16,
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellView: {
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
  },
  cellText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  bottomView: {
    flexDirection: 'row',
    flex: 1,
    // justifyContent: "center",
    marginBottom: 50,
    alignItems: 'center',
  },
  btnSubmit: {
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  btnChangeNumber: {
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  textChange: {
    color: '#234db7',
    alignItems: 'center',
    fontSize: 16,
  },
  btnResend: {
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  textResend: {
    alignItems: 'center',
    fontSize: 16,
  },
});
