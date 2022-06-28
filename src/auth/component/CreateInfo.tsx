import React, { useState } from 'react'
import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Heading,
  Icon,
  Input,
  VStack,
} from 'native-base'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { imageSocial } from '@clvtube/common/constants/imagePath'
import { Dimensions, Image } from 'react-native'
import { useAppSelector } from '../../common/hooks/useAppSelector'
import { useAppDispatch } from '../../common/hooks/useAppDispatch'
import { updateAccountWithAuthGoogle } from '../slice'
import { useRegisterMutation } from '../hook/useAuthMutation'
import { REGISTER_SUCCESS } from '../../common/constants/route.constants'
import { CreateInfoProps } from '../../common/navigators/Root'


const { width, height } = Dimensions.get('window')

const CreateInfo = ({ navigation }: CreateInfoProps) => {
  const authState = useAppSelector(state => state.authReducer)
  const { email, phone, name, address, firIdToken } = authState
  console.log({ authState })

  const [account, setAccount] = useState({
    email: email || '',
    phone: phone || '',
    name: name || '',
    address: address || '',
    firIdToken,
  })

  const { mutate } = useRegisterMutation()

  const dispatch = useAppDispatch()

  const handleSubmitToRegister = () => {
    dispatch(updateAccountWithAuthGoogle(account))
    mutate({
      email: authState.email,
      phone: authState.phone,
      address: authState.address,
      firIdToken: authState.firIdToken,
    }, {
      onSuccess: data => {
        console.log({ taodzo: data?.data })
        navigation.navigate(REGISTER_SUCCESS)
      },
      onError: () => {
        setAccount({
          ...account,
          phone: '',
          address: '',
        })
        dispatch(updateAccountWithAuthGoogle(account))
      },
    },
    )
  }

  return (
    <VStack height={'100%'} safeAreaX={4} safeAreaTop={12} bgColor={'white'}>
      <Box mt={5}>
        <AntDesign name="arrowleft" size={25} />
      </Box>
      <Heading
        width={'50%'}
        mt={6}
        mb={12}
        fontStyle={'normal'}
        fontSize={'24px'}
        fontWeight={600}
        color={'neutral.800'}
        lineHeight={'33px'}>
        Tạo tài khoản riêng của bạn
      </Heading>
      <VStack space={5} mb={10}>
        {/* label phone */}
        <Input
          onChangeText={text => {
            setAccount({ ...account, phone: text })
            // dispatch(updateAccountWithAuthGoogle({ phone: text }))
          }}
          type="text"
          value={phone}
          name='phone'
          isDisabled={Boolean(phone)}
          height={'48px'}
          borderRadius={'8px'}
          borderWidth={'1px'}
          borderColor={'neutral.50'}
          placeholder="Số điện thoại"
          placeholderTextColor={'neutral.300'}
          InputLeftElement={
            <Icon
              as={<Feather name="phone" />}
              size={25}
              ml={2}
              color={'neutral.900'}
            />
          }
          _input={{
            fontStyle: 'normal',
            fontSize: '14px',
            fontWeight: 400,
            color: 'neutral.800',
          }}
          _focus={{
            backgroundColor: 'primary.400',
            borderColor: 'primary.100',
            color: 'neutral.800',
          }}
          _disabled={{
            backgroundColor: '#3D9BE0',
          }}
        />
        {/* Label email */}
        <Input
          onChangeText={text => {
            setAccount({ ...account, phone: text })
            // dispatch(updateAccountWithAuthGoogle({ email: text }))
          }}
          type="text"
          value={account.email}
          name='email'
          isDisabled={Boolean(email)}
          autoCapitalize='none'
          InputLeftElement={
            <Icon
              as={<MaterialCommunityIcons name="email" />}
              size={25}
              ml={2}
              color={'neutral.900'}
            />
          }
          height={'48px'}
          borderRadius={'8px'}
          borderWidth={'1px'}
          borderColor={'neutral.50'}
          placeholder="Email"
          placeholderTextColor={'neutral.300'}
          _input={{
            fontStyle: 'normal',
            fontSize: '14px',
            fontWeight: 400,
            color: 'neutral.800',
          }}
          _focus={{
            backgroundColor: 'primary.400',
            borderColor: 'primary.100',
            color: 'neutral.800',
          }}
          _disabled={{
            backgroundColor: '#3D9BE0',
          }}
        />
        {/* Label name */}
        <Input
          onChangeText={text =>
            setAccount({ ...account, email: text })
            // dispatch(updateAccountWithAuthGoogle({ name: text }))
          }
          type="text"
          value={account.name}
          name="name"
          isDisabled={Boolean(name)}
          autoCapitalize='none'
          InputLeftElement={
            <Icon
              as={<Ionicons name="text" />}
              size={25}
              ml={2}
              color={'neutral.900'}
            />
          }
          height={'48px'}
          borderRadius={'8px'}
          borderWidth={'1px'}
          borderColor={'neutral.50'}
          placeholder="Họ tên"
          placeholderTextColor={'neutral.300'}
          _input={{
            fontStyle: 'normal',
            fontSize: '14px',
            fontWeight: 400,
            color: 'neutral.800',
          }}
          _focus={{
            backgroundColor: 'primary.400',
            borderColor: 'primary.100',
            color: 'neutral.800',
          }}
          _disabled={{
            backgroundColor: '#3D9BE0',
          }}
        />
        {/* Label address */}
        <Input
          onChangeText={text =>
            setAccount({ ...account, address: text })
            // dispatch(updateAccountWithAuthGoogle({ address: text }))
          }
          type="text"
          value={address}
          name="name"
          isDisabled={Boolean(address)}
          autoCapitalize='none'
          InputLeftElement={
            <Icon
              as={<Entypo name="address" />}
              size={25}
              ml={2}
              color={'neutral.900'}
            />
          }
          height={'48px'}
          borderRadius={'8px'}
          borderWidth={'1px'}
          borderColor={'neutral.50'}
          placeholder="Địa chỉ"
          placeholderTextColor={'neutral.300'}
          _input={{
            fontStyle: 'normal',
            fontSize: '14px',
            fontWeight: 400,
            color: 'neutral.800',
          }}
          _focus={{
            backgroundColor: 'primary.400',
            borderColor: 'primary.100',
            color: 'neutral.800',
          }}
          _disabled={{
            backgroundColor: '#3D9BE0',
          }}
        />

      </VStack>
      <Button
        onPress={handleSubmitToRegister}
        bgColor={'primary.200'}
        borderRadius={'8px'}
        height={'48px'}
        mt={10}
        _text={{
          fontSize: '14px',
          fontWeight: 400,
          fontStyle: 'normal',
          color: 'text.700',
        }}>
        Đăng ký
      </Button>
      <Box mt={12}>
        <Divider height={'1px'} backgroundColor={'neutral.900'} />
        <Center>
          <Box
            width={'35%'}
            height={'20px'}
            marginTop={'-10px'}
            backgroundColor={'white'}
            _text={{
              textAlign: 'center',
              fontSize: '14px',
              color: 'neutral.900',
              lineHeight: '20px',
            }}>
            hoặc tiếp tục với
          </Box>
        </Center>
      </Box>
      <HStack mt={6} justifyContent={'center'} space={5}>
        <Box
          w={'44px'}
          h={'44px'}
          bgColor={'white'}
          alignItems={'center'}
          justifyContent={'center'}
          borderRadius={'22px'}
          borderWidth={'1px'}
          borderColor={'#DEDEDE'}
          lineHeight={'44px'}>
          <Image
            source={imageSocial.GOOGLE}
            style={{
              height: height * 0.06,
              width: width * 0.06,
              resizeMode: 'contain',
            }}
          />
        </Box>
        <Box
          w={'44px'}
          h={'44px'}
          bgColor={'#315EC3'}
          alignItems={'center'}
          justifyContent={'center'}
          borderRadius={'22px'}
          borderWidth={'1px'}
          borderColor={'#315EC3'}
          lineHeight={'44px'}>
          <Image
            source={imageSocial.FB}
            style={{
              height: height * 0.07,
              width: width * 0.07,
              resizeMode: 'contain',
            }}
          />
        </Box>
        <Box
          w={'44px'}
          h={'44px'}
          bgColor={'text.200'}
          alignItems={'center'}
          justifyContent={'center'}
          borderRadius={'22px'}
          borderWidth={'1px'}
          borderColor={'text.200'}
          lineHeight={'44px'}>
          <Image
            source={imageSocial.APPLE}
            style={{
              height: height * 0.1,
              width: width * 0.1,
              resizeMode: 'contain',
            }}
          />
        </Box>
      </HStack>
    </VStack>
  )
}

export default CreateInfo
