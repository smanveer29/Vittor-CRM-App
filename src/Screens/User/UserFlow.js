import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserDashboard from './Dashboard/UserDashboard';

const Stack = createStackNavigator();
const UserFlow = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="UserDashboard" component={UserDashboard} />
    </Stack.Navigator>
  );
};

export default UserFlow;
