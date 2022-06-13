import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { Box } from 'native-base'
import { SearchingHeader } from '@clvtube/common/components/searching-header/index'
import PopularTopics from './PopularTopics'
import { OutStandingPodcast } from './OutstandingPodcast'
import { PodcastList } from './PodcastList'
import { Speak } from './Speak'
import { MaybeYouLike } from './MaybeYouLike'

const HomePodcast = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#FFFFFF' }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <Box bgColor="#FFFFFF" paddingTop="20px">
          <SearchingHeader />
          <PopularTopics />
        </Box>
        <OutStandingPodcast />
        <PodcastList />
        <MaybeYouLike />
        <Speak />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomePodcast

const styles = StyleSheet.create({})
