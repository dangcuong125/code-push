import {
  Box,
  // Button,
  Flex,
  Icon,
  Input,
  Select,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { IGroupItem, SaveNewWordProps } from '../interface';
import { useGetWordGroupList } from '../hooks/useGetWordGroupList';
import { useTranslation } from 'react-i18next';
import { useGetSavedWordDetail } from '../hooks/useGetSavedWordDetail';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import { useSaveNewWord } from '../hooks/useSaveNewWord';
import { SAVED_WORD_LIST } from '@clvtube/common/constants/route.constants';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import {
  getGroupId,
  getValueSelectFolder,
  resetErrorMessageForSelectFolder,
  showCreateFolderModal,
  showSuccessfulModal,
} from '../reducer/saveNewWord';
import { SuccessfulModal } from '@clvtube/common/components/successful-modal/index';
import { CreateFolderModal } from './CreateFolderModal';

export const FormSaveNewWord = ({ navigation }: SaveNewWordProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const valueSelectFolder = useAppSelector(
    state => state.saveNewWordReducer.valueSelectFolder,
  );
  const errorMessage = useAppSelector(
    state => state.saveNewWordReducer.errorMessageForSelectFolder,
  );
  const wordNeedToBeSaved = useAppSelector(
    state => state.saveNewWordReducer.wordNeedToBeSaved,
  );
  const isOpenSuccessfullModal = useAppSelector(
    state => state.saveNewWordReducer.isOpenSuccessfullModal,
  );
  const isOpenCreateFolderModal = useAppSelector(
    state => state.saveNewWordReducer.isOpenCreateFolderModal,
  );

  const { data } = useGetWordGroupList();
  const { data: wordDetail } = useGetSavedWordDetail(wordNeedToBeSaved);
  const { mutate } = useSaveNewWord();

  const newWord = wordDetail?.data?.items?.find(item => item);

  const groupList = data?.data?.items;

  const handleSaveNewWord = () => {
    if (valueSelectFolder === '') {
      dispatch(resetErrorMessageForSelectFolder('Vui lòng chọn thư mục'));
    }
    mutate(
      {
        groupId: Number(valueSelectFolder),
        evdictId: newWord?.idx,
      },
      {
        onSuccess: () => {
          dispatch(showSuccessfulModal(true));
        },
      },
    );
  };
  return (
    <VStack>
      <Flex direction="row" justifyContent="space-between" width="95%">
        <Icon
          onPress={() => {
            navigation.goBack();
            dispatch(resetErrorMessageForSelectFolder(''));
          }}
          as={AntDesign}
          name="arrowleft"
          color="text.200"
          marginLeft="17.67px"
          size="6"
        />
        <Text
          fontSize="16px"
          color="text.500"
          fontWeight={600}
          onPress={handleSaveNewWord}>
          {t('save')}
        </Text>
      </Flex>
      <Box marginTop="19px" margin="auto">
        <Text fontSize="16px" color="text.200" fontWeight={400}>
          {t('newWord')}
        </Text>
        <Input
          width="343px"
          color="text.200"
          height="46px"
          marginTop="12px"
          borderRadius="10px"
          isDisabled={true}
          value={newWord?.word}
        />
        <Text
          fontSize="16px"
          color="text.200"
          fontWeight={400}
          marginTop="17px">
          {t('folder')}
        </Text>
        <Select
          width="343px"
          height="43px"
          borderRadius="10px"
          accessibilityLabel="Trống"
          placeholder="Trống"
          color="text.200"
          placeholderTextColor="text.200"
          onValueChange={value => {
            dispatch(getValueSelectFolder(value));
            dispatch(resetErrorMessageForSelectFolder(''));
          }}
          mt={1}>
          {/* <Select.Item
            label="Add new folder"
            // onPress={() => dispatch(showCreateFolderModal(true))}
            value={'1'}
            _text={{ color: 'text.200' }}
          /> */}
          {groupList?.map((item: IGroupItem) => (
            <Select.Item
              label={item?.title}
              value={item?.id?.toString()}
              key={item?.id}
              _text={{ color: 'text.200' }}
            />
          ))}
        </Select>
        {errorMessage && (
          <Text color="#D70000" marginTop="5px">
            {errorMessage}
          </Text>
        )}
        <Text
          fontSize="16px"
          color="text.200"
          fontWeight={400}
          marginTop="17px">
          {t('example')}
        </Text>
        <Input
          width="343px"
          marginTop="12px"
          height="90px"
          borderRadius="10px"
          color="text.200"
          isDisabled={true}
          value={newWord?.example}
        />
        <Box marginTop="30px">
          <Text
            bgColor="neural.1"
            padding="10px"
            borderRadius="10px"
            marginTop="10px"
            borderWidth="1px"
            color="text.200"
            onPress={() => {
              dispatch(showCreateFolderModal(true));
            }}
            borderColor="text.200">
            Thêm danh mục mới
          </Text>
          {groupList?.map((item: IGroupItem) => (
            <Text
              key={item?.id}
              bgColor="neural.1"
              padding="10px"
              borderRadius="10px"
              marginTop="10px"
              borderWidth="1px"
              color="text.200"
              onPress={() => {
                dispatch(getGroupId(item?.id));
                navigation.navigate(SAVED_WORD_LIST, {});
              }}
              borderColor="text.200">
              {item?.title}
            </Text>
          ))}
        </Box>
      </Box>
      <SuccessfulModal
        isOpen={isOpenSuccessfullModal}
        content="Bạn đã lưu từ vựng thành công!"
        onExit={() => {
          navigation.goBack();
          dispatch(showSuccessfulModal(false));
        }}
        onClose={() => dispatch(showSuccessfulModal(false))}
      />
      <CreateFolderModal
        isOpen={isOpenCreateFolderModal}
        onClose={() => dispatch(showCreateFolderModal(false))}
      />
    </VStack>
  );
};
