/* eslint-disable multiline-ternary */
import { Box, Flex, Icon, Input, Text } from 'native-base';
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useGetSavedWordList } from '../hooks/useGetSavedWordList';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import { useDeleteSavedWord } from '../hooks/useDeleteSavedWord';
import RenderHtml from 'react-native-render-html';
import { ISavedWordItem } from '../interface';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { getSearchWord, setSearchWord } from '../reducer/saveNewWord';

export const DisplaySavedWordList = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const groupId = useAppSelector(state => state?.saveNewWordReducer?.groupId);
  const search = useAppSelector(getSearchWord);
  const { data } = useGetSavedWordList(groupId, search);
  const { mutate } = useDeleteSavedWord();

  const wordList = data?.data?.items;

  return (
    <SafeAreaView style={{ backgroundColor: '#FFFFFF' }}>
      <Box height="100%">
        <Flex direction="row">
          <Icon
            onPress={() => {
              navigation.goBack();
            }}
            as={AntDesign}
            marginLeft="16px"
            flexGrow={0}
            name="arrowleft"
            flexBasis={'20%'}
            flexShrink={0}
            color="text.200"
            size="6"
          />
          <Text
            textAlign="center"
            flexBasis={'50%'}
            fontWeight={600}
            flexGrow={0}
            flexShrink={0}
            fontSize={'16px'}
            color="text.200">
            Từ vựng đã lưu
          </Text>
        </Flex>
        <Box height={'36px'}>
          <Input
            flexGrow={1}
            width="343px"
            fontSize={'16px'}
            autoCapitalize="none"
            borderWidth={1}
            borderColor="#F4F4F4"
            marginTop="15px"
            margin="auto"
            borderRadius={'8px'}
            color={'black'}
            bgColor={'text.900'}
            selectionColor={'black'}
            placeholder="Tìm kiếm"
            placeholderTextColor={'#999999'}
            InputLeftElement={
              <Icon as={AntDesign} name="search1" ml={3} mr={-2} />
            }
            onChangeText={value => {
              dispatch(setSearchWord(value));
            }}
          />
        </Box>
        {wordList?.length ? (
          <>
            <Text
              marginTop="25px"
              color="text.200"
              ml="16px"
              fontSize={'16px'}
              fontWeight={600}>
              Gần đây
            </Text>
            <ScrollView>
              <Box ml={'16px'}>
                {wordList?.map((item: ISavedWordItem) => (
                  <Box
                    key={item?.id}
                    borderColor="text.200"
                    borderWidth={1}
                    padding="10px"
                    marginTop="15px"
                    borderRadius="10px">
                    <Flex
                      direction="row"
                      height={'20px'}
                      justifyContent="space-between"
                      width="343px">
                      <Text fontWeight={400} fontSize={'16px'} color="text.200">
                        {item?.evDict?.word}
                      </Text>
                      <Icon
                        as={MaterialIcons}
                        name="delete"
                        size={6}
                        color="text.200"
                        onPress={() => {
                          mutate({
                            evdictToGroupIds: [item?.id],
                          });
                        }}
                      />
                    </Flex>
                    <RenderHtml source={{ html: item?.evDict?.detail }} />
                  </Box>
                ))}
              </Box>
            </ScrollView>
          </>
        ) : (
          <Text
            marginTop="19px"
            color="text.200"
            ml="16px"
            fontSize={'16px'}
            textAlign="center"
            fontWeight={400}>
            Bạn chưa có lưu từ trong thư mục này
          </Text>
        )}
      </Box>
    </SafeAreaView>
  );
};
