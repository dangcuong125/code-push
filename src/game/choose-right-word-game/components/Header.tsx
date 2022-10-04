import { Flex, Icon, Text } from 'native-base';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import { useCountDown } from '@clvtube/common/hooks/useCountDown';

export const Header = () => {
  const navigation = useNavigation();
  const countDown = useCountDown(60, 1);
  return (
    <Flex direction="row" justifyContent="space-between">
      <Icon
        as={AntDesign}
        name="arrowleft"
        onPress={() => {
          navigation.goBack();
        }}
        color="text.600"
        marginLeft="17.67px"
        size="6"
      />
      <Flex direction="row" margin="auto">
        <Icon
          margin="auto"
          as={Octicons}
          name="clock"
          size="6"
          color="text.200"
        />
        <Text ml="10px" color="text.200" width="30px">
          {countDown}
        </Text>
      </Flex>
    </Flex>
  );
};
