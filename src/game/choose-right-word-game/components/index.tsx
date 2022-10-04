import React from 'react';
import { SafeAreaView } from 'react-native';
import { Header } from './Header';
import { QuestionAndAnswers } from './QuestionAndAnswers';

export const ChooseRightWordGame = () => {
  return (
    <SafeAreaView style={{ width: '100%' }}>
      <Header />
      <QuestionAndAnswers />
    </SafeAreaView>
  );
};
