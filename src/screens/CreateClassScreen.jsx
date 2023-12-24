import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CreateClassForm from '../components/CreateClassForm';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../themes/Theme';

const CreateClassScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: COLORS.primaryLight}}>
      <View style={styles.CreateClassContainer}>
        <Text style={styles.CreateClassText}>Create Class</Text>
        <CreateClassForm></CreateClassForm>
      </View>
    </SafeAreaView>
  );
};

export default CreateClassScreen;

const styles = StyleSheet.create({
  CreateClassContainer: {
    paddingHorizontal: SPACING.space_12,
  },
  CreateClassText: {
    fontFamily: FONTFAMILY.poppins_bold,
    fontSize: FONTSIZE.size_28,
    marginVertical: SPACING.space_16,
    paddingHorizontal: SPACING.space_12,
    color: COLORS.primaryDark,
    opacity : 0.8,
  },
});
