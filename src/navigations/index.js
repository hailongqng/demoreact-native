// import { createAppContainer, createSwitchNavigator } from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';
import ScanQRCode from '../scenes/scanQR';
import GenerateQRCode from '../scenes/generateQR';
import SignInScreen from '../scenes/signin';
import MarketScreen from '../scenes/market';
import PaymentScreen from '../scenes/payment';

const StackNavigator = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator screenOptions={{ headerBackTitleVisible: false}}>
        <StackNavigator.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false}} />
        <StackNavigator.Screen
          name="App"
          component={AppNavigator}
          options={{
            headerShown: false,
          }}
        />
        <StackNavigator.Screen name="QRCode" component={ScanQRCode}/>
        <StackNavigator.Screen name="GenerateQRCode" component={GenerateQRCode}/>
        <StackNavigator.Screen name="SignInScreen" component={SignInScreen}/>
        <StackNavigator.Screen name="MarketScreen" component={MarketScreen}/>
        <StackNavigator.Screen name="PaymentScreen" component={PaymentScreen}/>
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
