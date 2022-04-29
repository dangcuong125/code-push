import React, { useState, useEffect, useRef } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native'
import { AccessToken, LoginButton } from 'react-native-fbsdk-next'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { LoginProps } from '@clvtube/common/navigators/Root'
import auth from '@react-native-firebase/auth'

interface InputReference extends TextInput {
  value: string
}

function Login({ route, navigation }: LoginProps) {
  let inputRef = useRef<InputReference>(null)
  const [phoneNumber, setPhoneNumber] = useState<string>()
  const [focusInput, setFocusedInput] = useState<boolean>(true)

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '213696605314-hbs530r83vb2anga4sv7lf7kjt8249om.apps.googleusercontent.com',
    })
  }, [])

  const onChangePhone = (number: string) => {
    setPhoneNumber(number)
  }

  const onPressContinue = async () => {
    try {
      if (phoneNumber) {
        const confirmation = await auth().signInWithPhoneNumber(
          `+84${phoneNumber}`,
        )
        navigation.navigate('InputOTP', { confirmation })
      }
    } catch (error) {
      Alert.alert(JSON.stringify(error))
    }
  }

  const onChangeFocus = () => {
    setFocusedInput(true)
  }

  const onChangeBlur = () => {
    inputRef.current?.blur()
    setFocusedInput(false)
  }

  const onGoogleButtonPress = async () => {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn()

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken)

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential)
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={50}
        behavior="padding"
        style={styles.containerAvoidingView}>
        <LoginButton
          onLoginFinished={(error, result) => {
            if (error) {
              console.log('login err' + error)
            } else if (result.isCancelled) {
              console.log('canceled')
            } else {
              AccessToken.getCurrentAccessToken().then(data => {
                console.log(data?.accessToken.toString())
                if (data?.accessToken) {
                  const facebookCredential =
                    auth.FacebookAuthProvider.credential(data.accessToken)
                  console.log(facebookCredential)
                  auth()
                    .signInWithCredential(facebookCredential)
                    .then(res => {
                      console.log(res)
                    })
                }
              })
            }
          }}
          onLogoutFinished={() => console.log('logout')}
        />
        <Button
          title="Google Sign-In"
          onPress={() =>
            onGoogleButtonPress().then(() =>
              console.log('Signed in with Google!'),
            )
          }
        />
        <Text style={styles.textTitle}>
          Please input your mobile phone number
        </Text>
        <View style={styles.containerInput}>
          <View style={styles.openDialogView}>
            <Text>{'+84 |'}</Text>
          </View>
          <TextInput
            ref={inputRef}
            style={styles.phoneInputStyle}
            placeholder="999 999 999"
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={onChangePhone}
            secureTextEntry={false}
            onFocus={onChangeFocus}
            onBlur={onChangeBlur}
            underlineColorAndroid={'transparent'}
          />
        </View>
        <View style={styles.viewBottom}>
          <TouchableOpacity onPress={onPressContinue}>
            <View
              style={[
                styles.btnContinue,
                { backgroundColor: phoneNumber ? '#244db7' : 'gray' },
              ]}>
              <Text style={styles.textContinue}>Continue</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerAvoidingView: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  textTitle: {
    marginBottom: 50,
    marginTop: 10,
    fontSize: 16,
  },
  containerInput: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    borderBottomWidth: 1.5,
  },
  openDialogView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneInputStyle: {
    marginLeft: 5,
    flex: 1,
    height: 50,
  },
  viewBottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
    alignItems: 'center',
  },
  btnContinue: {
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContinue: {
    color: '#ffffff',
    alignItems: 'center',
  },
})
