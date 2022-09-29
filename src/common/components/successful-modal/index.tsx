import { Button, Image, Modal, Text } from 'native-base';
import React from 'react';
import { imageNotify } from '@clvtube/common/constants/imagePath';

interface ISuccessfulModal {
  isOpen: boolean;
  onClose: () => void;
  onExit: () => void;
  content: string;
}

export const SuccessfulModal = ({
  isOpen,
  onClose,
  content,
  onExit,
}: ISuccessfulModal) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" padding="10px">
      <Modal.Content width="311px" height="294px">
        <Image
          margin="auto"
          source={imageNotify.SUCCESS}
          width="64px"
          marginTop="24px"
          height="64px"
        />
        <Text
          margin="auto"
          marginTop="16px"
          fontWeight={500}
          fontSize="18px"
          color="text.200">
          Thành công
        </Text>
        <Text margin="auto" fontWeight={400} fontSize="14px" color="neural.10">
          {content}
        </Text>
        <Button
          onPress={onClose}
          width="184px"
          margin="auto"
          bgColor="popup.success">
          Tiếp tục
        </Button>
        <Button
          marginBottom={'10px'}
          variant="ghost"
          _text={{ color: 'text.500' }}
          onPress={onExit}
          colorScheme="blueGray">
          Thoát
        </Button>
      </Modal.Content>
    </Modal>
  );
};
