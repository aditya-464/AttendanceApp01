import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import OuterStackNavigator from './src/navigators/OuterStackNavigator';
import HomeScreen from './src/screens/HomeScreen';
import CreateClassScreen from './src/screens/CreateClassScreen';

const App = () => {
  return (
    // <OuterStackNavigator></OuterStackNavigator>
    // <HomeScreen></HomeScreen>
    <CreateClassScreen></CreateClassScreen>
  );
};

export default App;

const styles = StyleSheet.create({});
