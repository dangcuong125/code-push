import { Flex, Icon, Text } from 'native-base';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const CorrectToast = () => {
  return (
    <Flex
      borderRadius="10px"
      direction="row"
      alignItems="center"
      bgColor="popup.success"
      height="50px"
      width="200px">
      <Icon
        name="checkmark-circle"
        as={Ionicons}
        size="8"
        margin="auto"
        color="neural.1"
        height="20px"
      />
      <Text fontSize="18px" color="neural.1" margin="auto" fontWeight="500">
        Chính xác!
      </Text>
    </Flex>
  );
};
