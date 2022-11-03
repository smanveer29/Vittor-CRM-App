import React from 'react';
import {HStack, Text} from 'native-base';

const Status = ({title, value}) => {
  return (
    <HStack
      shadow="1"
      my="0.5"
      justifyContent={'space-between'}
      p="3"
      bg="#fff"
      rounded={'md'}>
      <Text fontWeight={'bold'}>{title}</Text>
      <Text>{value}</Text>
    </HStack>
  );
};

export default Status;
