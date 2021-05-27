import React from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from '../styles';
import {AssetImage} from '../../../assets';

const swipeOutBtn = [
  {
    onPress: () => {
      '';
    },
    component: (
      <View style={styles.swipeContainer}>
        <Image style={styles.iconRemove} source={AssetImage.Remove} />
        <Text>Remove</Text>
      </View>
    ),
  },
];
export default swipeOutBtn;
