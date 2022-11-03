import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider, StatusBar} from 'native-base';
import MainFlow from './src/Screens/MainFlow';
import {Color} from './src/Helper/Constants';
import {Provider} from 'react-redux';
import store from './src/Redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SET_USER} from './src/Redux/Actions/UserActions';
import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from './src/Screens/Auth/AuthScreen';
import SplashScreen from './src/Screens/SplashScreen';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar
            animated
            barStyle={'light-content'}
            networkActivityIndicatorVisible
            backgroundColor={Color.primary}
          />
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Auth" component={AuthScreen} />
            <Stack.Screen name="Activity" component={MainFlow} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </NativeBaseProvider>
  );
};

export default App;
