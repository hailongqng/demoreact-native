import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HelpStackScreen from '../../navigations/help-navigator';
import ChatbotStackScreen from '../../navigations/chatbot-navigator';

import {AssetImage} from '../../assets';

const Tab = createBottomTabNavigator();
const HelpIndexScreen = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="Help"
      lazy={true}
      backBehavior="none"
      tabBarOptions={{
        style: {borderTopWidth: 0, elevation: 0},
      }}>
      <Tab.Screen
        name="Help"
        component={HelpStackScreen}
        options={{
          tabBarLabel: 'Hỏi đáp',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              style={{width: size, height: size}}
              source={AssetImage.Help}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ChatBot"
        component={ChatbotStackScreen}
        listeners={({navigation, route}) => ({
          tabPress: e => {
            // Prevent default action
            e.preventDefault();

            // Do something with the `navigation` object
            navigation.navigate('Chatbot');
          },
        })}
        options={{
          tabBarLabel: 'Chatbot',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              style={{width: size, height: size}}
              source={AssetImage.Chatbot}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HelpIndexScreen;
