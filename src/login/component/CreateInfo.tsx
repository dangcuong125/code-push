import React from 'react'
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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { imageSocial } from '@clvtube/common/constants/imagePath'
import { Dimensions, Image } from 'react-native'

const { width, height } = Dimensions.get('window')

const CreateInfo = () => {
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
        <Input
          type="text"
          InputLeftElement={
            <Icon
              as={<Feather name="phone" />}
              size={25}
              ml={2}
              color={'neutral.900'}
            />
          }
          height={'48px'}
          borderRadius={'8px'}
          borderWidth={'1px'}
          borderColor={'neutral.50'}
          placeholder="Số điện thoại"
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
        />
        <Input
          type="text"
          InputLeftElement={
            <Icon
              as={<Ionicons name="md-mail-unread-outline" />}
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
        />
        <Input
          type="text"
          InputLeftElement={
            <Icon
              as={<MaterialCommunityIcons name="text-recognition" />}
              size={25}
              ml={2}
              color={'neutral.900'}
            />
          }
          height={'48px'}
          borderRadius={'8px'}
          borderWidth={'1px'}
          borderColor={'neutral.50'}
          placeholder="Họ"
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
        />
        <Input
          type="text"
          InputLeftElement={
            <Icon
              as={<MaterialCommunityIcons name="text-recognition" />}
              size={25}
              ml={2}
              color={'neutral.900'}
            />
          }
          height={'48px'}
          borderRadius={'8px'}
          borderWidth={'1px'}
          borderColor={'neutral.50'}
          placeholder="Tên"
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
        />
      </VStack>
      <Button
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
