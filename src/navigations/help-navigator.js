import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HelpScreen from '../scenes/help';
const helpStack = createStackNavigator();

const HelpStackScreen = () => {
  return (
    <helpStack.Navigator screenOptions={{headerBackTitleVisible: false}}>
      <helpStack.Screen
        name="HelpStack"
        component={HelpScreen}
        options={{
          headerTitle: 'Hỏi đáp',
          headerTitleAlign: 'center',
        }}
      />
    </helpStack.Navigator>
  );
};

export default HelpStackScreen;
