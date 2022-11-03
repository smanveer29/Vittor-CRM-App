import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AdminDashboard from './Dashboard/AdminDashboard';

const Stack = createStackNavigator();
const AdminFlow = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
    </Stack.Navigator>
  );
};

export default AdminFlow;
