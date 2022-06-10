import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { SearchingHeader } from '@clvtube/common/components/searching-header/index'
import PopularTopics from './PopularTopics'

const HomePodcast = () => {
  return (
    <SafeAreaView>
      <SearchingHeader />
      <PopularTopics />
    </SafeAreaView>
  )
}

export default HomePodcast

const styles = StyleSheet.create({})
