import React from 'react';
import {styles} from './styles';
import HeaderChat from './header';
import BottomChat from './bottom';
import Chat from './chat';
import {SafeAreaView} from 'react-native';
const ChatbotScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderChat />
      <Chat />
      <BottomChat />
    </SafeAreaView>
  );
};

export default ChatbotScreen;
