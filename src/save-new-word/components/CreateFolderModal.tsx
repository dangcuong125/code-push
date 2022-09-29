import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import { Button, Flex, Input, Modal, Text } from 'native-base';
import React from 'react';
import { useCreateNewFolder } from '../hooks/useCreateNewFolder';
import {
  resetErrorMsgForCreateFolder,
  setValueNameNewFolder,
} from '../reducer/saveNewWord';

interface ICreateFolderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateFolderModal = ({
  isOpen,
  onClose,
}: ICreateFolderModalProps) => {
  const dispatch = useAppDispatch();
  const { mutate } = useCreateNewFolder();

  const valueNameNewFolder = useAppSelector(
    state => state.saveNewWordReducer.valueNameNewFolder,
  );
  const errorMsg = useAppSelector(
    state => state.saveNewWordReducer.errorMsgForCreateFolder,
  );

  const handleCreateFolder = () => {
    if (valueNameNewFolder === '') {
      dispatch(resetErrorMsgForCreateFolder('Vui lòng nhập tên thư mục'));
    }
    mutate(
      { title: valueNameNewFolder },
      {
        onSuccess: () => {
          dispatch(setValueNameNewFolder(''));
          onClose();
        },
      },
    );
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content>
        <Modal.Body>
          <Text color="text.200" fontSize="16px" textAlign="center" mt="34px">
            Tạo thư mục mới
          </Text>
          <Input
            placeholder="Nhập tên thư mục"
            color="text.200"
            mt="16px"
            height="36px"
            value={valueNameNewFolder}
            placeholderTextColor="neural.5"
            onChangeText={text => {
              dispatch(resetErrorMsgForCreateFolder(''));
              dispatch(setValueNameNewFolder(text));
            }}
          />
          {errorMsg && (
            <Text color="#D70000" marginTop="5px" fontSize="12px">
              {errorMsg}
            </Text>
          )}
        </Modal.Body>
        <Flex
          mt="5px"
          direction="row"
          justifyContent="flex-end"
          mr="38px"
          mb="32px">
          <Button
            borderColor="neural.5"
            borderWidth="1px"
            bgColor="text.800"
            color="text.600"
            _text={{ color: 'text.600' }}
            mr="16px"
            onPress={() => {
              onClose();
              dispatch(resetErrorMsgForCreateFolder(''));
              dispatch(setValueNameNewFolder(''));
            }}>
            Cancel
          </Button>
          <Button bgColor="text.600" onPress={handleCreateFolder}>
            Save
          </Button>
        </Flex>
      </Modal.Content>
    </Modal>
  );
};
