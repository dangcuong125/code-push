import { SearchingHeader } from '@clvtube/common/components/searching-header/index'
import { ScrollView } from 'native-base'
import React from 'react'
import { SafeAreaView } from 'react-native'
// import { HomePageProps } from '../interfaces'
import { PodcastList } from './PodcastList'
import { Recently } from './Recently'
import { ReviseNewWord } from './ReviseNewWord'
import { Speak } from './Speak'
import { VideoList } from './VideoList'
import { Welcome } from './Welcome'

const HomePage = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <SearchingHeader />
        <Welcome />
        <VideoList />
        <Recently />
        <PodcastList />
        <ReviseNewWord />
        <Speak />
      </SafeAreaView>
    </ScrollView>
  )
}

export default HomePage
