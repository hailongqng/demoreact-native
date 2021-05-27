import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CampusScreen from '../scenes/campus/index';
import NotificationScreen from '../scenes/notification/index';


const Stack = createStackNavigator();

const CampusStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerBackTitleVisible: false}}>
      <Stack.Screen
        name="CampusStack"
        component={CampusScreen}
        options={{
          title: 'Campus',
        }}
      />
      <Stack.Screen
        name="NotificationStack"
        component={NotificationScreen}
        options={{
          title: 'Thông báo',
          headerTitleAlign: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default CampusStack;
