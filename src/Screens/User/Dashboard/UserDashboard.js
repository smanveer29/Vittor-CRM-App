import {Heading, Stack, Text} from 'native-base';
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import {NavigationContainer} from '@react-navigation/native';
import UserHomeScreen from '../UserHomeScreen';
import {Color} from '../../../Helper/Constants';
import MenuScreen from '../MenuScreen';
const UserDashboard = () => {
  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';

    switch (routeName) {
      case 'Home':
        icon = 'ios-home-outline';
        break;
      case 'Menu':
        icon = 'settings-outline';
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? Color.primary : 'gray'}
      />
    );
  };
  const renderTabBar = ({routeName, selectedTab, navigate}) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {_renderIcon(routeName, selectedTab)}
        <Text>{routeName}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <Stack flex="1">
      <CurvedBottomBar.Navigator
        style={styles.bottomBar}
        strokeWidth={0.5}
        strokeColor="#DDDDDD"
        height={55}
        circleWidth={55}
        bgColor="white"
        initialRouteName="title1"
        borderTopLeftRight
        renderCircle={({selectedTab, navigate}) => (
          <Animated.View style={styles.btnCircle}>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
              }}
              onPress={() => Alert.alert('Click Action')}>
              <Ionicons name={'apps-sharp'} color="gray" size={25} />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}>
        <CurvedBottomBar.Screen
          options={{headerShown: false}}
          name="Home"
          position="LEFT"
          component={UserHomeScreen}
        />
        <CurvedBottomBar.Screen
          options={{headerShown: false}}
          name="Menu"
          component={MenuScreen}
          position="RIGHT"
        />
      </CurvedBottomBar.Navigator>
    </Stack>
  );
};
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    marginVertical: 5,
  },
  bottomBar: {},
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 30,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  img: {
    width: 30,
    height: 30,
  },
});
export default UserDashboard;
