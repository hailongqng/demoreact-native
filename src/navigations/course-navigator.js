import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CourseScreen from '../scenes/course';

const Stack = createStackNavigator();

const CourseStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerBackTitleVisible: false}}>
      <Stack.Screen
        name="CourseStack "
        component={CourseScreen}
        options={{
          title: 'Course',
        }}
      />
    </Stack.Navigator>
  );
};

export default CourseStack;
