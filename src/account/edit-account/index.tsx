import { useNavigation } from '@react-navigation/native';
import {
  Avatar,
  Button,
  FormControl,
  HStack,
  Heading,
  Input,
  Text,
  VStack,
} from 'native-base';
import React, { useEffect, useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import AntDeisgn from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ChangeAvatar from './component/ChangeAvatar';
import Popup from '@clvtube/common/components/popup';
import { ACCOUNT_ROUTE } from '../../common/constants/route.constants';
import { useGetInfoUser, usePostInfoUser } from '../hooks/useAccount';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import { imageNotify } from '../../common/constants/imagePath';

const EditAccount = () => {
  const [avatar, setAvatar] = useState('');
  const [showModal, setShowModal] = useState<Boolean>(false);
  const [showModalNotify, setShowModalNotify] = useState<Boolean>(false);
  const [infoUser, setInfoUser] = useState({
    avatarId: 0,
    email: '',
    phone: '',
    fullname: '',
  });

  const { isTypeAuthPhone } = useAppSelector(state => state.authReducer);
  const { data: DataInfoUser } = useGetInfoUser();
  const { mutate } = usePostInfoUser();

  if (isTypeAuthPhone) {
    Alert.alert('Ban Auth with Phone');
  }

  useEffect(() => {
    // setAvatar(DataInfoUser?.data.avatar.url);
    setInfoUser({
      ...infoUser,
      avatarId: DataInfoUser?.data.avatar.id,
      email: DataInfoUser?.data.client.email,
      phone: DataInfoUser?.data.client.phone,
      fullname: DataInfoUser?.data.client.fullname,
    });
  }, [DataInfoUser?.data]);

  const navigator = useNavigation();

  const handleSubmitInfoUser = () => {
    console.log({ infoUser });
    if (!infoUser.email || !infoUser.phone || !infoUser.fullname) {
      Alert.alert('Bạn vui lòng nhập đủ thông tin rồi lưu nhé! ⛔️');
    }

    // dispatch(updateAccountWithAuthGoogle({ fullname: 'taodzo' }));

    mutate(
      {
        avatarId: Number(infoUser.avatarId),
        email: infoUser.email,
        phone: infoUser.phone,
        fullname: infoUser.fullname,
      },
      {
        onSuccess: () => {
          setShowModalNotify(true);
        },
        onError: () => {
          Alert.alert('Error ❌');
        },
      },
    );
  };

  const handleNavigate = () => {
    navigator.navigate(ACCOUNT_ROUTE.INDEX, {});
  };

  return (
    <VStack safeAreaTop={12} safeAreaX={4} bgColor={'white'} height={'100%'}>
      <HStack space={3}>
        <AntDeisgn
          name="arrowleft"
          size={25}
          color="black"
          onPress={() => navigator.goBack()}
        />
        <Heading
          fontStyle={'normal'}
          fontSize={'16px'}
          fontWeight={600}
          lineHeight={'22px'}
          color={'neural.10'}>
          Chỉnh sửa tài khoản
        </Heading>
      </HStack>
      <HStack space={4} alignItems={'flex-start'} my={8}>
        <Avatar
          bg="amber.500"
          source={{
            uri: `${avatar}`,
          }}
          size="xl">
          TD
          <Avatar.Badge bgColor={'transparent'} borderWidth={0}>
            <FontAwesome
              name="edit"
              size={22}
              onPress={() => setShowModal(true)}
            />
          </Avatar.Badge>
        </Avatar>
        <VStack space={1}>
          <Heading
            fontStyle={'normal'}
            fontSize={'12px'}
            fontWeight={400}
            lineHeight={'16px'}
            color={'neural.10'}>
            Tên tài khoản
          </Heading>
          <Text
            fontStyle={'normal'}
            fontSize={'10px'}
            fontWeight={400}
            color={'#4D4D4D'}>
            phanthanhtao.taodzo.96@gmail.com
          </Text>
        </VStack>
      </HStack>
      <VStack space={7}>
        <FormControl>
          <FormControl.Label>
            <Text
              fontStyle={'normal'}
              fontSize={'14px'}
              fontWeight={400}
              lineHeight={'19px'}
              color={'neural.10'}>
              Thay đổi tên hiển thị
            </Text>
          </FormControl.Label>
          <Input
            type="text"
            name="fullname"
            value={infoUser.fullname}
            onChangeText={text => setInfoUser({ ...infoUser, fullname: text })}
            borderWidth={'1px'}
            borderColor={'neural.2'}
            borderRadius={'8px'}
            height={'48px'}
            placeholder="Nhập tên mới"
            placeholderTextColor={'neural.5'}
            selectionColor={'neural.10'}
            _input={{
              fontStyle: 'normal',
              fontSize: '14px',
              fontWeight: 400,
              color: 'neural.10',
            }}
            _focus={{
              backgroundColor: 'transparent',
              borderColor: 'primary.100',
            }}
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>
            <Text
              fontStyle={'normal'}
              fontSize={'14px'}
              fontWeight={400}
              lineHeight={'19px'}
              color={'neural.10'}>
              Thay đổi số điện thoại
            </Text>
          </FormControl.Label>
          <Input
            type="text"
            name="phone"
            value={infoUser.phone}
            isDisabled={isTypeAuthPhone}
            onChangeText={text => setInfoUser({ ...infoUser, phone: text })}
            borderWidth={'1px'}
            borderColor={'neural.2'}
            borderRadius={'8px'}
            height={'48px'}
            placeholder="Nhập số điện thoại"
            placeholderTextColor={'neural.5'}
            selectionColor={'neural.10'}
            _input={{
              fontStyle: 'normal',
              fontSize: '14px',
              fontWeight: 400,
              color: 'neural.10',
            }}
            _focus={{
              backgroundColor: 'transparent',
              borderColor: 'primary.100',
            }}
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>
            <Text
              fontStyle={'normal'}
              fontSize={'14px'}
              fontWeight={400}
              lineHeight={'19px'}
              color={'neural.10'}>
              Thay đổi email
            </Text>
          </FormControl.Label>
          <Input
            type="text"
            name="email"
            value={infoUser.email}
            isDisabled={!isTypeAuthPhone}
            onChangeText={text => setInfoUser({ ...infoUser, email: text })}
            borderWidth={'1px'}
            borderColor={'neural.2'}
            borderRadius={'8px'}
            height={'48px'}
            placeholder="Nhập email mới"
            placeholderTextColor={'neural.5'}
            selectionColor={'neural.10'}
            _input={{
              fontStyle: 'normal',
              fontSize: '14px',
              fontWeight: 400,
              color: 'neural.10',
            }}
            _focus={{
              backgroundColor: 'transparent',
              borderColor: 'primary.100',
            }}
          />
        </FormControl>
        <TouchableOpacity>
          <Button
            bgColor={'#216BCD'}
            borderRadius={'8px'}
            height={'48px'}
            _text={{
              fontSize: '14px',
              fontWeight: 600,
              lineHeight: '20px',
              fontStyle: 'normal',
              color: '#FDFDFD',
            }}
            onPress={handleSubmitInfoUser}>
            Lưu
          </Button>
        </TouchableOpacity>
      </VStack>

      {showModal && (
        <ChangeAvatar
          showModal={showModal}
          setShowModal={setShowModal}
          setAvatar={setAvatar}
          infoUser={infoUser}
          setInfoUser={setInfoUser}
        />
      )}

      {showModalNotify && (
        <Popup
          showModal={showModalNotify}
          setShowModal={setShowModalNotify}
          isSuccess={false}
          title="Thành công"
          description="Bạn đã cập nhật tài khoản thành công!"
          icon={imageNotify.SUCCESS}
          onPress={handleNavigate}
        />
      )}
    </VStack>
  );
};

export default EditAccount;
