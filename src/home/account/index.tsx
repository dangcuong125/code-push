import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import {
  Box,
  HStack,
  Heading,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import { useNavigation } from '@react-navigation/native';

import AntDeisgn from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import { useAppSelector } from '../../common/hooks/useAppSelector';

import SettingNotify from '@clvtube/account/component/SettingNotify';

import { ACCOUNT_ROUTE } from '../../common/constants/route.constants';
import Language from '@clvtube/account/component/Language';
import DarkMode from '@clvtube/account/component/DarkMode';


const Account = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalSettingNotify, setShowModalSettingNotify] = useState<boolean>(false);
  const [showModalLanguage, setShowModalLanguage] = useState<boolean>(false);
  const [showModalDarkMode, setShowModalDarkMode] = useState<boolean>(false);

  const navigator = useNavigation();

  const authState = useAppSelector(state => state.authReducer);

  return (
    <ScrollView bgColor={'white'}>
      <VStack
        height={'100%'}
        safeAreaX={4}
        safeAreaTop={12}
        bgColor={'white'}
      >

      {/* ✅ Element Info User */}
        <HStack space={4} alignItems={'center'} my={8}>
          <Image
            source={{
              uri: 'https://imgs.search.brave.com/4jk8lerwUosOsdsHE9MckoE6HWgVaJtrPg7UfjJMr_M/rs:fit:750:1000:1/g:ce/aHR0cHM6Ly9paDEu/cmVkYnViYmxlLm5l/dC9pbWFnZS4xMDk3/MjI5ODAyLjI2NzUv/YmcsZjhmOGY4LWZs/YXQsNzUweCwwNzUs/Zi1wYWQsNzUweDEw/MDAsZjhmOGY4Lmpw/Zw',
            }}
            style={{
              width: 100,
              height: 100,
              resizeMode: 'cover',
              borderRadius: 50,
            }}
          />
          <VStack space={1}>
            <Heading
              fontStyle={'normal'}
              fontSize={'16px'}
              fontWeight={600}
              color={'#000000'}>
              {authState.name}
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
                Trình độ: Trung cấp
              </Text>
            </HStack>
          </VStack>
        </HStack>

      {/* ✅ Element Feature Account */}
        <VStack mt={3}>

        {/* 🏆 Edit Account */}
          <TouchableOpacity
            onPress={() => navigator.navigate(ACCOUNT_ROUTE.EDIT_ACCOUNT, {})}
          >
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
          <TouchableOpacity
            onPress={() => setShowModalSettingNotify(true)}
          >
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
          {
            showModalSettingNotify &&
            <SettingNotify
              showModal={showModalSettingNotify}
              setShowModal={setShowModalSettingNotify}
            />
          }

        {/* 🏆 Language */}
          <TouchableOpacity
            onPress={() => setShowModalLanguage(true)}
          >
            <Box height={'57px'} px={5} borderRadius={'13px'}>
              <HStack
                height={'100%'}
                justifyContent={'space-between'}
                alignItems={'center'}>
                <HStack space={4} alignItems={'center'}>
                  <MaterialIcons
                    name="language"
                    size={23}
                    color={'#292D32'}
                  />
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
          {
            showModalLanguage &&
            <Language
              showModal={showModalLanguage}
              setShowModal={setShowModalLanguage}
            />
          }

        {/* 🏆 DarkMode */}
          <TouchableOpacity
            onPress={() => setShowModalDarkMode(true)}
          >
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
          {
            showModalDarkMode &&
            <DarkMode
              showModal={showModalDarkMode}
              setShowModal={setShowModalDarkMode}
            />
          }

        {/* 🏆 Help center */}
          <TouchableOpacity>
            <Box height={'57px'} px={5} borderRadius={'13px'}>
              <HStack
                height={'100%'}
                justifyContent={'space-between'}
                alignItems={'center'}>
                <HStack space={4} alignItems={'center'}>
                  <MaterialIcons
                    name="live-help"
                    size={23}
                    color={'#292D32'}
                  />
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
                <AntDeisgn
                  name="logout"
                  size={25}
                  color={'#DC3545'}
                />
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
