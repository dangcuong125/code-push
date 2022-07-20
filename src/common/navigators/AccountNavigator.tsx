import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ACCOUNT_ROUTE } from '../constants/route.constants';
import Account from '@clvtube/home/account';
import EditAccount from '@clvtube/account/edit-account';

export type AccountStackParamList = {
  Index: {};
  EditAccount: {};
};

const Stack = createNativeStackNavigator<AccountStackParamList>();

const AccountRoute = () => {
  return (
    <Stack.Navigator initialRouteName={ACCOUNT_ROUTE.INDEX}>
      <Stack.Screen
        name={ACCOUNT_ROUTE.INDEX}
        component={Account}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ACCOUNT_ROUTE.EDIT_ACCOUNT}
        component={EditAccount}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AccountRoute;
