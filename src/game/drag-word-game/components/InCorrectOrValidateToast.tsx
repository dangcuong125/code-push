import { Box, Text } from 'native-base';
import React from 'react';

interface IInCorrectAnswerOrValidateProps {
  content: string;
}

export const InCorrectOrValidateToast = ({
  content,
}: IInCorrectAnswerOrValidateProps) => {
  return (
    <Box borderRadius="10px" bgColor="#DC3545" padding="15px">
      <Text
        fontSize="15px"
        color="neural.1"
        textAlign="center"
        fontWeight="400">
        {content}
      </Text>
    </Box>
  );
};
