import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { HStack, Pressable, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { VIDEO } from '../../constants/route.constants';

type PopularTopicsProps = {
  contentTopic: string;
  imageSrc: any;
} & any;

export const PopularTopics = ({
  contentTopic,
  imageSrc,
  ...rest
}: PopularTopicsProps) => {
  const navigator = useNavigation();

  return (
    <Pressable
      width={'46.5%'}
      height="70px"
      borderWidth={1}
      borderColor="#E6E6E6"
      borderRadius={'10px'}
      {...rest}>
      <TouchableOpacity
        onPress={() => navigator.navigate(VIDEO.VIDEO_LIST, {})}>
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
