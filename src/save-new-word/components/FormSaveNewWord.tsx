import { Box, Flex, Icon, Input, Select, Text, VStack } from 'native-base';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { IGroupItem, SaveNewWordProps } from '../interface';
import { useGetWordGroupList } from '../hooks/useGetWordGroupList';
import { useTranslation } from 'react-i18next';
import { useGetSavedWordDetail } from '../hooks/useGetSavedWordDetail';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import { useSaveNewWord } from '../hooks/useSaveNewWord';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { getErrorMessage, getValueSelectFolder } from '../reducer/saveNewWord';

export const FormSaveNewWord = ({ navigation }: SaveNewWordProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const valueSelectFolder = useAppSelector(
    state => state.saveNewWordReducer.valueSelectFolder,
  );
  const [errorMessage, setErrorMessage] = useState('');

  const wordNeedToBeSaved = useAppSelector(
    state => state.saveNewWordReducer.wordNeedToBeSaved,
  );

  const { data } = useGetWordGroupList();
  const { data: wordDetail } = useGetSavedWordDetail(wordNeedToBeSaved);
  const { mutate } = useSaveNewWord();

  const newWord = wordDetail?.data?.items?.find(item => item);

  const groupList = data?.data?.items;

  const handleSaveNewWord = () => {
    if (valueSelectFolder === '') setErrorMessage('Vui long dien thong tin');
    mutate(
      {
        groupId: Number(valueSelectFolder),
        evdictId: newWord?.idx,
      },
      {
        onSuccess: () => {
          console.log('thanh cong');
        },
      },
    );
  };
  return (
    <VStack>
      <Flex justifyContent="space-between" alignItems="center" direction="row">
        <Icon
          onPress={() => navigation.goBack()}
          as={AntDesign}
          name="arrowleft"
          color="text.200"
          size="6"
        />
        <Box>
          <Text
            fontSize="16px"
            color="text.500"
            fontWeight={600}
            onPress={handleSaveNewWord}>
            {t('save')}
          </Text>
        </Box>
      </Flex>
      <Box marginTop="19px" margin="auto">
        <Text fontSize="16px" color="text.200" fontWeight={400}>
          {t('newWord')}
        </Text>
        <Input
          width="343px"
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
          onValueChange={value => {
            dispatch(getValueSelectFolder(value));
            setErrorMessage('');
          }}
          mt={1}>
          {groupList?.map((item: IGroupItem) => (
            <Select.Item
              label={item?.title}
              value={item?.id?.toString()}
              key={item?.id}
            />
          ))}
        </Select>
        {errorMessage && <Text color="#D70000">{errorMessage}</Text>}
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
          isDisabled={true}
          value={newWord?.example}
        />
      </Box>
    </VStack>
  );
};
