import React from 'react';
import { FormSaveNewWord } from './FormSaveNewWord';
import { SafeAreaView, ScrollView } from 'react-native';
import { SaveNewWordProps } from '../interface';

export const SaveNewWord = ({ navigation, route }: SaveNewWordProps) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#FFFFFF',
        height: '100%',
      }}>
      <ScrollView>
        <FormSaveNewWord navigation={navigation} route={route} />
      </ScrollView>
    </SafeAreaView>
  );
};
