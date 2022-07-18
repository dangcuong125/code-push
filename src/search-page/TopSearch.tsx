import React from 'react';
import { Button, HStack, Text, VStack } from 'native-base';
import { TouchableOpacity } from 'react-native';

const TopSearch = () => {
  return (
    <VStack safeArea={4}>
      <Text
        fontStyle={'normal'}
        fontSize={'16px'}
        fontWeight={400}
        lineHeight={'22px'}
        color={'neural.9'}>
        Top tìm kiếm
      </Text>
      <HStack space={3} py={2} flexWrap={'wrap'}>
        {['photograpy', 'craft', 'art', 'process', 'makerting', 'Taodzo'].map(
          (item, index) => (
            <TouchableOpacity key={index}>
              <Button
                borderRadius={8}
                px={5}
                marginBottom={2}
                bgColor={'#E6E6E6'}
                _text={{
                  color: '#282F3E',
                }}>
                {item}
              </Button>
            </TouchableOpacity>
          ),
        )}
      </HStack>
    </VStack>
  );
};

export default TopSearch;
