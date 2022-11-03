import React from 'react';
import {Button, Stack, Text} from 'native-base';
import {logoutUser} from '../../../Helper/Constants';
import {useNavigation} from '@react-navigation/native';

const AdminDashboard = () => {
  const navigation = useNavigation();
  const logout = () => {
    console.log('prese');
    logoutUser();
    navigation.reset({index: 0, routes: [{name: 'Auth'}]});
  };
  return (
    <Stack flex="1" w="100%" h="100%" zIndex={100}>
      <Text>Admin Home </Text>
      <Button onPress={logout}>Logout</Button>
    </Stack>
  );
};

export default AdminDashboard;
