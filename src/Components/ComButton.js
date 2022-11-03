import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'native-base';
import {Color} from '../Helper/Constants';

const ComButton = ({title, onPress, disabled, loading}) => {
  return (
    <Button
      w="70%"
      size="lg"
      variant={'unstyled'}
      isLoading={loading}
      _text={{
        color: 'white',
      }}
      isDisabled={disabled}
      onPress={onPress}
      rounded="full"
      bg={Color.primary}>
      {title}
    </Button>
  );
};

export default ComButton;
