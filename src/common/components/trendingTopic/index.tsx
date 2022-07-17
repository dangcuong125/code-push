import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { HStack, Pressable, Text } from 'native-base';
// navigator.navigate(VIDEO.VIDEO_LIST, {})

type PopularTopicsProps = {
  contentTopic: string;
  imageSrc: any;
  onPress?: () => void;
} & any;

export const PopularTopics = ({
  contentTopic,
  imageSrc,
  onPress,
  ...rest
}: PopularTopicsProps) => {
  return (
    <Pressable
      width={'46.5%'}
      height="70px"
      borderWidth={1}
      borderColor="#E6E6E6"
      borderRadius={'10px'}
      {...rest}>
      <TouchableOpacity onPress={onPress}>
        <HStack
          safeAreaX={2}
          justifyContent={'space-evenly'}
          alignItems={'center'}>
          <Text
            fontStyle={'normal'}
            fontSize={'14px'}
            fontWeight={600}
            lineHeight={'20px'}
            color={'#1A1A1A'}>
            {contentTopic}
          </Text>
          <Image
            source={imageSrc}
            resizeMode="contain"
            style={{
              width: 60,
              height: 60,
            }}
          />
        </HStack>
      </TouchableOpacity>
    </Pressable>
  );
};
