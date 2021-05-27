import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MessengerScreen from '../scenes/messenger';

const messengerStack = createStackNavigator();

const MessengerStackScreen = () => {
  return (
    <messengerStack.Navigator screenOptions={{headerBackTitleVisible: false}}>
      <messengerStack.Screen
        name="MessengerStack"
        component={MessengerScreen}
        options={{
          title: 'Chat',
        }}
      />
    </messengerStack.Navigator>
  );
};

export default MessengerStackScreen;
