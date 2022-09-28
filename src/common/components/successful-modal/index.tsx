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
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <Modal.Content width="311px" height="294px">
        <Image
          margin="auto"
          source={imageNotify.SUCCESS}
          width="64px"
          marginTop="24px"
          height="64px"
        />
        <Text margin="auto" marginTop="16px" fontWeight={500} fontSize="18px">
          Thành công
        </Text>
        <Text margin="auto" fontWeight={400} fontSize="14px">
          {content}
        </Text>
        <Button
          onPress={onClose}
          width="184px"
          margin="auto"
          bgColor="popup.success">
          Tiếp tục
        </Button>
        <Button variant="ghost" onPress={onExit} colorScheme="blueGray">
          Thoát
        </Button>
      </Modal.Content>
    </Modal>
  );
};
