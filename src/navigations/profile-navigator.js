import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../scenes/profile/index';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileStack"
        component={ProfileScreen}
        options={{
          title: 'Điểm Danh',
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
