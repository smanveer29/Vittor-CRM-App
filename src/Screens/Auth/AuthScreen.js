import React from 'react';
import {Box, Center, Image, Stack} from 'native-base';
import Login from './Login';
const AuthScreen = () => {
  return (
    <Stack flex="1">
      <Box w="100%" h="30%">
        <Image
          source={require('../../Assets/Images/banner.png')}
          w="full"
          alt="banner"
          h="full"
        />
      </Box>
      <Box bg="#fff" h="80%" mx="4" rounded="md" mt="-32">
        <Login />
      </Box>
    </Stack>
  );
};

export default AuthScreen;
