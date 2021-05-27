import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MessengerStackScreen from '../../navigations/messenger-navigator';
import GroupStackScreen from '../../navigations/group-navigator';
import HelpStackScreen from '../../navigations/help-navigator';
import {AssetImage} from '../../assets';

const Tab = createBottomTabNavigator();
const ChatScreen = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="Messenger"
      lazy={true}
      backBehavior="none"
      tabBarOptions={{
        style: {borderTopWidth: 0, elevation: 0},
      }}>
      <Tab.Screen
        name="Messenger"
        component={MessengerStackScreen}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              style={{width: size, height: size}}
              source={AssetImage.Chat}
            />
          ),
          tabBarBadge: '',
          tabBarBadgeStyle: {
            color: 'white',
          },
        }}
      />
      <Tab.Screen
        name="Group"
        component={GroupStackScreen}
        options={{
          tabBarLabel: 'Nhóm',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              style={{width: size, height: size}}
              source={AssetImage.Group}
            />
          ),
          tabBarBadge: '',
          tabBarBadgeStyle: {
            color: 'white',
          },
        }}
      />
      <Tab.Screen
        name="Help"
        component={HelpStackScreen}
        listeners={({navigation, route}) => ({
          tabPress: e => {
            // Prevent default action
            e.preventDefault();

            // Do something with the `navigation` object
            navigation.navigate('HelpIndexScreen');
          },
        })}
        options={{
          tabBarLabel: 'Hỏi Đáp',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              style={{width: size, height: size}}
              source={AssetImage.Help}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ChatScreen;
