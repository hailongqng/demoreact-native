import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ChatbotScreen from '../scenes/chatbot';
import {styles} from '../scenes/chatbot/styles';
import {Image, Text, View} from 'react-native';
import {AssetImage} from '../assets';
const ChatbotStack = createStackNavigator();

const ChatbotStackScreen = () => {
  return (
    <ChatbotStack.Navigator screenOptions={{headerBackTitleVisible: false}}>
      <ChatbotStack.Screen
        name="ChatbotStack"
        component={ChatbotScreen}
        options={{
          headerTitle: () => (
            <View style={styles.headerChatbot}>
              <Image
                style={styles.iconNewMessenger}
                source={AssetImage.Profile}
              />
              <Text style={styles.fontSizeChatbot}>Chatbot</Text>
            </View>
          ),
          headerTitleAlign: 'center',
        }}
      />
    </ChatbotStack.Navigator>
  );
};

export default ChatbotStackScreen;
