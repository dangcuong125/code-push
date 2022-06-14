import React from 'react'
import { Box, ScrollView } from 'native-base'
import { SafeAreaView, StatusBar } from 'react-native'
import { HomePageProps } from '../interfaces'
import { SearchingHeader } from '@clvtube/common/components/searching-header/index'
import { Welcome } from './Welcome'
import { VideoList } from './VideoList'
import { Recently } from './Recently'
import { PodcastList } from './PodcastList'
import { ReviseNewWord } from './ReviseNewWord'
import { Speak } from './Speak'

const HomePage = ({ navigation, route }: HomePageProps) => {
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
