import AsyncStorage from '@react-native-async-storage/async-storage';

export const Color = {
  primary: '#1180FF',
  text: 'white',
};

export const getLocalUser = async () => {
  const jsonVal = await AsyncStorage.getItem('@user');
  return jsonVal != null ? JSON.parse(jsonVal) : null;
};

export const logoutUser = async () => {
  await AsyncStorage.clear();
  // navigation.reset({index: 0, routes: [{name: 'Auth'}]});
};
