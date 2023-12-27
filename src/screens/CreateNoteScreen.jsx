import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CreateNoteForm from '../components/CreateNoteForm';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../themes/Theme';

const CreateNoteScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: COLORS.primaryLight}}>
      <View style={styles.CreateNoteContainer}>
        <Text style={styles.CreateNoteText}>Create Note</Text>
        <CreateNoteForm></CreateNoteForm>
      </View>
    </SafeAreaView>
  );
};

export default CreateNoteScreen;

const styles = StyleSheet.create({
  CreateNoteContainer: {
    paddingHorizontal: SPACING.space_12,
  },
  CreateNoteText: {
    fontFamily: FONTFAMILY.poppins_bold,
    fontSize: FONTSIZE.size_28,
    marginVertical: SPACING.space_16,
    paddingHorizontal: SPACING.space_12,
    color: COLORS.primaryDark,
    opacity: 0.8,
  },
});
