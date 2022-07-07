/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { store } from '@clvtube/common/redux/store';
import { theme } from '@clvtube/common/theme/theme';
import RootNavigator from '@clvtube/common/navigators/RootNavigator';
import './i18n.config';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <NativeBaseProvider theme={theme}>
      <Provider store={store}>
        <NavigationContainer>
          <QueryClientProvider client={queryClient}>
            <RootNavigator />
          </QueryClientProvider>
        </NavigationContainer>
      </Provider>
    </NativeBaseProvider>
  );
};

export default App;
