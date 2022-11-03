import React from 'react';
import {Center, Heading, Stack} from 'native-base';
import ComButton from '../../Components/ComButton';
import {useNavigation} from '@react-navigation/native';
import {logoutUser} from '../../Helper/Constants';

const MenuScreen = () => {
  const navigation = useNavigation();
  const logout = () => {
    console.log('prese');
    logoutUser();
    navigation.reset({index: 0, routes: [{name: 'Auth'}]});
  };
  return (
    <Stack flex="1" p="2">
      <Heading>Menu</Heading>
      <Center>
        <ComButton title={'Logout'} onPress={logout} />
      </Center>
    </Stack>
  );
};

export default MenuScreen;
