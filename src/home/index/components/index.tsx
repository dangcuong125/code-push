import SearchHeader from '@clvtube/common/components/searchHeader/index';
import { ScrollView, VStack } from 'native-base';
import React from 'react';

import { HomePageProps } from '../interfaces';
import { PodcastList } from './PodcastList';
import { Recently } from './Recently';
// import { ReviseNewWord } from './ReviseNewWord';
// import { Speak } from './Speak';
import { VideoList } from './VideoList';
import { Welcome } from './Welcome';

const HomePage = ({ navigation, route }: HomePageProps) => {
  // useEffect(() => {
  //   const getTokenValue = async () => {
  //     try {
  //       const token = await AsyncStorage.getItem('token_app')
  //       if (token) {
  //         console.log(token);
  //         Alert.alert(token);
  //       }
  //     } catch (error) {}
  //   };
  //   getTokenValue();
  // }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <VStack space={4}>
        <VStack safeAreaTop={10} bgColor={'white'}>
          <SearchHeader />
          <Welcome />
        </VStack>
        <VideoList />
        <Recently />
        <PodcastList navigation={navigation} route={route} />
        {/* <ReviseNewWord /> */}
        {/* <Speak /> */}
      </VStack>
    </ScrollView>
  );
};

export default HomePage;
