import React from 'react';
import { HStack } from 'native-base';
import AntDeisgn from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const IconHeader = () => {
  const navigator = useNavigation();

  return (
    <HStack
      justifyContent={'space-between'}
      alignItems={'center'}
      safeAreaX={4}>
      <AntDeisgn
        name="arrowleft"
        size={25}
        color="black"
        onPress={() => navigator.goBack()}
      />
      <HStack space={2}>
        <MaterialIcons name="filter-none" size={25} color="black" />
        <AntDeisgn name="setting" size={25} color="black" />
      </HStack>
    </HStack>
  );
};

export default IconHeader;
