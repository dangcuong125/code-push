import React, { useState } from 'react';
import {
  Box,
  Button,
  Heading,
  Icon,
  Input,
  VStack,
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import { Alert, Dimensions } from 'react-native';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { updateAccountWithAuthGoogle } from '../slice';
import { useRegisterMutation } from '../hook/useAuthMutation';
import { REGISTER_SUCCESS } from '../../common/constants/route.constants';
import { CreateInfoProps } from '../../common/navigators/RootNavigator';

const { width, height } = Dimensions.get('window');

const CreateAccount = ({ navigation }: CreateInfoProps) => {
  const authState = useAppSelector(state => state.authReducer);
  const { phone, email, fullname, firIdToken } = authState;
  console.log({ authState });

  const [account, setAccount] = useState({
    phone: phone || '',
    email: email || '',
    name: fullname || '',
    firIdToken,
  });

  const { mutate } = useRegisterMutation();

  const dispatch = useAppDispatch();

  const handleSubmitToRegister = async () => {
    if (!account.phone) {
      Alert.alert('Bạn vui lòng nhập số điện thoại để đăng ký 📲');
      return;
    }
    mutate(
      {
        email: account.email,
        phone: account.phone,
        fullname: account.name,
        firIdToken: account.firIdToken,
      },
      {
        onSuccess: data => {
          console.log({ taodzo: data?.data });
          dispatch(updateAccountWithAuthGoogle(account));
          navigation.navigate(REGISTER_SUCCESS, {});
        },
        onError: () => {
          setAccount({
            ...account,
            phone: '',
          });
          dispatch(updateAccountWithAuthGoogle(account));
          Alert.alert('Rất tiếc, bạn chưa đăng ký thành công tài khoản! 😒');
        },
      },
    );
  };

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
            setAccount({ ...account, phone: text });
            // dispatch(updateAccountWithAuthGoogle({ phone: text }));
          }}
          type="text"
          value={phone}
          name="phone"
          isDisabled={Boolean(phone)}
          height={'48px'}
          borderRadius={'8px'}
          borderWidth={'1px'}
          borderColor={'neural.2'}
          placeholder="Số điện thoại"
          placeholderTextColor={'neural.5'}
          selectionColor={'neural.10'}
          InputLeftElement={
            <Icon
              as={<Feather name="phone" />}
              size={5}
              ml={2}
              color={'neural.8'}
            />
          }
          _input={{
            fontStyle: 'normal',
            fontSize: '14px',
            fontWeight: 400,
            color: 'neural.10',
          }}
          _focus={{
            backgroundColor: 'primary.14',
            borderColor: 'primary.21',
          }}
          _disabled={{
            borderColor: 'neural.10',
          }}
        />
        {/* Label email */}
        <Input
          onChangeText={text => {
            setAccount({ ...account, email: text });
            // dispatch(updateAccountWithAuthGoogle({ email: text }))
          }}
          type="text"
          value={account.email}
          name="email"
          isDisabled={Boolean(email)}
          autoCapitalize="none"
          InputLeftElement={
            <Icon
              as={<Ionicons name="ios-mail-unread-outline" />}
              size={5}
              ml={2}
              color={'neural.8'}
            />
          }
          height={'48px'}
          borderRadius={'8px'}
          borderWidth={'1px'}
          borderColor={'neural.2'}
          placeholder="Email"
          placeholderTextColor={'neural.5'}
          selectionColor={'neural.10'}
          _input={{
            fontStyle: 'normal',
            fontSize: '14px',
            fontWeight: 400,
            color: 'neural.10',
          }}
          _focus={{
            backgroundColor: 'primary.400',
            borderColor: 'primary.100',
            color: 'neutral.800',
          }}
          _disabled={{
            borderColor: 'neural.10',
          }}
        />
        {/* Label name */}
        <Input
          onChangeText={
            text => setAccount({ ...account, name: text })
            // dispatch(updateAccountWithAuthGoogle({ name: text }))
          }
          type="text"
          value={account.name}
          name="name"
          // isDisabled={Boolean(name)}
          autoCapitalize="none"
          InputLeftElement={
            <Icon
              as={<MaterialIcons name="drive-file-rename-outline" />}
              size={5}
              ml={2}
              color={'neural.8'}
            />
          }
          height={'48px'}
          borderRadius={'8px'}
          borderWidth={'1px'}
          borderColor={'neural.2'}
          placeholder="Họ và tên"
          placeholderTextColor={'neural.5'}
          selectionColor={'neural.10'}
          _input={{
            fontStyle: 'normal',
            fontSize: '14px',
            fontWeight: 400,
            color: 'neural.10',
          }}
          _focus={{
            backgroundColor: 'primary.400',
            borderColor: 'primary.100',
            color: 'neutral.800',
          }}
          _disabled={{
            borderColor: 'neural.10',
          }}
        />
      </VStack>
      <Button
        onPress={handleSubmitToRegister}
        bgColor={'primary.21'}
        borderRadius={'8px'}
        height={'48px'}
        mt={100}
        _text={{
          fontSize: '14px',
          fontWeight: 400,
          fontStyle: 'normal',
          color: 'text.700',
        }}>
        Đăng ký
      </Button>

      {/* <Box mt={12}>
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
      </Box> */}

      {/* <HStack mt={6} justifyContent={'center'} space={5}>
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
      </HStack> */}

    </VStack>
  );
};

export default CreateAccount;
