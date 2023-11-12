/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SignupScreen from './src/screens/SignupScreen';
import SignupForm from './src/components/SignupForm';

AppRegistry.registerComponent(appName, () => SignupForm);
