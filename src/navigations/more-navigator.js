import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MoreScreen from '../scenes/more/index';

const Stack = createStackNavigator();

const MoreStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerBackTitleVisible: false}}>
      <Stack.Screen
        name="MoreStack"
        component={MoreScreen}
        options={{
          title: 'Thông báo',
          headerTitleAlign: true
        }}
      />
    </Stack.Navigator>
  );
};

export default MoreStack;
