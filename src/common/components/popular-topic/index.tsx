import React from 'react'
import { Flex, Pressable } from 'native-base'
import { Text, StyleSheet, Image } from 'react-native'

type PopularTopicsProps = {
  contentTopic: string
  imageSrc: any
} & any

export const PopularTopics = ({
  contentTopic,
  imageSrc,
  ...rest
}: PopularTopicsProps) => {
  return (
    <Pressable
      borderColor="primary.100"
      borderWidth={1}
      width="161px"
      textAlign={'center'}
      borderRadius={'10px'}
      {...rest}
      height="70px">
      <Flex direction="row" justifyContent="space-around">
        <Text style={styles.textTopic}>{contentTopic}</Text>
        <Image source={imageSrc} />
      </Flex>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  textTopic: {
    lineHeight: 70,
    marginLeft: 8,
  },
})
