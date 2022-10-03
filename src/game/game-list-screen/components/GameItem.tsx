import { Button, Pressable, Text } from 'native-base';
import React from 'react';

interface IGameItemProps {
  onPress: () => void;
  gameName: string;
  gameDescription: string;
}

export const GameItem = ({
  onPress,
  gameName,
  gameDescription,
}: IGameItemProps) => {
  return (
    <Pressable
      bgColor="text.600"
      height="250px"
      margin="auto"
      width="350px"
      onPress={onPress}
      borderRadius="10px">
      <Text
        color="neural.1"
        fontSize="30px"
        bold
        italic
        marginTop="auto"
        textAlign="center">
        {gameName}
      </Text>
      <Text textAlign="center">{gameDescription}</Text>
      <Button
        bgColor="neural.1"
        _text={{ color: 'text.600', fontWeight: 600 }}
        width="70px"
        margin="auto"
        onPress={onPress}
        mt="20px">
        Choi
      </Button>
    </Pressable>
  );
};
