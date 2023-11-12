import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { FONTFAMILY, FONTSIZE, SPACING } from '../themes/Theme';

const SignupScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.SignupContainer}>
        <Text style={styles.SignupText}>Create Account</Text>
        <View style={styles.SignupForm}></View>
        <View style={styles.SignupBtnContainer}></View>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  SignupContainer : {
    paddingLeft : SPACING.space_12,
    paddingRight : SPACING.space_12,

  },
  SignupText : {
    fontFamily : FONTFAMILY.poppins_bold,
    fontSize : FONTSIZE.size_28,
  }
});
