import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image,Text} from 'react-native';
import { AssetImage } from '../../assets';
import ProfileStack from '../../navigations/profile-navigator';
import MoreStack from '../../navigations/more-navigator';
import CourseStack from '../../navigations/course-navigator';
import CampusScreen from '../campus/index';
import CampusStack from '../../navigations/campus-navigator';

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Campus"
      lazy={true}
      backBehavior="none"
      tabBarOptions={{
        style: {borderTopWidth: 1, elevation: 1},
      }}>
      <Tab.Screen
        name="Chat"
        component={CampusScreen}
        listeners={({ navigation, route }) => ({
          tabPress: e => {
            // Prevent default action
            e.preventDefault();
      
            // Do something with the `navigation` object
            navigation.navigate('ChatScreen');
          },
        })}
        options={{
          tabBarLabel: 'Tin nhắn',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              style={{width: size, height: size}}
              source={AssetImage.Home}
            />
          ),
          tabBarBadge: 2,
          tabBarBadgeStyle: {
            color: 'white',
          },
          
        }}
        
      />
      <Tab.Screen
        name="Campus"
        component={CampusStack}
        options={{
          tabBarLabel: 'Campus',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              style={{width: size, height: size}}
              source={AssetImage.Campus}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: '',
          unmountOnBlur: true,
          tabBarIcon: ({color, size, focused}) => (
            <Image
              style={{width: size + 34, height: size + 40}}
              source={AssetImage.Profile}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Course"
        component={CourseStack}
        options={{
          tabBarLabel: 'Khóa học',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              style={{width: size, height: size}}
              source={AssetImage.Course}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreStack}
        options={{
          tabBarLabel: 'Thêm',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              style={{width: size, height: size}}
              source={AssetImage.More}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
