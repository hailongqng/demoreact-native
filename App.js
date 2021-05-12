// Nhúng thư viện
import * as React from 'react';
import { Text, View } from 'react-native';
import SplashScreen from './components/SplashScreen';
import LoginScreen from './components/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerScreen from './components/DrawerNavigator';
import BottapScreen from './components/BottabScreen';
import ToptapScreen from './components/ToptabScreen';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';


const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Drawer" component={DrawerScreen}/>
        <Stack.Screen name="Bottab" component={BottapScreen}/>
        <Stack.Screen name="Toptab" component={ToptapScreen}/>
        <Stack.Screen name="Screen1" component={Screen1}/>
        <Stack.Screen name="Screen2" component={Screen2}/>
        <Stack.Screen name="Screen3" component={Screen3}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;