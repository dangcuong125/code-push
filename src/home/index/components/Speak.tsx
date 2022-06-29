import React from 'react';
import { Box, Flex, Heading, Image, Text } from 'native-base';
import { AUDIO_RECOMMEND } from '@clvtube/mocks/homePage';

export const Speak = () => {
  return (
    <Box bgColor="#FFFFFF" marginTop="16px" paddingBottom="15px">
      <Box marginLeft="16px">
        <Heading color="text.200" marginTop="12px">
          Speak
        </Heading>
        <Text color="text.200" fontSize="16px" fontWeight={600} marginTop="8px">
          Học bài audio được đề cử
        </Text>
        {AUDIO_RECOMMEND?.map((item, index) => (
          <Flex key={index} direction="row" marginTop={'20px'}>
            <Image source={item.image} />
            <Box marginLeft="12px">
              <Text color="text.200" fontWeight={600}>
                {item.title}
              </Text>
              <Text color="text.200">{item.source}</Text>
            </Box>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};
