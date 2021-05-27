import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback, ImageStore} from 'react-native';
import { AssetImage } from '../assets';

const IvNotication = ({number, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{marginHorizontal: 12}}>
        <Image
          style={{height: 32, width: 32}}
          source={AssetImage.Notification}
        />
        <Text
          style={{
            height: 20,
            width: 20,
            backgroundColor: 'red',
            position: 'absolute',
            right: -5,
            top: -8,
            color: '#fff',
            borderRadius: 10,
            textAlign: 'center',
          }}>
          {number}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default IvNotication;
