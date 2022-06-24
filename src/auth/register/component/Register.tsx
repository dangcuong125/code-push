import React, { useRef, useState } from 'react'

import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { Link } from '@react-navigation/native'
import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Input,
  Text,
  VStack,
} from 'native-base'
import { Dimensions, Image } from 'react-native'

import { imagePath, imageSocial } from '@clvtube/common/constants/imagePath'
import { INPUT_OTP, LOGIN } from '@clvtube/common/constants/route.constants'
import { LoginProps, RegisterProps } from '@clvtube/common/navigators/Root'
import appleAuth from '@invertase/react-native-apple-authentication'
import { InputReference } from '../../../auth-demo/InputOTP'

const { width, height } = Dimensions.get('screen')

const Register = ({ navigation }: RegisterProps) => {
  const [checkScreen, setCheckScreen] = useState('login')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [focusInput, setFocusInput] = useState<boolean>(false)

  const inputRef = useRef<InputReference>(null)

  // Event login with phoneNumber
  const onChangePhone = (text: string) => {
    setFocusInput(true)
    setPhoneNumber(text)
  }
  const onChangeBlur = () => {
    inputRef.current?.blur()
    setFocusInput(false)
  }
  const onChangeFocus = () => {
    inputRef.current?.focus()
    setFocusInput(true)
  }
  const handleLoginWithPhonenumber = async () => {
    try {
      if (phoneNumber) {
        const confirmation = await auth().signInWithPhoneNumber(
          `+84${phoneNumber}`,
        )
        navigation.navigate(INPUT_OTP, { confirmation })
      }
    } catch (error) {
      console.log(error)
    }
  }
  console.log(phoneNumber)

  // Event login with Google
  const handleLoginWithGoogle = async () => {
    try {
      const { idToken } = await GoogleSignin.signIn()
      console.log({ idToken })
      const googleCredential = auth.GoogleAuthProvider.credential(idToken)
      const idGoogle = await auth().signInWithCredential(googleCredential)
      console.log({ idGoogle })
      return idGoogle
    } catch (error) {
      console.log(error)
    }
  }

  const handleLoginWithApple = async () => {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    })

    if (appleAuthRequestResponse.identityToken) {
      throw new Error('Apple undefined login...')
    }

    const { identityToken, nonce } = appleAuthRequestResponse
    const appleCredential = auth.AppleAuthProvider.credential(
      identityToken,
      nonce,
    )

    return auth().signInWithCredential(appleCredential)
  }

  return (
    <VStack bgColor={'white'} height={'100%'} safeAreaX={4}>
      {/* Images Screen Login */}
      <Center marginBottom={'-50px'}>
        <Image
          source={imagePath.LOGIN_REGISTER}
          style={{
            height: '40%',
            resizeMode: 'contain',
          }}
        />
      </Center>
      <VStack space={5}>
        {/* Feature login with phoneNumber */}
        <Input
          ref={inputRef}
          height={'47px'}
          borderWidth={'1px'}
          borderColor={'neutral.50'}
          borderRadius={'8px'}
          placeholder={focusInput ? '' : 'Số điện thoại'}
          placeholderTextColor={'neutral.800'}
          value={phoneNumber}
          onChangeText={onChangePhone}
          onBlur={onChangeBlur}
          onFocus={onChangeFocus}
          _input={{
            color: 'neutral.800',
            fontStyle: 'normal',
            fontSize: '14px',
            fontWeight: 400,
            textAlign: 'center',
          }}
          _focus={{
            backgroundColor: 'primary.400',
            borderColor: 'primary.200',
          }}
        />
        <Button
          bgColor={'primary.200'}
          borderRadius={'8px'}
          height={'48px'}
          _text={{
            fontSize: '14px',
            fontWeight: 400,
            fontStyle: 'normal',
            color: 'text.300',
          }}
          onPress={handleLoginWithPhonenumber}>
          {phoneNumber ? 'Đăng nhập' : 'Tiếp tục'}
        </Button>
        <Box mt={'10px'}>
          <Divider height={'1px'} backgroundColor={'neutral.900'} />
          <Center>
            <Box
              width={'50px'}
              height={'20px'}
              marginTop={'-10px'}
              backgroundColor={'white'}
              _text={{
                textAlign: 'center',
                fontSize: '14px',
                color: 'neutral.900',
                lineHeight: '20px',
              }}>
              Hoặc
            </Box>
          </Center>
        </Box>
        {/* Feature login with Google */}
        <Button
          height={'48px'}
          backgroundColor={'transparent'}
          borderWidth={'1px'}
          borderColor={'neutral.50'}
          borderRadius={'8px'}
          onPress={() =>
            handleLoginWithGoogle().then(() =>
              console.log('SignIn Google successFly'),
            )
          }>
          <HStack
            space={3}
            width={'100%'}
            justifyContent={'flex-start'}
            alignItems={'center'}>
            <Image
              source={imageSocial.GOOGLE}
              style={{
                height: height * 0.06,
                width: width * 0.06,
                resizeMode: 'contain',
              }}
            />
            <Text
              fontStyle={'normal'}
              fontSize={'14px'}
              fontWeight={400}
              color={'neutral.800'}>
              Tiếp tục với Google
            </Text>
          </HStack>
        </Button>
        {/* Feature login with Facebook */}
        <Button
          height={'48px'}
          backgroundColor={'transparent'}
          borderWidth={'1px'}
          borderColor={'neutral.50'}
          borderRadius={'8px'}>
          <HStack space={3} justifyContent={'center'} alignItems={'center'}>
            <Image
              source={imageSocial.FB}
              style={{
                height: height * 0.06,
                width: width * 0.06,
                resizeMode: 'contain',
              }}
            />
            <Text
              fontStyle={'normal'}
              fontSize={'14px'}
              fontWeight={400}
              color={'neutral.800'}>
              Tiếp tục với Facebook
            </Text>
          </HStack>
        </Button>
        {/* Feature login with Apple */}
        <Button
          height={'48px'}
          backgroundColor={'transparent'}
          borderWidth={'1px'}
          borderColor={'neutral.50'}
          borderRadius={'8px'}
          onPress={handleLoginWithApple}>
          <HStack space={3} alignItems={'center'}>
            <Image
              source={imageSocial.APPLE}
              style={{
                height: height * 0.06,
                width: width * 0.06,
                resizeMode: 'contain',
              }}
            />
            <Text
              fontStyle={'normal'}
              fontSize={'14px'}
              fontWeight={400}
              color={'neutral.800'}>
              Tiếp tục với Apple
            </Text>
          </HStack>
        </Button>
        {/* redirect Sreen Register */}
        <Center mt={'40px'}>
          <Text fontSize={'14px'} fontWeight={400} color={'text.200'}>
          Bạn đã từng đăng ký?Đăng nhập{' '}
            <Link
              to={{ screen: LOGIN }}
              style={{
                color: '#216BCD',
                textDecorationLine: 'underline',
              }}>
              tại đây
            </Link>
          </Text>
        </Center>
      </VStack>
    </VStack>
  )
}

export default Register
