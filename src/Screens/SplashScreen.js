import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {Center, Heading} from 'native-base';
import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {useDispatch} from 'react-redux';
import {SET_USER} from '../Redux/Actions/UserActions';

const SplashScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const getLocalUser = async () => {
    try {
      const jsonVal = await AsyncStorage.getItem('@user');
      console.log(jsonVal);
      if (jsonVal !== null) {
        dispatch({type: SET_USER, payload: JSON.parse(jsonVal)});
        navigation.reset({index: 0, routes: [{name: 'Activity'}]});
      } else {
        navigation.reset({index: 0, routes: [{name: 'Auth'}]});
      }
    } catch (e) {
      console.log(e, 'exc');
    }
  };

  setTimeout(() => {
    getLocalUser();
  }, 3000);

  return (
    <Center flex="1">
      <Heading>CRM APP</Heading>
      <ActivityIndicator />
    </Center>
  );
};

export default SplashScreen;
