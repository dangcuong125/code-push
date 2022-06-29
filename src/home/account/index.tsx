import React from 'react';

import { Image } from 'react-native';
import { Box, HStack, Heading, Pressable, ScrollView, Text, VStack } from 'native-base';

import Feather from 'react-native-vector-icons/Feather';
import Fontiso from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useAppSelector } from '../../common/hooks/useAppSelector';

const Account = () => {
  const authState = useAppSelector(state => state.authReducer);

  return (
    <ScrollView bgColor={'white'}>
      <VStack bgColor={'white'} height={'100%'} safeAreaX={4} safeAreaTop={12}>
      <HStack space={4} alignItems={'center'} my={8}>
        <Image
          source={{
            uri: 'https://imgs.search.brave.com/JRnuikW-t9S559YrN-ZsOQy95aT8hanL7NfB4DgiIRE/rs:fit:1200:720:1/g:ce/aHR0cDovL3ZuY3Bo/YXRob2MuY29tL1Vw/bG9hZC9pbWFnZXMv/TmdoaWVuLWN1dS9x/dWFuLXZvLXRodW9u/Z18xLmpwZw',
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
            { authState.name }
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
            { authState.email }
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
      <VStack mt={3}>
        {/* Edit Account */}
        <Pressable>
          <Box
            height={'57px'}
            px={5}
            borderRadius={'13px'}
            borderWidth={'1px'}
            borderColor={'#84D6FC'}>
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
              <SimpleLineIcons name="arrow-right" size={15} color={'#999999'} />
            </HStack>
          </Box>
        </Pressable>
        {/* Notifycation */}
        <Pressable>
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
              <SimpleLineIcons name="arrow-right" size={15} color={'#999999'} />
            </HStack>
          </Box>
        </Pressable>
        {/* Like */}
        <Pressable>
          <Box height={'57px'} px={5} borderRadius={'13px'}>
            <HStack
              height={'100%'}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <HStack space={4} alignItems={'center'}>
                <Fontiso name="heart-alt" size={23} color={'#292D32'} />
                <Text
                  color={'#000000'}
                  fontStyle={'normal'}
                  fontSize={'14px'}
                  fontWeight={400}>
                  Yêu thích
                </Text>
              </HStack>
              <SimpleLineIcons name="arrow-right" size={15} color={'#999999'} />
            </HStack>
          </Box>
        </Pressable>
        {/* Language */}
        <Pressable>
          <Box height={'57px'} px={5} borderRadius={'13px'}>
            <HStack
              height={'100%'}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <HStack space={4} alignItems={'center'}>
                <MaterialCommunityIcons
                  name="format-text"
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
              <SimpleLineIcons name="arrow-right" size={15} color={'#999999'} />
            </HStack>
          </Box>
        </Pressable>
        {/* Help center */}
        <Pressable>
          <Box height={'57px'} px={5} borderRadius={'13px'}>
            <HStack
              height={'100%'}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <HStack space={4} alignItems={'center'}>
                <MaterialCommunityIcons
                  name="information-outline"
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
              <SimpleLineIcons name="arrow-right" size={15} color={'#999999'} />
            </HStack>
          </Box>
        </Pressable>
        {/* Logout */}
        <Pressable>
          <Box height={'57px'} px={5} borderRadius={'13px'}>
            <HStack
              height={'100%'}
              justifyContent={'flex-start'}
              alignItems={'center'}
              space={4}>
              <Ionicons name="md-log-out-outline" size={23} color={'#DC3545'} />
              <Text
                color={'#DC3545'}
                fontStyle={'normal'}
                fontSize={'14px'}
                fontWeight={400}>
                Đăng xuất
              </Text>
            </HStack>
          </Box>
        </Pressable>
      </VStack>
    </VStack>
  </ScrollView>
  );
};

export default Account;
