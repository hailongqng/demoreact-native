import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PaymentScreen from '../scenes/payment';
import LibraryScreen from '../scenes/library';
import NewEventScreen from '../scenes/newEvent';
import NotificationDetailScreen from '../scenes/notificationDetail';

import SearchScreen from '../scenes/search';
import HomeTab from '../scenes/homeTab';
import ChatScreen from '../scenes/chat';
import NewGroupScreen from '../scenes/newGroup';
import ProfileChatScreen from '../scenes/profileChat';
import NewMessengerScreen from '../scenes/newMessenger';
import MessengerContentScreen from '../scenes/messengerContent';
import HelpIndexScreen from '../scenes/helpIndex';
import ChatbotStackScreen from './chatbot-navigator';
// const AuthNavigatorConfig = {
//     initialRouteName: 'Login',
//     header: null,
//     headerMode: 'none',
// };

// const RouteConfigs = {
//     Login: LoginScreen,
// };
const AppStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AppStack.Navigator screenOptions={{headerBackTitleVisible: false}}>
      <AppStack.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          headerShown: false,
        }}
      />
      <AppStack.Screen name="Payment" component={PaymentScreen} />
      <AppStack.Screen name="Library" component={LibraryScreen} />
      <AppStack.Screen name="NewEvent" component={NewEventScreen} />
      <AppStack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{headerShown: false}}
      />
      <AppStack.Screen
        name="HelpIndexScreen"
        component={HelpIndexScreen}
        options={{headerShown: false}}
      />
      <AppStack.Screen
        name="Chatbot"
        component={ChatbotStackScreen}
        options={{headerShown: false}}
      />
      <AppStack.Screen name="newGroup" component={NewGroupScreen} />
      <AppStack.Screen
        name="NotificationDetail"
        component={NotificationDetailScreen}
      />
      <AppStack.Screen name="Search" component={SearchScreen} />
      <AppStack.Screen name="ProfileChat" component={ProfileChatScreen}/>
      <AppStack.Screen name="NewMessenger" component={NewMessengerScreen}/>
      <AppStack.Screen name="MessengerContent" component={MessengerContentScreen}/>
    </AppStack.Navigator>
  );
};
// const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;
