import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import OuterStackNavigator from './src/navigators/OuterStackNavigator';
import HomeScreen from './src/screens/HomeScreen';
import CreateClassScreen from './src/screens/CreateClassScreen';
import CreateNoteScreen from './src/screens/CreateNoteScreen';
import NotesScreen from './src/screens/NotesScreen';

const App = () => {
  return (
    // <OuterStackNavigator></OuterStackNavigator>
    <HomeScreen></HomeScreen>
    // <CreateNoteScreen></CreateNoteScreen>
    // <CreateClassScreen></CreateClassScreen>
    // <NotesScreen></NotesScreen>
  );
};

export default App;

const styles = StyleSheet.create({});
