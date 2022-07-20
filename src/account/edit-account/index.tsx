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
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import AntDeisgn from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ChangeAvatar from './component/ChangeAvatar';
import Popup from '@clvtube/common/components/popup';
import { ACCOUNT_ROUTE } from '../../common/constants/route.constants';

const EditAccount = () => {
  const [showModal, setShowModal] = useState<Boolean>(false);
  const [showModalNotify, setShowModalNotify] = useState<Boolean>(false);

  const navigator = useNavigation();

  const handleNavigate = () => {
    navigator.navigate(ACCOUNT_ROUTE.INDEX);
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
            uri: 'https://imgs.search.brave.com/sPPpVQcHjjA7hi9kQkQcaxub5zLmjd4QMvose6-svlM/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5u/OTE2d3E3TkMtcDZa/M3otdEZxQmdBSGFF/SyZwaWQ9QXBp',
          }}
          size="xl">
          NB
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
            onPress={() => {
              setShowModalNotify(true);
            }}>
            Lưu
          </Button>
        </TouchableOpacity>
      </VStack>

      {showModal && (
        <ChangeAvatar showModal={showModal} setShowModal={setShowModal} />
      )}

      {showModalNotify && (
        <Popup
          showModal={showModalNotify}
          setShowModal={setShowModalNotify}
          isSuccess={false}
          onPress={handleNavigate}
        />
      )}
    </VStack>
  );
};

export default EditAccount;
