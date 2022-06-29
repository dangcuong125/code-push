import { SearchingHeader } from '@clvtube/common/components/searching-header/index'
import { ScrollView, VStack } from 'native-base'
import React from 'react'

import { PodcastList } from './PodcastList'
import { Recently } from './Recently'
import { ReviseNewWord } from './ReviseNewWord'
import { Speak } from './Speak'
import { VideoList } from './VideoList'
import { Welcome } from './Welcome'

const HomePage = () => {
  return (
    <ScrollView>
      <VStack space={4}>
        <VStack safeAreaTop={10} bgColor={'white'}>
          <SearchingHeader />
          <Welcome />
        </VStack>
        <VideoList />
        <Recently />
        <PodcastList />
        <ReviseNewWord />
        <Speak />
      </VStack>
    </ScrollView>
  )
}

export default HomePage
