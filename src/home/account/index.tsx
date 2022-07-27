import { useNavigation } from '@react-navigation/native';
import { Avatar, Box, HStack, Heading, ScrollView, Text, VStack } from 'native-base';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import AntDeisgn from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import { useAppSelector } from '../../common/hooks/useAppSelector';

import SettingNotify from '@clvtube/account/component/SettingNotify';

import DarkMode from '@clvtube/account/component/DarkMode';
import Language from '@clvtube/account/component/Language';
import { useGetInfoUser } from '@clvtube/account/hooks/useAccount';
import { ACCOUNT_ROUTE } from '../../common/constants/route.constants';

const Account = () => {
  const [showModalSettingNotify, setShowModalSettingNotify] =
    useState<boolean>(false);
  const [showModalLanguage, setShowModalLanguage] = useState<boolean>(false);
  const [showModalDarkMode, setShowModalDarkMode] = useState<boolean>(false);
  const [levelUser, setLevelUser] = useState('');
  const [avatar, setAvatar] = useState('');

  console.log({ avatar });

  const authState = useAppSelector(state => state.authReducer);
  const { data: DataInfoUser } = useGetInfoUser();

  const navigator = useNavigation();

  useEffect(() => {
    console.log({ userTaodzo: DataInfoUser?.data });
    setLevelUser(DataInfoUser?.data.levelKey);
    setAvatar(DataInfoUser?.data.avatar.url);
  }, [DataInfoUser?.data]);

  return (
    <ScrollView bgColor={'white'}>
      <VStack height={'100%'} safeAreaX={4} safeAreaTop={12} bgColor={'white'}>
        {/* ✅ Element Info User */}
        <HStack space={4} alignItems={'center'} my={8}>
        <Avatar
          bg="amber.500"
          source={{
            uri: `${avatar}`,
          }}
          size="xl">
          TD
        </Avatar>
          <VStack space={1}>
            <Heading
              fontStyle={'normal'}
              fontSize={'16px'}
              fontWeight={600}
              color={'#000000'}>
              {authState.fullname}
            </Heading>
            <Text
              fontStyle={'normal'}
              fontSize={'10px'}
              fontWeight={400}
              color={'#4D4D4D'}>
              Thành viên mới
            </Text>
            <Text
              fontStyle={'normal'}
              fontSize={'12px'}
              fontWeight={400}
              color={'#4D4D4D'}>
              {authState.email}
            </Text>
            <HStack alignItems={'center'}>
              <Ionicons name="md-star-sharp" color={'#FFC107'} size={20} />
              <Text
                fontStyle={'normal'}
                fontSize={'12px'}
                fontWeight={400}
                color={'#4D4D4D'}>
                Trình độ: {levelUser}
              </Text>
            </HStack>
          </VStack>
        </HStack>

        {/* ✅ Element Feature Account */}
        <VStack mt={3}>
          {/* 🏆 Edit Account */}
          <TouchableOpacity
            onPress={() => navigator.navigate(ACCOUNT_ROUTE.EDIT_ACCOUNT, {})}>
            <Box
              height={'53px'}
              px={5}
              borderRadius={'13px'}
              // borderWidth={'1px'}
              // borderColor={'#84D6FC'}
            >
              <HStack
                height={'100%'}
                justifyContent={'space-between'}
                alignItems={'center'}>
                <HStack space={4} alignItems={'center'}>
                  <Feather name="user" size={23} color={'#292D32'} />
                  <Text
                    color={'#000000'}
                    fontStyle={'normal'}
                    fontSize={'14px'}
                    fontWeight={400}>
                    Chỉnh sửa tài khoản
                  </Text>
                </HStack>
                <SimpleLineIcons
                  name="arrow-right"
                  size={15}
                  color={'#999999'}
                />
              </HStack>
            </Box>
          </TouchableOpacity>

          {/* 🏆 Notifycation */}
          <TouchableOpacity onPress={() => setShowModalSettingNotify(true)}>
            <Box height={'57px'} px={5} borderRadius={'13px'}>
              <HStack
                height={'100%'}
                justifyContent={'space-between'}
                alignItems={'center'}>
                <HStack space={4} alignItems={'center'}>
                  <Ionicons
                    name="md-notifications-outline"
                    size={23}
                    color={'#292D32'}
                  />
                  <Text
                    color={'#000000'}
                    fontStyle={'normal'}
                    fontSize={'14px'}
                    fontWeight={400}>
                    Thông báo
                  </Text>
                </HStack>
                <SimpleLineIcons
                  name="arrow-right"
                  size={15}
                  color={'#999999'}
                />
              </HStack>
            </Box>
          </TouchableOpacity>
          {showModalSettingNotify && (
            <SettingNotify
              showModal={showModalSettingNotify}
              setShowModal={setShowModalSettingNotify}
            />
          )}

          {/* 🏆 Language */}
          <TouchableOpacity onPress={() => setShowModalLanguage(true)}>
            <Box height={'57px'} px={5} borderRadius={'13px'}>
              <HStack
                height={'100%'}
                justifyContent={'space-between'}
                alignItems={'center'}>
                <HStack space={4} alignItems={'center'}>
                  <MaterialIcons name="language" size={23} color={'#292D32'} />
                  <Text
                    color={'#000000'}
                    fontStyle={'normal'}
                    fontSize={'14px'}
                    fontWeight={400}>
                    Ngôn ngữ chính
                  </Text>
                </HStack>
                <SimpleLineIcons
                  name="arrow-right"
                  size={15}
                  color={'#999999'}
                />
              </HStack>
            </Box>
          </TouchableOpacity>
          {showModalLanguage && (
            <Language
              showModal={showModalLanguage}
              setShowModal={setShowModalLanguage}
            />
          )}

          {/* 🏆 DarkMode */}
          <TouchableOpacity onPress={() => setShowModalDarkMode(true)}>
            <Box height={'57px'} px={5} borderRadius={'13px'}>
              <HStack
                height={'100%'}
                justifyContent={'space-between'}
                alignItems={'center'}>
                <HStack space={4} alignItems={'center'}>
                  <MaterialCommunityIcons
                    name="theme-light-dark"
                    size={23}
                    color={'#292D32'}
                  />
                  <Text
                    color={'#000000'}
                    fontStyle={'normal'}
                    fontSize={'14px'}
                    fontWeight={400}>
                    Chế độ nền tối
                  </Text>
                </HStack>
                <SimpleLineIcons
                  name="arrow-right"
                  size={15}
                  color={'#999999'}
                />
              </HStack>
            </Box>
          </TouchableOpacity>
          {showModalDarkMode && (
            <DarkMode
              showModal={showModalDarkMode}
              setShowModal={setShowModalDarkMode}
            />
          )}

          {/* 🏆 Help center */}
          <TouchableOpacity>
            <Box height={'57px'} px={5} borderRadius={'13px'}>
              <HStack
                height={'100%'}
                justifyContent={'space-between'}
                alignItems={'center'}>
                <HStack space={4} alignItems={'center'}>
                  <MaterialIcons name="live-help" size={23} color={'#292D32'} />
                  <Text
                    color={'#000000'}
                    fontStyle={'normal'}
                    fontSize={'14px'}
                    fontWeight={400}>
                    Trung tâm trợ giúp
                  </Text>
                </HStack>
                <SimpleLineIcons
                  name="arrow-right"
                  size={15}
                  color={'#999999'}
                />
              </HStack>
            </Box>
          </TouchableOpacity>

          {/* Logout */}
          <TouchableOpacity>
            <Box height={'57px'} px={5} marginTop={2} borderRadius={'13px'}>
              <HStack
                height={'100%'}
                justifyContent={'flex-start'}
                alignItems={'center'}
                space={4}>
                <AntDeisgn name="logout" size={25} color={'#DC3545'} />
                <Text
                  color={'#DC3545'}
                  fontStyle={'normal'}
                  fontSize={'14px'}
                  fontWeight={400}>
                  Đăng xuất
                </Text>
              </HStack>
            </Box>
          </TouchableOpacity>
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default Account;
