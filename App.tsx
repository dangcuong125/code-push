/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { store } from '@clvtube/common/redux/store';
import { theme } from '@clvtube/common/theme/theme';
import RootNavigator from '@clvtube/common/navigators/RootNavigator';
import 'react-native-linear-gradient';
import './i18n.config';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen?.hide();
  }, []);
  const queryClient = new QueryClient();
  const config = {
    dependencies: {
      'linear-gradient': require('react-native-linear-gradient').default,
    },
  };
  return (
    <NativeBaseProvider theme={theme} config={config}>
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
