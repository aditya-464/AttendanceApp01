import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import OuterStackNavigator from './src/navigators/OuterStackNavigator';
import HomeScreen from './src/screens/HomeScreen';
import CreateClassScreen from './src/screens/CreateClassScreen';
import CreateNoteScreen from './src/screens/CreateNoteScreen';
import NotesScreen from './src/screens/NotesScreen';
import ViewClassScreen from './src/screens/ViewClassScreen';
import ViewClassScreenOptionsModal from './src/components/ViewClassScreenOptionsModal';
import ViewNoteScreen from './src/screens/ViewNoteScreen';
import ViewNoteScreenOptionsModal from './src/components/ViewNoteScreenOptionsModal';
import AddStudentModal from './src/components/AddStudentModal';
import RemoveStudentModal from './src/components/RemoveStudentModal';
import ViewRecordModal from './src/components/ViewRecordModal';
import GenerateReportModal from './src/components/GenerateReportModal';
import DeleteClassModal from './src/components/DeleteClassModal';

const App = () => {
  return (
    // <OuterStackNavigator></OuterStackNavigator>
    // <HomeScreen></HomeScreen>
    // <CreateNoteScreen></CreateNoteScreen>
    // <CreateClassScreen></CreateClassScreen>
    // <NotesScreen></NotesScreen>
    <ViewClassScreen></ViewClassScreen>
    // <ViewClassScreenOptionsModal></ViewClassScreenOptionsModal>
    // <ViewNoteScreen></ViewNoteScreen>
    // <ViewNoteScreenOptionsModal></ViewNoteScreenOptionsModal>
    // <AddStudentModal></AddStudentModal>
    // <RemoveStudentModal></RemoveStudentModal>
    // <ViewRecordModal></ViewRecordModal>
    // <GenerateReportModal></GenerateReportModal>
    // <DeleteClassModal></DeleteClassModal>
  );
};

export default App;

const styles = StyleSheet.create({});
