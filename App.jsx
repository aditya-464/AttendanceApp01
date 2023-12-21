import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import OuterStackNavigator from './src/navigators/OuterStackNavigator';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    // <OuterStackNavigator></OuterStackNavigator>
    <HomeScreen></HomeScreen>
  );
};

export default App;

const styles = StyleSheet.create({});
