import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ButtonNavigate = ({children, routeName, params}) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate(routeName)
      }>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default ButtonNavigate;
