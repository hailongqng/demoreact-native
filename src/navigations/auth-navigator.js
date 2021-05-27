import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../scenes/login';  ``
import ScanQRCode from '../scenes/scanQR';


// const AuthNavigatorConfig = {
//     initialRouteName: 'Login',
//     header: null,
//     headerMode: 'none',
// };

// const RouteConfigs = {
//     Login: LoginScreen,
// };
const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={LoginScreen}/>
    </AuthStack.Navigator>
  );
};
// const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;
