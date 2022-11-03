import React, {useState} from 'react';
import {Box, Center, Heading, Input, Stack, Text} from 'native-base';
import ComButton from '../../Components/ComButton';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setUser} from '../../Redux/Actions/UserActions';
import {useNavigation} from '@react-navigation/native';
const Login = () => {
  const navigation = useNavigation();
  const [mobile, setMobile] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');

  const check = async () => {
    setLoading(true);
    const data = {
      name: 'Manveer',
      mobile: mobile,
      password: password,
      address: 'Ludhiana,India',
      role: 'user',
      token: '1',
    };
    dispatch(setUser(data));
    await AsyncStorage.setItem('@user', JSON.stringify(data));
    navigation.reset({index: 0, routes: [{name: 'Activity'}]});
    setLoading(false);
  };
  return (
    <Box flex="1" p="5">
      <Center m="3">
        <Heading color="#c8c8c8">Login</Heading>
      </Center>
      <Stack my="5">
        <Input
          my="4"
          value={mobile}
          onChangeText={e => setMobile(e)}
          variant={'underlined'}
          keyboardType="numeric"
          maxLength={10}
          placeholder="Mobile Number"
        />
        <Input
          my="4"
          value={password}
          secureTextEntry
          onChangeText={e => setPassword(e)}
          variant={'underlined'}
          placeholder="Password"
        />
      </Stack>
      <Center my="4">
        <ComButton
          loading={loading}
          title={'Login'}
          // disabled={!mobile || !password}
          onPress={() => {
            if (mobile === '1234567890' || password === '12345') {
              check();
            } else alert('Invalid Creds');
          }}
        />
        <Text my="3">Forgot Password?</Text>
      </Center>
    </Box>
  );
};

export default Login;
