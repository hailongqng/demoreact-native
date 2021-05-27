import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import GroupScreen from '../scenes/group';
const groupStack = createStackNavigator();

const GroupStackScreen = () => {
  return (
    <groupStack.Navigator screenOptions={{headerBackTitleVisible: false}}>
      <groupStack.Screen
        name="GroupStack"
        component={GroupScreen}
        options={{
          title: 'Group',
        }}
      />
    </groupStack.Navigator>
  );
};

export default GroupStackScreen;
