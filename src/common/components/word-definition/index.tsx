import React from 'react';
import { Actionsheet, Center, Flex, Icon, Text } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { SAVE_NEW_WORD } from '@clvtube/common/constants/route.constants';

interface IWordDefinition {
  isOpen: boolean;
  onClose: () => void;
  content: string;
}

export const WordDefinition = ({
  isOpen,
  onClose,
  content,
}: IWordDefinition) => {
  const navigation = useNavigation();
  return (
    <Center>
      <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator={true}>
        <Actionsheet.Content>
          <Flex
            direction="row"
            w="100%"
            h={60}
            marginTop="16px"
            px={4}
            justifyContent="space-between">
            <Text fontSize="18px" color="text.200" fontWeight={500}>
              {content}
            </Text>
            <Icon
              onPress={() => {
                navigation.navigate(SAVE_NEW_WORD, {});
                onClose();
              }}
              size="6"
              as={Ionicons}
              name="bookmarks-outline"
            />
          </Flex>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  );
};
