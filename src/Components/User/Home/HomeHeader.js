import React from 'react';
import {Box, Heading, HStack, Text, VStack} from 'native-base';
import {Color} from '../../../Helper/Constants';
import {useSelector} from 'react-redux';
import {getUser} from '../../../Redux/Reducers/UserReducer';
import {UsersIcon} from 'react-native-heroicons/solid';

const HomeHeader = () => {
  const user = useSelector(getUser);
  console.log(user, 'y');
  return (
    <Box bg={Color.primary} p="4" h="15%">
      <HStack justifyContent={'space-between'} alignItems="center">
        <VStack>
          <Text color="white">Hello,</Text>
          <Heading color="#fff">{user?.name || 'Name'}</Heading>
          <Text color="white" textTransform={'capitalize'}>
            {user?.role}
          </Text>
        </VStack>
        <UsersIcon size="20" color="white" />
      </HStack>
    </Box>
  );
};

export default HomeHeader;
