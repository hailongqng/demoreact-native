/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import SplashScreen from './components/SplashScreen'
import LoginScreen from './components/LoginScreen'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
