import React from 'react';
import {styles} from './styles';
import {Image, TextInput, View} from 'react-native';
import {AssetImage} from '../../assets';
const BottomChat = () => {
  return (
    <View style={styles.bottomContainer}>
      <Image style={styles.iconChat} source={AssetImage.Gif} />
      <Image style={styles.iconChat} source={AssetImage.Camera} />
      <Image style={styles.iconChat} source={AssetImage.Photo} />
      <Image style={styles.iconChat} source={AssetImage.Record} />
      <View style={styles.chatInputContainer}>
        <TextInput
          style={styles.textInputBottom}
          placeholder="Aa"
          multiline></TextInput>
        <Image style={styles.icLaugh} source={AssetImage.Laugh} />
      </View>
      <Image style={styles.iconChat} source={AssetImage.Task} />
    </View>
  );
};
export default BottomChat;
